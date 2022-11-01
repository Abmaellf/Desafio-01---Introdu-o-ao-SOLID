/* eslint-disable prettier/prettier */
import { request } from "express";

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }



  execute({ user_id }: IRequest): User[] {



    const users = this.usersRepository.list();

    const user = this.usersRepository.findById(user_id)

    if ((!user) || (user.admin === false)) {
      throw new Error("User Already exists or not is admin");
    }

    return users;
  }


  findUser({ user_id }: IRequest): User {

    const user = this.usersRepository.findById(user_id);

    // if ((!user) || (user.admin === false)) {
    //   throw new Error("User Already exists or not is admin");
    // }

    return user;
  }


}

export { ListAllUsersUseCase };
