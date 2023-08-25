import { Button, Dialog, DialogTitle } from "@mui/material";
import React from "react";
import { setupAPICliente } from "../../request/api";

const RemoveItem = ({ open, handleClose, item }) => {


    const deleteUserApi = async (userId) => {
        try {
            const apiClient = setupAPICliente();
            const response = await apiClient.delete(`/users/remove?id=${userId}`)
            if (response.status === 200) {
                handleClose()
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Dialog open={open}>
            <DialogTitle>
                Remover usuário {item.name}
            </DialogTitle>

            <Button variant="gray" onClick={() => deleteUserApi(item.id)}>OK</Button>
            <Button variant="gray" onClick={handleClose}>Cancelar</Button>

        </Dialog>
    )
}

export default RemoveItem