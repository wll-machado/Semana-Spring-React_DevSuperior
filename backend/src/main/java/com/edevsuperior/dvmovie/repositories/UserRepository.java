package com.edevsuperior.dvmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edevsuperior.dvmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
