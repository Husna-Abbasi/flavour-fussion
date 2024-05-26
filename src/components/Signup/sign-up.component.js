'use client'
import React, { useState} from 'react';
import {useRouter} from "next/navigation";
import axios from "axios";

const SignUpComponent = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });


    const [passwordError, setPasswordError] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (passwordError) {
            setPasswordError(false);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                // mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password
                })
            });
            if (!response.ok) {
                throw new Error('Registration failed');
            }
            const responseData = await response.json();
            console.log('Registration successful:', responseData);
            router.push('/');
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <section className="bg-gray-50 h-auto w-full flex flex-start top-0 ">
            <div className="flex flex-col items-center justify-start px-6 mx-auto  lg:py-0 top-0">
                <div
                    className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                            <div className={'flex flex-row gap-2'}>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="px-2 block w-full outline-0 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="px-2 block w-full outline-0 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        aria-describedby="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-800 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 outline-blue"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="terms"
                                        className="font-light text-gray-500 dark:text-[#2B537D]">
                                        I accept the{' '}
                                        <a
                                            className="font-medium text-primary-600 hover:underline dark:text-[#2B537D]"
                                            href="#">
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                // onClick={handleSubmit}
                                className="flex w-full hover:bg-ffOrange justify-center rounded-md bg-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
                            >
                                Create Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpComponent;
