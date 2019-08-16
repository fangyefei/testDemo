package com.example.demo.dao;

import com.example.demo.entity.Demo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * Demo: fang.yefei.
 * Date: 2019/ /
 * Features:
 */

@Mapper
public interface DemoDao {

    List<Demo> listUserById(@Param("age") Integer age);

}
