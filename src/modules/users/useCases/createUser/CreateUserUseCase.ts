/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ name, email }: IRequest): User {
    const userAlreadyExits = this.usersRepository.findByEmail(email);

    if (userAlreadyExits) {
      throw Error("User not Alread exists");
    }

    const user = { name, email }

    this.usersRepository.create(user);

    return userAlreadyExits;
  }

}

export { CreateUserUseCase };
