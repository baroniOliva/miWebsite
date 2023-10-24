import './firstPage.css';
import background from './index_image.jpg';
import background_responsive from './index_image_responsive.jpg'

function FirstPage (){
    return(
        <div className='firstPage_container'>
        <div className='firstPageBkg' style={{ backgroundImage: `url(${background})` }}>  </div>
        <div className='firstPageBkg_responsive' style={{ backgroundImage: `url(${background_responsive})` }}>  </div>
        </div>
    )
}
export default FirstPage;