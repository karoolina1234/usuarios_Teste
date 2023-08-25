import React, { useEffect, useState } from "react"
import axios from "axios"
import { Box, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"

import * as S from './styles'
import EditItem from "../../components/Edit"
const Home = () => {
    var usersArray = localStorage.getItem("users");
    var users = JSON.parse(localStorage.getItem("users") || "[]");

    const [isEdit, setIsEdit] = useState(false)
    const [itemEdit, setItemEdit] = useState([])

    useEffect(() => {
        async function getData() {
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
                if (users.length > 0) {
                    localStorage.setItem("users", JSON.stringify([...users]))

                }else{
                    localStorage.setItem("users", JSON.stringify(data))

                }

            } catch (error) {
                console.error(error)
            }
        }

        getData()
    }, [])


    const openEdit = (item) => {
        setIsEdit(true)
        setItemEdit(item)
    }
    return (
        <S.Item>
            {isEdit && <EditItem handleClose={() => setIsEdit(false)} open={isEdit} item={itemEdit} />}
            <Typography className="titleItem" variant="body2">Lista de usuários</Typography>
            <List id="ListUser">
                {users?.map((item) => {
                    return (
                        <ListItem
                            id="item"
                            secondaryAction={
                                <>
                                    <IconButton edge="end" onClick={() => openEdit(item)}>
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