import React, { useEffect } from 'react';
import {useHistory} from "react-router-dom";

const Logout = ({setIsLoggedin}) => {
    const history = useHistory();

    useEffect(()=>{

        fetch("http://localhost:5000/logout",{
            method: "GET",
            headers:{
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            setIsLoggedin(false);
            history.push("/login");
            return res.json();
        }).catch(err => console.log(err));
    });


    return (
        <>
            
        </>
    )
}

export default Logout
