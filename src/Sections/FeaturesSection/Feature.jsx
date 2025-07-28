import React from 'react'
import  './Feature.css'
import appstore from '../../assets/images/appstoredown.png'
import playstore from '../../assets/images/googleplay.png'
import mobiele from '../../assets/images/mobile.png'
import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import icon4 from '../../assets/images/icon4.png'
import icon5 from '../../assets/images/icon5.png'
import icon6 from '../../assets/images/icon6.png'
import icon7 from '../../assets/images/iocn7.png'
const Feature = () => {
    const features = [
    {
      icon: icon1,
      title: 'Read and Listen',
      description: 'Follow the Quranic text while listening to the dramatized reading for a complete learning experience.',
    },
    {
      icon:icon2,
      title: 'Offline Access',
      description: 'Download your favorite Surahs and listen anytime, even without an internet connection.',
    },
    {
      icon: icon3,
      title: 'Sleep Timer',
      description: 'Set a timer to automatically stop the playback, so you can listen peacefully before falling asleep.',
    },
    {
      icon: icon4,
      title: 'Creating Playlists',
      description: 'Save and organize your favorite surahs and translation into custom playlists for easy access anytime.',
    },
    {
      icon:icon5,
      title: 'Note Taking with Audio',
      description: 'Take notes while listening to the translation, with audio linked directly to your notes for easy reference.',
    },
    {
      icon: icon6,
      title: 'Customizable Clips',
      description: 'Highlight and save your favorite audio with the option to repeat and reflect.',
    },
    {
      icon: icon7,
      title: 'Customizable Listening Speed',
      description: 'Adjust the playback speed to match your preference for a more personalized experience.',
    },
  ];
  return (
   <>
   <div className='feature_section'>
    <div className='feature_content global_theme'>
       <h6>An Auditory Experience that engages more of your senses to contemplate the message behind the meaning of the Quran</h6>
        <p>You can listen to the Quran and its meaning whenever you want. Make playlists, take notes, set a sleep timer, and enjoy learning in your own way.</p>
        <div className='get_app_images'>
            <img src={appstore} alt="appstore" />
             <img src={playstore} alt="playstore" />

        </div>
        <div className='mob_feature_image'>
             <img src={mobiele} alt="mobiele"/>

        </div>
        <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <div className="feature-icon"> <img src={feature.icon} alt="icons"/></div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>


   </div>
   </>
  )
}

export default Feature