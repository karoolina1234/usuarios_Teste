import React, { useEffect, useState } from "react"
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
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
                const { data } = await apiClient.get('/users/list')
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

            <Box id="ListUser">
                <Typography className="titleItem" variant="body2">Lista de usuários</Typography>
               
               <div  className="inputSearch">
                <Search/>
               <input
                    value={search} onChange={(e) => setSearch(e.target.value)} size="small"
                    placeholder="Busque por um usuário"
                />
               </div>
               {userList.length > 0 ? (
                    <TableContainer id="tabela" style={{
                        maxHeight:"20rem"
                    }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="titleTableItem">Usuário</TableCell>
                                    <TableCell className="titleTableItem" id="action">Ações</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {userList?.filter((val) => {
                                    if (search === '') {
                                        return val
                                    } else if (val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                                        return val
                                    }
                                }).map((item) => {
                                    return (
                                        <TableRow className="rowItem">
                                            <TableCell className="titleBodyItem" onClick={() => openUser(item)}>{item.name}</TableCell>
                                            <TableCell id='action'>
                                                <button  id="btnOPT" onClick={() => openEdit(item)}>
                                                    <Edit />
                                                </button>
                                                <button  id="btnOPT" onClick={() => deleteItem(item)}>
                                                    <Delete id="delete" />
                                                </button></TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
    
                    </TableContainer>
               ) : (
                <div>
                    <p style={{color:"#5932EA"}}>Nenhum usuario adicionado</p>
                </div>
               )}
            

            </Box>
        </S.Item>
    )
}

export default Home