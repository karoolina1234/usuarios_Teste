import React, { useEffect, useState } from "react"
import axios from "axios"
import { Box, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"

import * as S from './styles'
const Home = () => {
    const [listUsers, setListUsers] = useState([])
    var usersArray = localStorage.getItem("users");
    var users = JSON.parse(usersArray)

    useEffect(() => {
        async function getData() {
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

                if(users?.length>0){
                    setListUsers([...users, ...data])

                }else{
                   setListUsers(data)
                }
            } catch (error) {
                console.error(error)
            }
        }

        getData()
    }, [])


  


    return (
        <S.Item>
            <Typography className="titleItem" variant="body2">Lista de usuários</Typography>
            <List id="ListUser">
                {listUsers?.map((item) => {
                    return (
                        <ListItem
                            id="item"
                            secondaryAction={
                                <>
                                    <IconButton edge="end">
                                        <Edit />
                                    </IconButton>
                                    <IconButton edge="end">
                                        <Delete id="delete" />
                                    </IconButton></>

                            }>
                            <ListItemText>{item.name}</ListItemText>
                        </ListItem>
                    )

                })}
            </List>
        </S.Item>
    )
}

export default Home