package com.example.demo.service.serviceImpl;

import com.example.demo.dao.DemoDao;
import com.example.demo.entity.Demo;
import com.example.demo.service.DemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * Demo: fang.yefei.
 * Date: 2019/ /
 * Features:
 */
@Service
public class DemoServiceImpl implements DemoService {
    @Autowired
    private DemoDao demoDao;

    @Override
    public List<Demo> listUserById(Integer age) {

        return demoDao.listUserById(age);
    }
}
