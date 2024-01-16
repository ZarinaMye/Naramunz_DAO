import './Footer.css'
import discord from '../../img/imgFooter/discord.png'
import instagram from '../../img/imgFooter/instagram.png'
import twitter from '../../img/imgFooter/twitter.png'
import home from '../../img/imgFooter/home.png'

export function Footer() {

    return(
        <div className='footerWrapper'>
            <a href="https://discord.com/invite/ntPmauYuKV" target="_blank" rel="noopener noreferrer">
                <img src={discord} alt="Discord icon" className='icon'/>
            </a>
            <a href="https://www.instagram.com/naramunz/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram icon" className='icon'/>
            </a>
            <a href="https://twitter.com/naramunz" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter icon" className='icon'/>
            </a>
            <a href="https://www.naramunz.com/" target="_blank" rel="noopener noreferrer">
                <img src={home} alt="Naramunz homepage icon" className='icon'/>
            </a>
        </div>
    );
}