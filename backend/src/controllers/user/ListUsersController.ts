import { Request, Response } from "express";
import { ListUsersService } from "../../services/user/ListUserService";


class ListUsersController{
    async handle(req: Request, res:Response){
        const list = new ListUsersService();
        
        const user = await list.execute()

        return res.json(user)
    }
}

export {ListUsersController}