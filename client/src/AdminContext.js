import React, {useState} from 'react'

export const AdminContext = React.createContext();

export const AdminProvider = (props) => {

    const [adminCart, setadminCart]= useState([]);
    return(
        <AdminContext.Provider value={[adminCart, setadminCart]}>
            {props.children}
        </AdminContext.Provider>
    )
}
