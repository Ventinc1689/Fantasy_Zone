package com.ventinc.fantasy_football.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ventinc.fantasy_football.model.Player;

@Repository
public interface PlayerRepo extends JpaRepository<Player, Long> {

    List<Player> findByTeamContainingIgnoreCase(String team);
    List<Player> findByNameContainingIgnoreCase(String name);
    List<Player> findByPositionContainingIgnoreCase(String position);
    List<Player> findAllByOrderByPprPerGameDesc();
    List<Player> findByTeamContainingIgnoreCaseOrderByPprPerGameDesc(String team);
    List<Player> findByPositionContainingIgnoreCaseOrderByPprPerGameDesc(String position);
}
