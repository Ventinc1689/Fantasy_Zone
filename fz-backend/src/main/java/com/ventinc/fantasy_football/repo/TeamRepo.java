package com.ventinc.fantasy_football.repo;

import com.ventinc.fantasy_football.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamRepo extends JpaRepository<Team, Long> {
    List<Team> findByNameContainingIgnoreCase(String name);
    List<Team> findAllByOrderByWinsDesc();
}
