package com.edevsuperior.dvmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edevsuperior.dvmovie.entities.Score;
import com.edevsuperior.dvmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
