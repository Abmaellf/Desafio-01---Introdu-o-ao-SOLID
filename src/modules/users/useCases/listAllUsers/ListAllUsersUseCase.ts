/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {

    const id = this.usersRepository.findById(user_id);

    const users = this.usersRepository.list();

    if ((!users) && (id.admin === false)) {
      throw new Error("Mensagem do erro");
    }
    return users;
  }
}

export { ListAllUsersUseCase };
