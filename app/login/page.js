"use client"
import { AuthContext } from "@/context/AuthProvider";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { SignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const onSubmit = data => {
        console.log(data);
        reset();
    }

    const handleGoogleSignIn = () => {
        SignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="w-full lg:w-1/4 mx-auto">
            <div className="my-20 mx-auto py-10 bg-darkWhite rounded-md">
                <h1 className="text-center text-xl lg:text-3xl font-semibold text-primary">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="pt-10 mx-2">
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
                        <a className="text-primary hover:text-secondary" href="http://" target="_blank"><u><small>Forgot Password</small></u></a>
                    </div>
                    <div className="w-full my-2">
                        <button type="submit" className="text-white bg-primary hover:bg-secondary p-2 w-full text-xs lg:text-sm rounded-md">Login</button>
                    </div>
                </form>
                <div className="mx-2">
                    <div className="my-4">
                        <button onClick={handleGoogleSignIn} type="button" className="text-white bg-primary hover:bg-secondary p-2 w-full text-xs lg:text-sm rounded-md">Login with google</button>
                    </div>
                    <div>
                        <button type="button" className="text-white bg-primary hover:bg-secondary p-2 w-full text-xs lg:text-sm rounded-md">Login with Facebook</button>
                    </div>
                    <div className="space-x-2 text-center mt-5">
                        <span>I have no account yet.</span><Link href="/signup"><span className="text-primary hover:text-secondary"><u>Sign Up</u></span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;