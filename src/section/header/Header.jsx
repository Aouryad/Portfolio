import HeaderImage from '../../assets/h8.jpg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3>AOURTILANE Riad</h3>
        <p>
        Je suis passionné par tout ce qui touche à l'informatique .
            </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Contactez moi</a>
          
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header