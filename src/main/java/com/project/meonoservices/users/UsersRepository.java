package com.project.meonoservices.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository
        extends JpaRepository<Users, Integer> {

    @Query("SELECT u FROM Users u WHERE u.username = ?1")
    Optional<Users> findUserByUsername(String username);
}
