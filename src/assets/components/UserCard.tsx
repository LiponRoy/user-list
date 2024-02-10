import React from 'react'

const UserCard = ({ value }: any) => {
    const { firstName } = value;
    return (
        <div>
            <span>{firstName}</span>
        </div>
    )
}

export default UserCard