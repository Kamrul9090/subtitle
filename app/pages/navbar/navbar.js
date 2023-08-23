"use client"
import Image from "next/image";
import profile from '../../../public/profile/user.png';
import logo from '../../../public/logo/subtitles.png';
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const router = useRouter();
    console.log(user);
    const handleLogout = () => {
        logOut()
            .then(() => {
                router.push('/login')
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            {/* top navbar */}
            <div className="flex items-center justify-between bg-darkWhite p-2 text-xs lg:text-lg">
                <div className="flex items-center space-x-1">
                    {
                        user?.photoURL ? <Image width={30} height={10} src={profile} alt="Picture of the author" /> : <Image width={30} height={10} src={profile} alt="Picture of the author" />
                    }
                    {
                        user?.uid ? <p className="hover:text-secondary">{user?.displayName}</p> : ""
                    }
                </div>
                <div>
                    <ul className="flex space-x-2 lg:space-x-4">
                        {
                            user?.uid ?

                                <>
                                    < Link href=""><button onClick={handleLogout} className="hover:text-secondary">Logout</button></Link>
                                    <span>|</span>
                                </>
                                :
                                <>
                                    <Link href="/login"><li className="hover:text-secondary">Login</li></Link>
                                    <span>|</span>
                                </>
                        }



                        <button type="button" className="hover:text-secondary">Dark Theme</button>
                    </ul>
                </div>
            </div>
            {/* search section */}
            <section>
                <div className="flex flex-col lg:flex-row items-center py-4">
                    <div className="w-full lg:w-1/5 flex justify-center">
                        <Image src={logo} width={90} height={50}></Image>
                    </div>
                    <form className="w-full lg:w-3/5 p-1 flex justify-around lg:justify-between">
                        <input type="search" placeholder="search..." className="p-1 h-10 w-3/5 lg:w-9/12 outline-none border-2 rounded-lg" />
                        <button type="search" className="text-white bg-primary hover:bg-secondary py-1 px-2 lg:px-3 text-xs lg:text-sm rounded-lg">Subtitle Search</button>
                    </form>
                    <div className="w-full lg:w-1/5 text-center">
                        <Link href="/main/upload"><u className="text-secondary hover:text-primary text-xs lg:text-lg" title="upload your subtitle">Upload Subtitle</u></Link>
                    </div>
                </div>
            </section>
            <hr />
        </div >
    );
};

export default Navbar;