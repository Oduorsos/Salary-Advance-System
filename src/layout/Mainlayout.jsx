import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function MainLayout({ children }) {
    return (
        <>
        <Navbar />
        <main className="pt-20">
            {children}
        </main>
        <Footer />
        </>
    );
    }
