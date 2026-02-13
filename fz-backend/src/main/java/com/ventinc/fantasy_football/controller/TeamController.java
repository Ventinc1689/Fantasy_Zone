package com.ventinc.fantasy_football.controller;

import com.ventinc.fantasy_football.model.Team;
import com.ventinc.fantasy_football.service.TeamService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/team")
public class TeamController {

    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    // Retrieve all teams
    @GetMapping
    public ResponseEntity<List<Team>> getAllTeams(){
        return ResponseEntity.ok(teamService.getAllTeams());
    }

    // Retrieve teams by name
    @GetMapping("/name/{name}")
    public ResponseEntity<List<Team>> getTeamsByName(@PathVariable String name){
        return ResponseEntity.ok(teamService.getTeamsByName(name));
    }

    // Retrieve all teams sorted by wins descending
    @GetMapping("/sorted/wins")
    public ResponseEntity<List<Team>> getAllTeamsSortedByWins(){
        return ResponseEntity.ok(teamService.getAllTeamsSortedByWins());
    }

    // Update team logo URL
    @PutMapping("/{team_id}")
    public ResponseEntity<Void> updateLogoUrl(@PathVariable Long team_id, @RequestBody String logoUrl) {
        teamService.updateLogoUrl(team_id, logoUrl);
        return ResponseEntity.noContent().build();
    }
}
