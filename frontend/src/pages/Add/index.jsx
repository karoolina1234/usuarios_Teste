import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { AddData } from "./styles";
import { setupAPICliente } from "../../request/api";



const AddItem = ({ isEdit, itemEdit, handleClose }) => {
    const [name, setName] = useState(itemEdit ? itemEdit.name : '')
    const [email, setEmail] = useState(itemEdit ? itemEdit.email : '')
    const [phone, setPhone] = useState(itemEdit ? itemEdit.phone : '')
    const [description, setDescription] = useState(itemEdit? itemEdit.description:'')
    const [isValid, setIsValid] = useState(true);


   

    const sendData = async (item) => {
        const userData = ({
            name: name,
            email: email,
            phone: phone,
            description: description
        })

        try {
            if (itemEdit) {
              
                const apiClient = setupAPICliente(); 
                const response = await apiClient.put(`/users/edit?id=${itemEdit.id}`, userData)

                if (response.status === 200) {
                    clearData()
                    window.location.reload()
                    handleClose()
                }
                } else {
                    const apiClient = setupAPICliente(); 
                    const response = await apiClient.post('/users', userData)
                    console.log(response)
                    if (response.status === 200) {
                        clearData()
                    }
                }

            


        } catch (error) {
            console.error(error)
        }
    }

    const clearData = () => {
        setName('');
        setEmail('');
        setPhone('');
        setDescription('')
    }

    function formatPhoneNumber(phoneNumber) {
        const cleanedNumber = phoneNumber.replace(/\D/g, '');
        if (cleanedNumber.length < 10) {
            return cleanedNumber;
        }

        const formattedNumber = `(${cleanedNumber.substring(0, 2)}) ${cleanedNumber.substring(2, 6)}-${cleanedNumber.substring(6)}`;

        return formattedNumber;
    }

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValid(isValidEmail(newEmail));
    };



    return (
        <AddData isEdit={isEdit}>
            {!isEdit ?
                (
                    <Typography id="text">Adicionar novo usuário</Typography>
                ) :
                (
                    <Typography id="editText">Editar usuário</Typography>
                )}
            <Box>
                <div className="itemForm">
                    <TextField label="Nome" required variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />

                </div>
                <div className="itemForm">
                    <TextField
                        label="Email"
                        required
                        variant="outlined"
                        placeholder="teste@teste.com"
                        value={email}
                        onChange={handleEmailChange}
                        error={!isValid}
                        helperText={!isValid ? "Digite um email válido" : ""}
                    />
                </div>
                <div className="itemForm">
                    <TextField label="Phone" required variant="outlined"
                        value={formatPhoneNumber(phone)} onChange={(e) => setPhone(e.target.value)}
                        inputProps={
                            {
                                maxLength: 15
                            }}
                    />

                </div>

                <div className="itemForm">
                    <TextField multiline rows={3} label="Description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} />

                </div>

            </Box>
            {!isEdit ? (
                <Button id="btnADD" variant="contained"
                    disabled={!name || !email || !phone}
                    onClick={() => sendData()}>Adicionar</Button>
            ) :
                (<Button id="btnADD" variant="contained" style={{
                    marginBottom: "1rem"
                }}
                    onClick={() => sendData(itemEdit.id)}>Editar</Button>)
            }

        </AddData>
    )
}

export default AddItem