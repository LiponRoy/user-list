import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { useGetUsersQuery } from '../../redux/feature/userApi';


const UserList = () => {

    const { data, isFetching, isLoading, isSuccess } = useGetUsersQuery();

    return (

        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 m-6">
            {
                isLoading ? <div className='p-4 text-4xl'>Loading....</div> : data?.users?.map((value: any, index: number) => (

                    <Card value={value} />

                ))
            }

        </div>

    )
}

export default UserList