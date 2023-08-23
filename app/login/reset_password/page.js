"use client"
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
    const { resetPassword } = useContext(AuthContext)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        resetPassword(data.email)
            .then(() => { })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className="w-full lg:w-1/4 mx-auto">
            <div className="my-20 mx-auto py-10 bg-darkWhite rounded-md">
                <h1 className="text-center text-xl lg:text-3xl font-semibold text-primary">Give your email</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="pt-10 mx-2">
                    <div className="w-full flex flex-col mb-4">
                        <label className="text-xs lg:text-sm" htmlFor="email">Email</label>
                        <input {...register("email", { required: "email is required" })} type="email" name="email" placeholder="email" className="max-w-full p-2 outline-none hover:shadow-md rounded-md" />
                        {errors?.email && <small role="alert" className="text-warning">{errors?.email.message}</small>}
                    </div>

                    <div className="w-full my-2">
                        <button type="submit" className="text-white bg-primary hover:bg-secondary p-2 w-full text-xs lg:text-sm rounded-md">Reset password</button>
                    </div>
                </form>

            </div >
        </div >
    );
};

export default ResetPassword;