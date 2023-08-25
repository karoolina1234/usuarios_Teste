import { Request, Response } from "express";
import { RemoveUserService } from "../../services/user/RemoveUserService";

class RemoveUserController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;

        const removeUser = new RemoveUserService();

        const user = await removeUser.execute({
            id
        })

        return res.json(user)
    }
}

export {RemoveUserController}