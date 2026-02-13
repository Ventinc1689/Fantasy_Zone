package com.ventinc.fantasy_football.model;
import jakarta.persistence.*;
import lombok.*;

import java.util.Objects;

@Entity
@Table(name = "player_stats")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Player {

    @Id
    @Column(name = "player_id")
    private Long player_id;
    private String name;
    private String team;
    private String position;
    private Integer age;
    private Integer games;
    private Integer passing_completions;
    private Integer passing_attempts;
    private Integer passing_yards;
    private Integer passing_td;
    private Integer interceptions;
    private Integer rushing_attempts;
    private Integer rushing_yards;
    private Float yard_per_attempt;
    private Integer rushing_td;
    private Integer targets;
    private Integer receptions;
    private Integer reception_yards;
    private Float yard_per_reception;
    private Integer reception_td;
    private Integer total_td;
    private Float ppr;

    @Column(name = "ppr_per_game")
    private Float pprPerGame;

    @Override
    public String toString() {
        return "Player{" +
                "id=" + player_id +
                ", name='" + name + '\'' +
                ", team='" + team + '\'' +
                ", position='" + position + '\'' +
                ", age=" + age +
                ", games=" + games +
                ", passing_completions=" + passing_completions +
                ", passing_attempts=" + passing_attempts +
                ", passing_yards=" + passing_yards +
                ", passing_td=" + passing_td +
                ", interceptions=" + interceptions +
                ", rushing_attempts=" + rushing_attempts +
                ", rushing_yards=" + rushing_yards +
                ", yards_per_carry=" + yard_per_attempt +
                ", rushing_touchdowns=" + rushing_td +
                ", targets=" + targets +
                ", receptions=" + receptions +
                ", reception_yards=" + reception_yards +
                ", yards_per_reception=" + yard_per_reception +
                ", reception_touchdowns=" + reception_td +
                ", total_touchdowns=" + total_td +
                ", fantasy_points=" + ppr +
                ", fantasy_points_per_game=" + pprPerGame +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Player player = (Player) o;
        return Objects.equals(player_id, player.player_id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(player_id);
    }
}
