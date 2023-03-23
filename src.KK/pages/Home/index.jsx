import Section from "../../components/Section"
import Header from "../../components/Header"
import Annonces from "../../components/Annonces"
import "../../utils/style/main.css"
import "../../utils/style/accueil.css"
import Footer from "../../components/Footer/index.jsx"

function Home() {
    return (
        <div className="leaf">
            <Header></Header>
            <Section></Section>
            <Annonces></Annonces>
            <Footer></Footer>
        </div>
    )
}
export default Home
