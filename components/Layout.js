import Navbar from "./Navbar";
import ActiveResource from "./ActiveResouce";

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <ActiveResource />
            { children }
        </>
    )
}

export default Layout