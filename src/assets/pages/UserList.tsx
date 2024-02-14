import Card from '../components/Card';
import { useGetUsersQuery } from '../../redux/feature/userApi';

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

// interface UsersResponse {
//     users: User[];
//     total: number;
//     skip: number;
//     limit: number;
// }


const UserList = () => {
    const { data, isLoading} = useGetUsersQuery();

    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 m-6">
            {isLoading ? (
                <div className='p-4 text-4xl'>Loading....</div>
            ) : (
                data?.users?.map((user: User, index) => (
                    <Card key={index} value={user} />
                ))
            )}
        </div>
    );
};

export default UserList;