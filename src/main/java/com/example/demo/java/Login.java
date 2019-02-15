package com.example.demo.java;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created with IntelliJ IDEA.
 * User: fyf.
 * Date: 2019/2/4
 * Features:
 */
@RestController
public class Login {

    @RequestMapping("/hello")
    public String hello(){

        return "hello spring boot";
    }
}
