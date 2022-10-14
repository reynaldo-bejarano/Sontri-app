import FixedNavbar from "./FixedNavbar"
import Header from "./Header"

const Layout = ({ children }) => {
    return (
        <div className="dark:bg-white font-sans leading-normal tracking-normal mt-12">
            <Header />
            <div className="flex flex-col md:flex-row ">
                <FixedNavbar />
                {/* Content children */}
                {children}
            </div>
        </div>
    )
}

export default Layout