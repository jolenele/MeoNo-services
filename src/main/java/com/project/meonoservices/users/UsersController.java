package com.project.meonoservices.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public void registerNewUser(@RequestBody Users user) {
        userService.addNewUser(user);
    }

    @DeleteMapping(path="{username}")
    public void deleteUser(@PathVariable("username") String username) {
        userService.deleteUser(username);
    }
}

