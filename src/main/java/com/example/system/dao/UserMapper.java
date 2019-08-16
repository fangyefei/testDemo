package com.example.system.dao;



import com.example.common.config.MyMapper;
import com.example.system.entity.User;
import com.example.system.entity.UserWithRole;

import java.util.List;

public interface UserMapper extends MyMapper<User> {
    User findByName(String userName);

    List<User> findUserWithDept(User user);

    List<UserWithRole> findUserWithRole(Long userId);

    User findUserProfile(User user);

    List<String > queryRegionId(Long userId);

    List<String> queryUserIdByAdmin(Long userId);

    List<User> findManagerList(User user);

    String findManagerNameById(String administrator);
}