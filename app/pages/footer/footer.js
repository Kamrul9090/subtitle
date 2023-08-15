import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="absolute bottom-0 w-screen">
                <div className="bg-darkWhite flex flex-col lg:flex-row items-center lg:justify-around py-10 text-black">
                    <div>
                        <h1 className="text-3xl font-bold text-primary">Bangla Subtitle</h1>
                    </div>
                    <ul>
                        <Link href=""><li className="hover:text-primary hover:underline">About us</li></Link>
                        <Link href=""><li className="hover:text-primary hover:underline">Contact Us</li></Link>
                    </ul>
                    <ul>
                        <Link href=""><li className="hover:text-primary hover:underline">Term & Condition</li></Link>
                        <Link href=""><li className="hover:text-primary hover:underline">Privacy and Policy</li></Link>
                    </ul>
                </div>
                <p className="text-center bg-primary py-2 text-white">&copy; Copyright- Banglasubtitle</p>
            </footer>
        </>
    );
};

export default Footer;