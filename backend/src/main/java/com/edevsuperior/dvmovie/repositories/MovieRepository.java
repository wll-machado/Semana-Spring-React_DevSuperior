package com.edevsuperior.dvmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edevsuperior.dvmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
