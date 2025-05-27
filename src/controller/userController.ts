import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { User, UserRequest } from '../types';
import UserService from 'src/services/userService';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() userData: UserRequest) {
    return this.userService.createUser(userData.name, userData.email);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}