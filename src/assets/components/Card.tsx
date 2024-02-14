import React from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: "male" | "female" | "other";
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string; // Consider using Date type if possible
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  domain: string;
  ip: string;
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    department: string;
    name: string;
    title: string;
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
}

const Card = ({ value }: { value: User }) => {
  const navigate = useNavigate();
  const { id, image, lastName, firstName, email, address, company } = value;
  return (
    <div
      onClick={() => navigate(`/${id}`)}
      className=" border-2 border-orange-400 rounded-md py-2 px-2 m-2 gap-y-4 hover:shadow-xl"
    >
      <div className=" flex flex-col justify-center items-start cursor-pointer  ">
        <img
          className=" w-20 h-20 rounded-full"
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
  );
};

export default Card;
