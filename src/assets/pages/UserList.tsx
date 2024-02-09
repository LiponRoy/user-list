import React, { useEffect, useState } from 'react'

const UserList = () => {

    const [user, setUser] = useState([]);

    const fetchData = async () => {
        return await fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }

    useEffect(() => {
        fetchData();

    }, [])

    return (
        <div>{user.users && user.users.map((value, index) => (
            <div key={index} className=" flex flex-col justify-center items-center">
                <span>{value.firstName}</span>
            </div>
        ))}</div>
    )
}

export default UserList