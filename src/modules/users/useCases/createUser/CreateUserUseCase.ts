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
      throw new Error("Mensagem do erro")
    }

    const user = this.usersRepository.create({ name, email });

    return user;
  }

}

export { CreateUserUseCase };
