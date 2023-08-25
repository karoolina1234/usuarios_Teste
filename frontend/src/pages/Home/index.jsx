import React, { useEffect, useState } from "react"
import axios from "axios"
import { Box, IconButton, InputAdornment, List, ListItem, ListItemText, TextField, Typography } from "@mui/material"
import { Delete, Edit, Search } from "@mui/icons-material"

import * as S from './styles'
import EditItem from "../../components/Edit"
import RemoveItem from "../../components/Delete"
import Details from "../../components/DetailsUser"
import { setupAPICliente } from "../../request/api"
const Home = () => {


    const [isEdit, setIsEdit] = useState(false)
    const [itemEdit, setItemEdit] = useState([])

    const [isDelete, setIsDelete] = useState(false)
    const [openItem, setOpenItem] = useState(false)

    const [userList, setUserList] = useState([])

    const [search, setSearch] = useState("")

    useEffect(() => {
        async function getData() {
            try {
                const apiClient = setupAPICliente(); 
                const {data} = await apiClient.get('/users/list')
                setUserList(data)

            } catch (error) {
                console.error(error)
            }
        }

        getData()
    }, [])


    const openEdit = (item) => {
        setIsEdit(true)
        setItemEdit(item)
        setOpenItem(false)

    }

    const deleteItem = (item) => {
        setIsDelete(true)
        setOpenItem(false)
        setItemEdit(item)
    }

    const openUser = (item) => {
        if (!isEdit || !isDelete) {
            setOpenItem(true)
            setItemEdit(item)
        }

    }
    return (
        <S.Item>
            {isDelete && <RemoveItem handleClose={() => setIsDelete(false)} open={isDelete} item={itemEdit} />}
            {isEdit && <EditItem handleClose={() => setIsEdit(false)} open={isEdit} item={itemEdit} />}
            {openItem && <Details handleClose={() => setOpenItem(false)} item={itemEdit} open={openEdit} />}
            <Typography className="titleItem" variant="body2">Lista de usuários</Typography>
            <TextField value={search} onChange={(e) => setSearch(e.target.value)} size="small"
            style={{
                marginTop:'1rem',
                marginBottom:'2rem'
            }}
            placeholder="Busque por um usuário"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Search />
                        </InputAdornment>
                    )
                }} />
            <List id="ListUser">
                {userList?.filter((val) => {
                    if (search == '') {
                        return val
                    } else if (val.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                        return val
                    }
                }).map((item) => {
                    return (
                        <ListItem

                            id="item"
                            secondaryAction={
                                <>
                                    <IconButton edge="end" onClick={() => openEdit(item)}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton edge="end" onClick={() => deleteItem(item)}>
                                        <Delete id="delete" />
                                    </IconButton></>

                            }>
                            <ListItemText onClick={() => openUser(item)}>{item.name}</ListItemText>
                        </ListItem>
                    )

                })}
            </List>
        </S.Item>
    )
}

export default Home