import prismaClient from "../../prisma";

interface dataUser {
    name: string,
    email: string,
    phone: string,
    description: string
}

class CreateuserService { 

    async execute({name, email, phone, description}: dataUser){
        if(!email){
            throw new Error("E-mail obrigatório");
        }
        if(!name){
            throw new Error("Nome é obrigatório")
        }

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                phone: phone, 
                description: description
            }

        })

        return user
    }

}


export {CreateuserService}