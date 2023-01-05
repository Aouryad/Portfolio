import Navbar from "./section/navbar/Navbar";
import Header from "./section/header/Header";
import About from "./section/About/abouut";
import Portfolio from "./section/portfolio/Portfolio";
import Contact from "./section/contact/Contacts";
import Footer from "./section/footer/Footer";



const  App= () => {
    return (
    <main>
        <Navbar/>
        <Header/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        
    </main>
    )
}

export default App