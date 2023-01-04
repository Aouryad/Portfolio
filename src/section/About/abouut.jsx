import AboutImage from '../../assets/prtf3.jpg'
import CV from '../../assets/A.Riad.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
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
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Sérieux et motivé, je possède les qualités d'adaptation indispensables à la réussite d'une formation en
alternance. Afin de mener à bien mon projet professionnel, je souhaite désormais approfondir mes
connaissances dans ce domaine .
Durant ma formation à l’ETNA, j’ai pu acquérir les fondamentaux de la programmation. Grâce à cette
formation, je suis capable de m’adapter et de répondre aux problématiques techniques de votre
entreprise. La pédagogie par projet m’a permis de gagner en autonomie en me permettant d’apprendre à
me poser les bonnes questions pour grandir et avancer.
Étant disponible dès maintenant, je serais ravi de vous rencontrer lors d’un entretien ! .
                </p>
                <p>
                Consultez mon CV ci-dessous!!
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About