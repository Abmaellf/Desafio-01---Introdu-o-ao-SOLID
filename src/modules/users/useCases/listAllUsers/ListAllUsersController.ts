/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const user = request;


    const allUsers = this.listAllUsersUseCase.execute(request: Request);
    return response.json(allUsers);
  }
}

export { ListAllUsersController };
