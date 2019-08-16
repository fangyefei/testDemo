package com.example.demo.service;

import com.example.demo.entity.Demo;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * Demo: fang.yefei.
 * Date: 2019/ /
 * Features:
 */

@Service
public interface DemoService {
    List<Demo> listUserById(Integer age);

}
