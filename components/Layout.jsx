import Footer from "./Footer";
import NavBar from "./NavBar";
import styles from "@/styles/Home.module.css";

const Layout = ({ children, isHomePage }) => {
    return (
        <>
            <NavBar />
            {isHomePage && (
                <div className={styles.container}>
                    <h2>Welcome to Pizza Parlor!</h2>
                </div>
            )}
            {children}
            <Footer />
        </>
    );
};

export default Layout;
