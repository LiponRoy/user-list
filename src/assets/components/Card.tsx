import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({ value }: any) => {
    const navigate = useNavigate();
    const { id, image, lastName, firstName, email, address, company } = value;
    return (

        <div onClick={() => navigate(`/singleUser/${id}`)} className=" border-2 border-orange-400 rounded-md py-2 px-2 m-2 gap-y-4 hover:shadow-xl">
            <div className=' flex flex-col justify-center items-start cursor-pointer  '>
                <img
                    className=' w-20 h-20 rounded-full'
                    src={image}
                    alt="Description of the Image"
                />
                <span>Fristname: {firstName}</span>
                <span>Lastname : {lastName}</span>
                <span>Email : {email}</span>
                <span>Address :</span>
                <span>{address.address}</span>
                <span>City : {address.city}</span>
                <span>Company name : {company.name}</span>
            </div>
        </div>
    )
}

export default Card