import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";


const Details = ({ open, item, handleClose }) => {
    return (
        <Dialog open={open}>
            <DialogContent>
                <DialogTitle>Detalhes do usuario {item.name}</DialogTitle>
                <DialogContentText textAlign={'center'}>E-mail: {item.email}</DialogContentText>
                <DialogContentText textAlign={'center'}>Celular: {item.phone}</DialogContentText>
                <DialogContentText textAlign={'center'}>descrição: {item.description}</DialogContentText>
                <DialogContentText textAlign={'center'}><Button onClick={handleClose}>Ok</Button></DialogContentText>


            </DialogContent>

        </Dialog>
    )
}

export default Details;