import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { AddData } from "./styles";



const AddItem = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [userName, setUserName] = useState('')
    const [webSite, setWebSite] = useState('')

    const [isValid, setIsValid] = useState(true);



    const sendData = async () => {
        const userData = ({
            id: Math.random(),
            name: name,
            email: email,
            phone: phone,
            userName: userName,
            webSite: webSite
        })
        try {
            if (userData) {
                const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
                if (response.status === 201) {
                    var users = JSON.parse(localStorage.getItem("users") || "[]");
                    users.push(userData)
                    localStorage.setItem("users", JSON.stringify(users))
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
            <Typography id="text">Adicionar novo usuário</Typography>
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
                    <TextField label="Username" variant="outlined" value={userName} onChange={(e) => setUserName(e.target.value)} />

                </div>
                <div className="itemForm">
                    <TextField label="Website" variant="outlined" value={webSite} onChange={(e) => setWebSite(e.target.value)} />

                </div>

            </Box>

            <Button id="btnADD" variant="contained"
                disabled={!name || !email || !phone}
                onClick={() => sendData()}>Adicionar</Button>
        </AddData>
    )
}

export default AddItem