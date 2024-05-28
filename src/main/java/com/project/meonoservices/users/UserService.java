package com.project.meonoservices.users;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    public List<User> getUsers() {
        return List.of(new User(1, "emmagreen", "Emma", "Green", "emmagreen@gmail.com","helloword"));

    }
}
