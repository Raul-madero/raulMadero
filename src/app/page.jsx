import Hero from "./components/Hero"
import Resumen from "./components/Resumen"
import Tecnologias from "./components/Tecnologias"
import Proyectos from "./components/Proyectos"



const items = [
  {
      name: "rockband",
      image: "../img/proyectos/rockBand.webp",
      title: "Festival Musical",
      description: "Página elaborada como practica de mi curso de Frontend Developer en Platzi"
  },
  {
      name: "blogDeCafe",
      image: "../img/proyectos/blogDeCafe.webp",
      title: "Blog de Café",
      description: "Pagina elaborada como práctica en el curso de HTML y CSS en Platzi"
  },
  {
      name: "travel",
      image: "../img/proyectos/travel.webp",
      title: "Agencia de Viajes",
      description: "Página elaborada como práctica en el curso de Tailwind en Platzi"
  }
]

export default function Home() {
  return (
    <>
      <Hero/>
      <Resumen/>
      <Tecnologias/>
      <Proyectos proyectos={items}/>
    </>
  )
}
