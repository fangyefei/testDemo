package com.example.system.service;


import com.example.common.domain.QueryRequest;
import com.example.common.service.IService;
import com.example.system.entity.User;
import com.example.system.entity.UserWithRole;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;

import java.util.List;


@CacheConfig(cacheNames = "UserService")
public interface UserService extends IService<User> {

    UserWithRole findById(Long userId);

    User findByName(String userName);

    List<User> findUserWithDept(User user, QueryRequest request);

    @CacheEvict(key = "#p0", allEntries = true)
    void registUser(User user);

    void updateTheme(String theme, String userName);

    @CacheEvict(allEntries = true)
    void addUser(User user, Long[] roles);

    @CacheEvict(key = "#p0", allEntries = true)
    void updateUser(User user, Long[] roles);

    @CacheEvict(key = "#p0", allEntries = true)
    void deleteUsers(String userIds);

    void updateLoginTime(String userName);

    void updatePassword(String password);

    User findUserProfile(User user);

    void updateUserProfile(User user);

    List<User> findManagerList(User user);

    String findManagerNameById(String administrator);
}