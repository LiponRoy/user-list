import React, { useEffect, useState } from 'react'
import Card from '../components/Card';


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

        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4">{user.users && user.users.map((value: any, index: number) => (

            <Card value={value} />

        ))}</div>

    )
}

export default UserList