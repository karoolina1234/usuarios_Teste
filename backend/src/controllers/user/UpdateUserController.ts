import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUSerService";

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, phone, description } = req.body;
        const id = req.query.id as string;

        const update = new UpdateUserService();

        const user = await update.execute({
            id,
            name,
            email,
            phone,
            description
        })
         return res.json(user)
    }
}

export {UpdateUserController}