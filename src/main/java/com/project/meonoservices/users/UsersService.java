package com.project.meonoservices.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersService {
    private final UsersRepository usersRepository;

    @Autowired
    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<Users> getUsers() {
        return usersRepository.findAll();
    }

    public void addNewUser(Users user) {
        Optional<Users> userOptional = usersRepository.findUserByUsername(user.getUsername());
        if (userOptional.isPresent()){
            throw new IllegalStateException("Username already exists");
        }
        usersRepository.save(user);
    }

    public void deleteUser(String username) {
        Optional<Users> userOptional = usersRepository.findUserByUsername(username);
        if (!userOptional.isPresent()){
            throw new IllegalStateException("Account with this username does not exist");
        }
        usersRepository.delete(userOptional.get());

    }
}
