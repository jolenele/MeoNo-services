package com.project.meonoservices.users;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    public List<Users> getUsers() {
        return List.of(new Users(1, "emmagreen", "Emma", "Green", "emmagreen@gmail.com","helloword"));

    }
}
