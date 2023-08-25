import prismaClient from "../../prisma";

interface UserProps {
    id: string
    name: string,
    email: string,
    phone: string,
    description: string
}

class UpdateUserService {
    async execute({ id, name, email, phone, description }: UserProps) {
        const user = await prismaClient.user.update({
            where: {
                id: id
            },
            data: {
                name: name,
                email: email,
                phone: phone,
                description: description
            }
        })

        return user
    }
}

export {UpdateUserService}