'use client'
import { AuthContext } from "@/context/AuthProvider";
import Link from "next/link";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
const SignUp = () => {
    const { createUser, userProfile, emailVerification } = useContext(AuthContext);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const [customError, setCustomError] = useState({
        loginError: ""
    })

    const onSubmit = data => {
        console.log(data);
        const profile = {
            displayName: data.name,
        }
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                if (user) {
                    setCustomError({ ...customError, loginError: "" });
                    userProfile(profile)
                    emailVerification()
                        .then(() => {

                        })
                    reset();
                }
            })
            .catch((error) => {
                console.log(error);
                if (error) {
                    setCustomError({ ...customError, loginError: "email already exist" })
                }
            })

    }

    return (
        <div className="w-full lg:w-1/4 mx-auto">
            <div className="my-20 mx-auto py-10 bg-darkWhite rounded-md">
                <h1 className="text-center text-xl lg:text-3xl font-semibold text-primary">Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="pt-10 mx-2">
                    <div className="w-full flex flex-col mb-4">
                        <label className="text-xs lg:text-sm" htmlFor="name">Name</label>
                        <input
                            {...register("name", { required: "name is required" })}
                            type="name" name="name" placeholder="name" className="max-w-full p-2 outline-none hover:shadow-md rounded-md" />
                        {errors?.name && <small role="alert" className="text-warning">{errors.name?.message}</small>}
                    </div>
                    <div className="w-full flex flex-col mb-4">
                        <label className="text-xs lg:text-sm" htmlFor="email">Email</label>
                        <input {...register("email", { required: "email is required" })} type="email" name="email" placeholder="email" className="max-w-full p-2 outline-none hover:shadow-md rounded-md" />
                        {errors?.email && <small role="alert" className="text-warning">{errors?.email.message}</small>}
                    </div>
                    <div className="w-full flex flex-col mb-4">
                        <label className="text-xs lg:text-sm" htmlFor="password">Password</label>
                        <input
                            {...register("password", {
                                required: "password is required", minLength: {
                                    value: 8,
                                    message: "your password must be 8 characters"
                                }
                            })} type="password" name="password" placeholder="password" className="max-w-full p-2 outline-none hover:shadow-md rounded-md" />
                        {errors?.password && <small role="alert" className="text-warning">{errors?.password.message}</small>}
                    </div>
                    <div className="w-full flex flex-col mb-4">
                        <label className="text-xs lg:text-sm" htmlFor="confirm">Confirm Password</label>
                        <input
                            {...register("confirm", {
                                required: "confirm your password",
                                validate: (value) => {
                                    if (watch('password') != value) {
                                        return "your password do not match."
                                    }
                                }
                            })}
                            type="password" name="confirm" placeholder="Confirm password" className="max-w-full p-2 outline-none hover:shadow-md rounded-md" />
                        {errors?.confirm && <small role="alert" className="text-warning">{errors?.confirm.message}</small>}
                    </div>
                    <div className="w-full my-2">
                        <button type="submit" className="text-white bg-primary hover:bg-secondary p-2 w-full text-xs lg:text-sm rounded-md">Sign Up</button>
                        {customError?.loginError !== "" && <small role="alert" className="text-warning">{customError.loginError}</small>}
                    </div>
                </form>
                <div className="mx-2">
                    <div className="space-x-2 text-center mt-5">
                        <span>I have a account.</span><Link href="/login"><span className="text-primary hover:text-secondary"><u>Login</u></span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;