import React from 'react'
import './Journey.css'
import appstore from '../../assets/images/appstoredown.png'
import playstore from '../../assets/images/googleplay.png'
import img1 from '../../assets/images/jou1.png'
import img2 from '../../assets/images/jou2.png'
import img3 from '../../assets/images/jou3.png'
import img4 from '../../assets/images/jou4.png'
const Journey = () => {
  return (
  <>
 <div className='journey_Section'>
    <div className='global_theme journey_content'>
        <h6>Your Quran journey starts here</h6>
        <p>Start your 30-day free trial today.</p>
        <div className='get_app_images'>
            <img src={appstore} alt="appstore" />
             <img src={playstore} alt="playstore" />

        </div>

        <div className='journey_imahges'>
            <img src={img1} alt="image1" />
             <img src={img2} alt="image2" />
             <img src={img3} alt="image3" />
             <img src={img4} alt="image4" />

        </div>



    </div>

 </div>
  </>
  )
}

export default Journey