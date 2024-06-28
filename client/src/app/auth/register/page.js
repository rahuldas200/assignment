"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Register() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const router = useRouter();

    const onSubmit = async (data) => {

        if (data.password !== data.confirmPassword) {
            toast.error("password and confirm password are not matched")
        }
        try {
            const res = await axios.post('https://scalenow-client.vercel.app/api/v1/auth/registration', data);

            if (res.data.success === true) {
                toast.success(res.data.message);
                router.push('/auth/login')
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
            <form onSubmit={handleSubmit(onSubmit)} className="min-w-[350px] p-5 bg-slate-100 text-base shadow-lg text-black">
                <h2 className="text-2xl font-bold text-center mb-4">Sign up</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        placeholder='Enter your name'
                        {...register('name', { required: 'Full Name is required' })}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder='Enter your Email'
                        {...register('email', { required: 'Email is required' })}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div className="mb-4 relative">
                    <label className="block text-gray-700 mb-1">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder='Enter your Password'
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters long'
                            },
                        })}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    <div className='absolute right-3 bottom-3 text-xl cursor-pointer'>
                        {
                            showPassword ? <FaEye onClick={() => setShowPassword(!showPassword)} /> : <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                        }
                    </div>
                </div>
                {errors.password && <p className="text-red-500 mb-3">{errors.password.message}</p>}
                <div className="mb-4 relative">
                    <label className="block text-gray-700 mb-1">Confirm Password</label>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder='Enter your confirm Password'
                        {...register('confirmPassword', {
                            required: 'Confirm Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters long'
                            },
                        })}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    <div className='absolute right-3 bottom-3 text-xl cursor-pointer'>
                        {
                            showConfirmPassword ? <FaEye onClick={() => setShowConfirmPassword(!showConfirmPassword)} /> : <FaEyeSlash onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                        }
                    </div>


                </div>
                {errors.confirmPassword && <p className="text-red-500 mb-3">{errors.confirmPassword.message}</p>}
                <button type="submit" className="px-3  w-full py-2 bg-blue-500 text-white rounded">Sign up</button>

                <div className='flex justify-end'>
                    <Link href='/auth/login' className='mt-5  text-sm'>
                        Already have an account? <span className='text-blue-500 '>Sign in</span>
                    </Link>
                </div>
            </form>
        </div>
    );
}
