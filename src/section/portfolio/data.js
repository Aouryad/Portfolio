import Image1 from '../../assets/irc.jpg'
import Image2 from '../../assets/bubletea.jpg'
import Image3 from '../../assets/API.jpg'
import Image4 from '../../assets/cal(7).jpg'
import Image5 from '../../assets/mario2.jpg'
import Image6 from '../../assets/film.jpg'


const data = [
    {
        id: 1,
        category: 'uiux',
        image: Image1,
        title: "Site de messagerie(IRC)",
        desc: "Création d'un client en NodeJS(typeScript) et une base de donnée en MongoDB. Utilisation de soket.io pour la  communication.",
       github: 'https://github.com/Aouryad/irc'
    },
    {
        id: 2,
        category: 'frontend',
        image: Image2,
        title: " Bubble tea",
        desc: "Un site E-commerce realisé avec LARAVEL (MVC).",
        github: 'https://github.com/Aouryad/Bubbletea'
    },
    {
        id: 3,
        category: 'frontend',
        image: Image4,
        title: "Calculatrice",
        desc: "Calculatrice realisé avec Java. ",
        github: 'https://github.com/Aouryad/Calculatrice'
 
    },
    {
        id:4,
        category: 'frontend',
        image: Image3,
        title: "API resTful",
        desc: "Une application realisée avec node.js et mongodb en back,le Front avec Angular et flutter. ",
        github: 'https://github.com/Aouryad/api'
 
    },
   
    {
        id: 5,
        category: 'frontend',
        image: Image5,
        title: "Mini Mario",
        desc: "Realisation d'un mini SuperMario avec Java. ",
        github: 'https://github.com/Aouryad/miniMario'
 
    },
    {
        id: 6,
        category: 'fullstack',
        image: Image6,
        title: "MyFilms",
        desc: "Une application realisé avec Java Spring Boot, React, et MongoDB. ",
        github: 'https://github.com/Aouryad/Myfilm'
 
    }
]


export default data