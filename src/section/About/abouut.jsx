import AboutImage from '../../assets/prtf3.jpg'
import CV from '../../assets/CV_Riad_Aourtilane.pdf'
import {HiDownload} from 'react-icons/hi'
import './abouut.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="" />
                </div>
            </div>
            <div className="about__right">
                <h2>À propos de moi</h2>
                <div className="about__cards">
                   
                </div>
                <p>
                Afin de mener à bien mon projet professionnel, je souhaite désormais approfondir mes connaissances dans ce domaine.
Durant ma formation à Gefi, j’ai pu acquérir les fondamentaux des Systemes et Réseaux. Je suis capable de m’adapter et de répondre aux problématiques techniques de votre
entreprise. La pédagogie par projet m’a permis de gagner en autonomie en me permettant d’apprendre à me poser les bonnes questions pour grandir et avancer.
Étant disponible dès maintenant, je serais ravi de vous rencontrer lors d’un entretien !
                </p>
                <p>
                Consultez mon CV ci-dessous !!
                </p>
                <a href={CV} download className='btn primary'>Telecharger CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About
