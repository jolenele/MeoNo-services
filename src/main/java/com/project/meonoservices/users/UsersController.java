package com.project.meonoservices.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="api/v1/user")
public class UsersController {

    private final UsersService userService;

    @Autowired
    public UsersController(UsersService userService) {
        this.userService = userService;
    }


    @GetMapping
    public List<Users> getUsers() {
        return userService.getUsers();
    }
}

