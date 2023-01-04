import Navbar from "./section/navbar/Navbar";
import Header from "./section/header/Header";
import About from "./section/About/abouut";
import Portfolio from "./section/portfolio/Portfolio";
import Contact from "./section/contact/Contacts";
import Footer from "./section/footer/Footer";
import FloatingNav from "./section/floating-nav/FloatingNav";


const  App= () => {
    return (
    <main>
        <Navbar/>
        <Header/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        <FloatingNav/> 
    </main>
    )
}

export default App