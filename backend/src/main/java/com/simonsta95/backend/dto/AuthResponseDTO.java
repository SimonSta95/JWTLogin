package com.simonsta95.backend.dto;

import com.simonsta95.backend.models.Role;
import lombok.Data;

import java.util.List;

@Data
public class AuthResponseDTO {
    private String token;
    private String tokenType = "Bearer ";
    private List<String> role;

    public AuthResponseDTO(String token, List<String> role) {
        this.token = token;
        this.role = role;
    }
}
