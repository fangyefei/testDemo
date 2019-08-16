package com.example.demo.controller;

import com.example.demo.entity.Demo;
import com.example.demo.service.DemoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * Demo: fang.yefei.
 * Date: 2019/ /
 * Features:
 */
@RestController
public class DemoController {
    private final static Logger logger = LoggerFactory.getLogger(DemoController.class);


    @Autowired
    private DemoService demoService;

    @RequestMapping(value ="/logon",method =RequestMethod.GET )
    public String index(){
        return "forward:/logon";
    }

    @RequestMapping(value = "/listUser/byId",method = RequestMethod.GET)
    public List<Demo> listUserById(Integer age){
        logger.info("age is: " + age);
        return demoService.listUserById(age);
    }
}
