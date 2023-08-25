import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { ListUsersController } from "./controllers/user/ListUsersController";
import { RemoveUserController } from "./controllers/user/RemoveUser.controller";
import { UpdateUserController } from "./controllers/user/UpdateUserController";


const router = Router();

router.post('/users', new CreateUserController().handle)
router.get('/users/list', new ListUsersController().handle)
router.delete('/users/remove',  new RemoveUserController().handle )
router.put('/users/edit',  new UpdateUserController().handle )




export { router }