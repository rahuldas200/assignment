'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Profile() {

    const [userData, setUserData] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            console.log(token)
            if (!token) {
                toast.error('No token found, please login');
                router.push('/auth/login');
                return;
            }

            try {
                const res = await axios.get('http://localhost:4000/api/v1/auth/user-details', {
                    headers: {
                        'Authorization': token,
                    },
                });
                console.log(res)
                if (res.data.success) {
                    setUserData(res.data.data);
                } else {
                    toast.error('Failed to fetch user data');
                }
            } catch (err) {
                toast.error('An error occurred while fetching user data');
                console.error(err);
            }
        };

        fetchUserData();
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='w-full h-screen flex justify-center items-center text-2xl'>
            <div>
                <h1 className='text-black'>Welcome, {userData.name}</h1>
                <p className='text-black'>Email: {userData.email}</p>
            </div>
        </div>
    );
}

