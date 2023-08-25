import { Button, Dialog, DialogTitle } from "@mui/material";
import axios from "axios";
import React from "react";

const RemoveItem = ({open, handleClose, item})=>{

    const deleteUser = (id) =>{
        if(item.address){
            deleteUserApi(id)
        }
        var users = JSON.parse(localStorage.getItem("users"));
        const user = users.filter((item) => item.id !== id)
        localStorage.setItem("users", JSON.stringify(user))
        handleClose()
    }

    const deleteUserApi = async (userId) => {
        try {
          const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
          console.log(response)
        } catch (error) {
          console.error(error);
        }
      };
    return(
        <Dialog open={open}>
            <DialogTitle>
                Remover usuário {item.name}
            </DialogTitle>

            <Button variant="gray" onClick={()=>deleteUser(item.id)}>OK</Button>
            <Button variant="gray" onClick={handleClose}>Cancelar</Button>

        </Dialog>
    )
}

export default RemoveItem