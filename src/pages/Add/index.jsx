import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { AddData } from "./styles";



const AddItem = ({ isEdit, itemEdit, handleClose }) => {
    const [name, setName] = useState(itemEdit ? itemEdit.name : '')
    const [email, setEmail] = useState(itemEdit ? itemEdit.email : '')
    const [phone, setPhone] = useState(itemEdit ? itemEdit.phone : '')
    const [username, setUserName] = useState(itemEdit ? itemEdit.username : '')
    const [website, setWebSite] = useState(itemEdit ? itemEdit.website : '')

    const [isValid, setIsValid] = useState(true);


    function generateRandomId(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    const sendData = async (item) => {
        const userData = ({
            id: generateRandomId(500),
            name: name,
            email: email,
            phone: phone,
            username: username,
            website: website
        })
        try {
            if (userData) {
                if (item) {
                    var users = JSON.parse(localStorage.getItem("users"));

                    users.forEach(val => {
                        if (val.id == itemEdit.id) {
                            val.name = name
                            val.email = email
                            val.phone = phone
                            val.username = username
                            val.website = website
                        }
                    })

                    localStorage.setItem("users", JSON.stringify(users))
                    clearData()
                    handleClose()

                } else {
                    const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
                    if (response.status === 201) {
                        var users = JSON.parse(localStorage.getItem("users") || "[]");
                        users.push(userData)
                        localStorage.setItem("users", JSON.stringify(users))
                        clearData()
                    }
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
        setUserName('');
        setWebSite('');
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
        <AddData>
            {!isEdit ? 
            (
                <Typography id="text">Adicionar novo usuário</Typography>
            ):
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
                    <TextField label="Phone" required variant="outlined" value={formatPhoneNumber(phone)} onChange={(e) => setPhone(e.target.value)} />

                </div>

                <div className="itemForm">
                    <TextField label="Username" variant="outlined" value={username} onChange={(e) => setUserName(e.target.value)} />

                </div>
                <div className="itemForm">
                    <TextField label="Website" variant="outlined" value={website} onChange={(e) => setWebSite(e.target.value)} />

                </div>

            </Box>
            {!isEdit ? (
                <Button id="btnADD" variant="contained"
                    disabled={!name || !email || !phone}
                    onClick={() => sendData()}>Adicionar</Button>
            ) :
                (<Button id="btnADD" variant="contained" style={{
                    marginBottom:"1rem"
                }}
                    onClick={() => sendData(itemEdit.id)}>Editar</Button>)
            }

        </AddData>
    )
}

export default AddItem