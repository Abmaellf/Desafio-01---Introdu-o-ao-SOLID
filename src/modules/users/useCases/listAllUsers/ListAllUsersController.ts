/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {

    const { user_id } = request.headers;

    try {
      const user = { user_id: user_id as string }

      if (!user) {
        return response.status(404).send();
      }

      const allUsers = this.listAllUsersUseCase.execute(user);
      if (!allUsers) {
        return response.status(404);
      }

      return response.json(allUsers);
    }
    catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
