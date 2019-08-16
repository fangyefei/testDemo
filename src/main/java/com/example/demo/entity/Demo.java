package com.example.demo.entity;


import java.io.Serializable;

/**
 * Created with IntelliJ IDEA.
 * Demo: fang.yefei.
 * Date: 2019/ /
 * Features:
 */

public class Demo implements Serializable {
    private static final long serialVersionUID = -2930688865135927780L;
    private String name;
    private Integer age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

}
