package com.project.meonoservices.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
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

    @Transactional
    public void updateUser(String username, String firstname, String lastname, String password, String email) {
        Optional<Users> userOptional = usersRepository.findUserByUsername(username);
        if (!userOptional.isPresent()){
            throw new IllegalStateException("Account with username " + username + " does not exist");
        }

        Users user = userOptional.get();

        if(firstname != null && firstname.length() > 0 &&
                !Objects.equals(user.getFirstname(), firstname)){
            user.setFirstname(firstname);
        }

        if(lastname != null && lastname.length() > 0 &&
                !Objects.equals(user.getLastname(), lastname)){
            user.setLastname(lastname);
        }

        if(password != null && password.length() > 0 &&
                !Objects.equals(user.getPassword(), password)){
            user.setPassword(password);
        }

        if(email != null && email.length() > 0 &&
                !Objects.equals(user.getEmail(), email)){
            Optional<Users> emailOptional = usersRepository.findUserByEmail(email);
            if (emailOptional.isPresent()){
                throw new IllegalStateException("Email already registered");
            }
            else {
                user.setEmail(email);
            }
        }


    }
}
