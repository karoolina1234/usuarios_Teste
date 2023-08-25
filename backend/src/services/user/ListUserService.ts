import prismaClient from "../../prisma";


class ListUsersService{
    async execute(){
        const user = await prismaClient.user.findMany()
        return user
    }
}

export {ListUsersService}