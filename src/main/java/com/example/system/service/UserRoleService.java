package com.example.system.service;


import com.example.common.service.IService;
import com.example.system.entity.UserRole;

public interface UserRoleService extends IService<UserRole> {

	void deleteUserRolesByRoleId(String roleIds);

	void deleteUserRolesByUserId(String userIds);
}
