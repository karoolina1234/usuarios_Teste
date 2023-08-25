import prismaClient from "../../prisma";

interface UserProps{
    id: string
}

class RemoveUserService{

        async execute({id}:UserProps){
            const user = await prismaClient.user.delete({
                where:{
                    id: id
                }
            })

            return user
        }
}

export {RemoveUserService}