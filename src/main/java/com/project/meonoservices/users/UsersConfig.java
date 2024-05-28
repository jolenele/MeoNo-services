package com.project.meonoservices.users;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UsersConfig {

    @Bean
    CommandLineRunner commandLineRunner(UsersRepository repository){
        return args -> {
            Users a = new Users("emmagreen", "emma","green","emmagreen@gmail.com","test123");
            repository.save(a);
        };
    }
}
