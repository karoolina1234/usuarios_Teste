import { Request, Response } from "express";
import { CreateuserService } from "../../services/user/CreateUserService";


class CreateUserController {
    async handle(req:Request, res:Response){
        const {name, email, phone, description} = req.body;

        const createUser = new CreateuserService();

        const user = await createUser.execute({
            name,
            email, 
            phone,
            description
        })
        return res.json(user)
    }
}

export {CreateUserController}