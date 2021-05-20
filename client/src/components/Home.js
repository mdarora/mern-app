import React, {useEffect, useState} from 'react';

const Home = () => {
    const [welcomeMessage, setWelcomeMessage] = useState("We are the MERN developer");

    const getData = async () =>{
        try {
            const response = await fetch("http://localhost:5000/getdata",{
                method : "GET",
                headers: {
                    // Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials: 'include',
            });

            const result = await response.json();

            if (result.user){
                const {name} = result.user;
                setWelcomeMessage(name);
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        getData();
    },[]);
    return (
    <>
    <section className="home">
        <div className="home-text">
            <p>Welcome</p>
            <h2>{welcomeMessage}</h2>
        </div>
    </section>
    </>
    )
}

export default Home
