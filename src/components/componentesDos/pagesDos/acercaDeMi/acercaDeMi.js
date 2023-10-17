import backgroundDos from '../../extrasDos/BackgroundDos/aboutMe.jpg'
import './acercaDeMi.css'

function AcercaDeMi(){
    return(
        <div className="aboutMe_main" style={{backgroundImage:`url(${backgroundDos})`}}>
        <div className='aboutMe_container_text'>
            <p>Soy alguien dispuesto a dar todo por <b>Jesus</b><br>
            </br>
            soy actor, musico, y digamos que modelo.<br></br> 
            Sigueme en mi canal de <a href='https://www.youtube.com/channel/UCWFh7-Fo63jwpH5E9L04U9A'Target="_blank" >YouTube</a>
            </p>

        </div>
        </div>
        
    )
}

export default AcercaDeMi;