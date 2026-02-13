package com.ventinc.fantasy_football.controller;

import com.ventinc.fantasy_football.model.Player;
import com.ventinc.fantasy_football.service.PlayerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/player")
public class PlayerController {

    private final PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    // Retrieve all players
    @GetMapping
    public ResponseEntity<List<Player>> getAllPlayers() {
        return ResponseEntity.ok(playerService.getAllPlayers());
    }

    // Retrieve players by team
    @GetMapping("/team/{team}")
    public ResponseEntity<List<Player>> getPlayersByTeam(@PathVariable String team) {
        return ResponseEntity.ok(playerService.getPlayersByTeam(team));
    }

    // Retrieve players by name
    @GetMapping("/name/{name}")
    public ResponseEntity<List<Player>> getPlayersByName(@PathVariable String name) {
        return ResponseEntity.ok(playerService.getPlayersByName(name));
    }

    // Retrieve players by position
    @GetMapping("/position/{position}")
    public ResponseEntity<List<Player>> getPlayersByPosition(@PathVariable String position) {
        return ResponseEntity.ok(playerService.getPlayersByPosition(position));
    }

    // Retrieve all players sorted by PPR per game
    @GetMapping("/sorted/ppr_per_game")
    public ResponseEntity<List<Player>> getAllPlayersSortedByPprPerGame() {
        return ResponseEntity.ok(playerService.getAllPlayersSortedByPprPerGame());
    }

    // Retrieve players by team sorted by PPR per game
    @GetMapping("/sorted/ppr_per_game/team/{team}")
    public ResponseEntity<List<Player>> getPlayersByTeamSortedByPprPerGame(@PathVariable String team){
        return ResponseEntity.ok(playerService.getPlayersByTeamSortedByPprPerGame(team));
    }

    // Retrieve players by position sorted by PPR per game
    @GetMapping("/sorted/ppr_per_game/position/{position}")
    public ResponseEntity<List<Player>> getPlayersByPositionSortedByPprPerGame(@PathVariable String position){
        return ResponseEntity.ok(playerService.getPlayersByPositionSortedByPprPerGame(position));
    }
}
