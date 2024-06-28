"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import axios from 'axios';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Login() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();


    const onSubmit = async (data) => {
        console.log(data)
        try {
            const res = await axios.post('https://scalenow-client.vercel.app/api/v1/auth/login', data);
            console.log(res.data)
            if (res.data.success === true) {
                localStorage.setItem('token', res.data.token);
                toast.success(res.data.message);
                router.push(`profile?id=${res.data.userId}`)

            }
        } catch (err) {
            if (err.response) {
                // Server responded with a status other than 200 range
                if (err.response.status === 400) {
                    toast.error(err.response.data.message);
                } else {
                    toast.error("An error occurred. Please try again.");
                }
            }

            reset();
        }
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="min-w-[350px] p-5 rounded-md bg-slate-200 shadow-lg text-black">
                <h2 className="text-2xl font-bold text-center mb-4">Sign in</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        {...register('email', { required: 'Email is required' })}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div className="mb-4 relative">
                    <label className="block text-gray-700 mb-1">Password</label>
                    <div className='absolute right-3 bottom-3 text-xl cursor-pointer'>
                        {
                            showPassword ? <FaEye onClick={() => setShowPassword(!showPassword)} /> : <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                        }
                    </div>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder='password'
                        {...register('password', { required: 'password is required' })}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />

                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Sign in</button>

                <div className='flex justify-end'>
                    <Link href='/auth/register' className='mt-5  text-sm'>
                        Don't have an account? <span className='text-blue-500 '>Sign up</span>
                    </Link>
                </div>
            </form>
        </div>
    );
}

