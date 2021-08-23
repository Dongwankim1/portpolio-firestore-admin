import React, { useEffect } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { Grid ,Paper} from '@material-ui/core'
import './AdminCardItem.css';

const AdminCardItem = function({title}){

    useEffect(()=>{

    },[])

    return  (<Paper className="AdminCardItem" >
    <span className="content">{title}</span>
        <div className="btnDiv"><CancelIcon className="AdminCardItem__Cancle" fontSize="small"/></div>
        </Paper>)

}

export default AdminCardItem;