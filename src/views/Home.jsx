import Banner from "../components/Banner.jsx"
import Galeria from "../components/Galeria.jsx"



const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <h2 classname="tituloGaleria">ULTIMAS PUBLICACIONES</h2>
        <Galeria></Galeria>
    </div>
  )
}

export default Home