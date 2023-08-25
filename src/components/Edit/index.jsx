import { Button, Dialog } from "@mui/material";
import React from "react";
import AddItem from "../../pages/Add";
import { Close } from "@mui/icons-material";
import { EditStyles } from "./styles";


const EditItem = ({ open, handleClose, item }) => {

    return (
        <EditStyles>
            <Dialog open={open}
            >
                <Button style={{
                    position: 'absolute',
                    right: '1rem',

                }} className="closebutton" onClick={handleClose}><Close /></Button>

                <AddItem isEdit={true} itemEdit={item} handleClose={handleClose} />

            </Dialog>
        </EditStyles>


    )

}

export default EditItem