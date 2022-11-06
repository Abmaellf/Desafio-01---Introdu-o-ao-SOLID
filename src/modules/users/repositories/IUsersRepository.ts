/* eslint-disable prettier/prettier */
import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
  // admin: boolean;

}

interface IUsersRepository {
  create({ name, email }: ICreateUserDTO): User;
  findById(id: string): User;
  findByEmail(email: string): User;
  turnAdmin(user: User): User;
  list(): User[];
}

export { IUsersRepository, ICreateUserDTO };
