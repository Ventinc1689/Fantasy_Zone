package com.ventinc.fantasy_football.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

@Entity
@Table(name = "standings")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Team {

    @Id
    @Column(name = "team_id")
    private Integer team_id;

    private String name;
    private Integer wins;
    private Integer losses;
    private Integer ties;

    @Column(name = "wl_pct")
    private Float wlPct;

    @Column(name = "points_for")
    private Integer pointsFor;

    @Column(name = "points_for_per_game")
    private Float pointsForPerGame;

    @Column(name = "points_against")
    private Integer pointsAgainst;

    @Column(name = "points_against_per_game")
    private Float pointsAgainstPerGame;

    @Column(name = "logo_url")
    private String logoUrl;

    @Override
    public String toString() {
        return "Team{" +
                "team_id=" + team_id +
                ", name='" + name + '\'' +
                ", wins=" + wins +
                ", losses=" + losses +
                ", ties=" + ties +
                ", wlPct=" + wlPct +
                ", pointsFor=" + pointsFor +
                ", pointsForPerGame=" + pointsForPerGame +
                ", pointsAgainst=" + pointsAgainst +
                ", pointsAgainstPerGame=" + pointsAgainstPerGame +
                ", logoUrl='" + logoUrl + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Team team = (Team) o;
        return Objects.equals(team_id, team.team_id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(team_id);
    }
}
