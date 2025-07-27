import React from "react";
import "./HeroSection.css";
import top1 from "../../assets/images/no1.png";
import playstore from "../../assets/images/playstorescan.png";
import apptore from "../../assets/images/appstorescan.png";
import audio from "../../assets/images/audio.png";
import mobprview from "../../assets/images/mobpreview.png";
import cow from "../../assets/images/cow.png";
import library from "../../assets/images/library.png";
const HeroSection = () => {
  return (
    <>
      <div className="hero_section">
        <div className="hero_section_content global_theme">
          <div className="hero_Section_top_content">
            <div className="top_content_text">
              <h6>Your daily Journey to Understand Quran</h6>
              <p>
                Immerse yourself in the beauty of the Quran with daily audio.
                Enhance your understanding through listening and reflection,
                anytime, anywhere.
              </p>
              <div className="top_content_images">
                <img src={apptore} alt="apptore" />
                <img src={playstore} alt="playstore" />
              </div>
            </div>
            <div className="top1_image">
              <img src={top1} alt="no_1" />
            </div>
          </div>
          <div className="hero_Section_bttotm_content">
            <div className="left_image_audio">
              <img src={audio} alt="audio" />
            </div>
            <div className="right_image_preview">
              <img src={mobprview} alt="mobprview" />
            </div>
          </div>
        </div>
      </div>
      <div className="about_section global_theme">
        <div className="about_content_box">
          <div className="about_image">
            <img src={cow} alt="cow" />
          </div>
          <div className="about_text">
            <h6>
              Listen to the world's 1st DRAMATIZED Audiobook of the translation
              of the Quran
            </h6>
            <p>
              Immerse yourself in the beautiful dramatization of the translation
              of the Quran to grasp its true message.With clear audio, and easy
              access, deepen your connection with the Quran wherever you are.
            </p>

            <button>Get Started for Free</button>
          </div>
        </div>

        <div className="about_content_box1" >
          
          <div className="about_text" style={{maxWidth:"500px"}}>
            <h6>
              Create personalized Quran playlists
            </h6>
            <p>
             Select your favorite Surahs and verses to build custom playlists that suit your spiritual goals. Listen your way—whether it's daily reflections, study sessions, or peaceful contemplations.
            </p>

            <button>Get Started for Free</button>
          </div>
          <div className="about_image">
            <img src={library} alt="library" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
