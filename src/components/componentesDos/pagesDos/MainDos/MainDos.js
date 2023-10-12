import fotoPerfil from '../../extrasDos/BackgroundDos/foto_perfil.jpg'
function MainDos() {
    return (
        <div className='paginaDos_contenido'>
     

        <div className='paginaDos_contenido_description'>
          <div className='description_text'>
          <h2>Soy el Sr.B un creador de contenido cristiano</h2>
          <p>"¡Hola! Soy un joven apasionado de 31 años que ha encontrado su propósito en la vida a través de la fe cristiana. Mi misión es llevar la buena nueva de Jesús a través de videos en YouTube y redes sociales. ¿Por qué soy diferente? Porque me encanta abordar estos temas de una manera dinámica, divertida e inesperada, siempre con un toque de humor juvenil. Mi enfoque no se limita únicamente a la espiritualidad; también trato temas populares como moda, superhéroes, películas de Marvel y mucho más. Estoy siempre dispuesto a ayudarte en cualquier proyecto relacionado con las redes sociales. ¡Sígueme y únete a esta emocionante aventura para conocer más de Jesús de una manera única y atractiva!"</p>
          </div>
          <div className='description_background_image'>
          <div className='description_image' style={{backgroundImage:`url(${fotoPerfil})`}}>
            
          </div>
          </div>
          </div>
          <div className='description_buttons'>
          <button className='myButton1'>Sigueme</button>
          <button className='myButton2'>Contactame</button>
          </div>
      </div>
    )
}

export default MainDos;