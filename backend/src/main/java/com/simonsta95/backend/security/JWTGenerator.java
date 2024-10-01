package com.simonsta95.backend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JWTGenerator {

    // Convert the JWT secret string into a Key object
    private final Key key;

    // Constructor to initialize the key
    public JWTGenerator() {
        this.key = Keys.hmacShaKeyFor(SecurityConstants.JWT_SECRET.getBytes()); // Ensure the secret is at least 256 bits
    }

    public String generateToken(Authentication authentication) {
        String username = authentication.getName();
        Date currentDate = new Date();
        Date expirationDate = new Date(currentDate.getTime() + SecurityConstants.JWT_EXPIRATION_TIME);

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(currentDate)
                .setExpiration(expirationDate)
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }

    public String getUsernameFromJWT(String token) {
        // Create a JwtParser instance
        JwtParser jwtParser = Jwts.parser()
                .setSigningKey(key)  // Set the signing key for validation
                .build();

        // Parse the token to extract claims
        Claims claims = jwtParser.parseClaimsJws(token).getBody();

        return claims.getSubject();  // Return the subject (username)
    }

    public boolean validateToken(String token) {
        try {
            // Parse the JWT token, verifying its signature and expiration
            Jwts.parser()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (Exception ex) {
            // Handle the case when the token is invalid
            throw new AuthenticationCredentialsNotFoundException("JWT Token was expired or incorrect: " + ex.getMessage());
        }
    }
}
