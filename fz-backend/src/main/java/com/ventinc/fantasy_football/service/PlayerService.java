package com.ventinc.fantasy_football.service;

import com.ventinc.fantasy_football.model.Player;
import com.ventinc.fantasy_football.repo.PlayerRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {

    private final PlayerRepo playerRepo;

    public PlayerService(PlayerRepo playerRepo) {
        this.playerRepo = playerRepo;
    }

    // Retrieve all players
    public List<Player> getAllPlayers() {
        return playerRepo.findAll();
    }

    // Retrieve players by team
    public List<Player> getPlayersByTeam(String team) {
        if (team == null || team.trim().isEmpty()) {
            return List.of();
        }
        return playerRepo.findByTeamContainingIgnoreCase(team);
    }

    // Retrieve players by name
    public List<Player> getPlayersByName(String name) {
        if (name == null || name.trim().isEmpty()) {
            return List.of();
        }
        return playerRepo.findByNameContainingIgnoreCase(name);
    }

    // Retrieve players by position
    public List<Player> getPlayersByPosition(String position) {
        if (position == null || position.trim().isEmpty()) {
            return List.of();
        }
        return playerRepo.findByPositionContainingIgnoreCase(position);
    }

    // Retrieve all players sorted by PPR per game
    public List<Player> getAllPlayersSortedByPprPerGame(){
        return playerRepo.findAllByOrderByPprPerGameDesc();
    }

    // Retrieve players by team sorted by PPR per game
    public List<Player> getPlayersByTeamSortedByPprPerGame(String team){
        if (team == null || team.trim().isEmpty()) {
            return List.of();
        }
        return playerRepo.findByTeamContainingIgnoreCaseOrderByPprPerGameDesc(team);
    }

    // Retrieve players by position sorted by PPR per game
    public List<Player> getPlayersByPositionSortedByPprPerGame(String position){
        if (position == null || position.trim().isEmpty()) {
            return List.of();
        }
        return playerRepo.findByPositionContainingIgnoreCaseOrderByPprPerGameDesc(position);
    }
}
