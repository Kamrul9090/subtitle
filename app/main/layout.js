import Footer from "../pages/footer/footer";
import Navbar from "../pages/navbar/navbar";

const Layout = ({ children }) => {
    return (
        <>
            <div className="max-w-screen-lg mx-auto relative">
                <div>
                    <Navbar></Navbar>
                </div>
                <div>
                    {children}
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Layout;