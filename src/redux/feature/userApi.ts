import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName?: string;
    age: number;
    gender: 'male' | 'female' | 'other';
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

interface UsersResponse {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://dummyjson.com',
	}),
	tagTypes: ['user_tag'],

	endpoints: (builder) => ({
		getUsers: builder?.query<UsersResponse, void>({
			query: () => '/users',
			providesTags: ['user_tag'],
		}),
		userDetail: builder.query<User,string>({
			query: (id) => `/users/${id}`,
			providesTags: ['user_tag'],
		}),
	}),
});

// Export hooks for usage in components
export const { useGetUsersQuery, useUserDetailQuery } = userApi;
