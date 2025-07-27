import React from "react";
import "./Community.css";
import profileImg from "../../assets/images/profile.png"; 
import star from "../../assets/images/Stars.png"; 

const columns = [
  [
    {
      text: `I’m using Pretty Progress to track my travels and to remind me to appreciate the moment I’m in (because it doesn’t last forever). I like seeing the widget whenever I’m on my iPad; it’s unobtrusive and minimal. It doesn’t push itself on you - just provides the countdown reminder that you set. Good work on this app!`,
      author: "Ahmed R.",
    },
    {
      text: `Been using it for months and want to give a review cause im happy to have this friendly reminder on my phone. Helping me on many deadlines and important dates. Design is pretty much my style, easy to use, features are constantly improved, no ads. Me like this 😊 👍`,
      author: "Ahmed R.",
    },
  ],
  [
    {
      text: `I love to remind myself of many things and the progress bar percentage looks great on my phone. My favourite is the gradient percentage and the retro windows styles.`,
      author: "Ahmed R.",
    },
    {
      text: `Was looking for a great app to add personal goals and deadlines. Really nice solution and great usability!`,
      author: "Ahmed R.",
    },
    {
      text: `Easily the most beautifully designed countdown widgets I could find on the App Store!`,
      author: "Ahmed R.",
    },
  ],
  [
    {
      text: `Beautiful countdown app ever created. Easy to use, so many great features such as countdown bars that you can choose from — you name your favourite bar, this app has it.<br /><br />What I like most about this app is that it looks incredibly nice when I added it to my home screen. So many beautiful colors I can use to remind me of my goals and deadlines.<br /><br />I highly recommend this app to anyone who wants to keep things simple in life. If you are tired of writing things down on paper or your device to keep you on track, look no further — Pretty Progress is the best when it comes down to countdown!`,
      author: "Ahmed R.",
      tall: true,
    },
    {
      text: `It's definitely the prettiest countdown/progress app out there.`,
      author: "Ahmed R.",
    },
  ],
];

const CommunityStories = () => {
  return (
    <section className="community-section global_theme">
      <h2 className="section-title">Stories from Our Community</h2>
      <div className="columns">
        {columns.map((column, colIdx) => (
          <div className="column" key={colIdx}>
            {column.map((review, idx) => (
              <div
                key={idx}
                className={`review-card ${review.tall ? "tall" : ""}`}
              >
                <div className="stars"><img src={star} alt="reviews" /></div>
                <p
                  className="text"
                  dangerouslySetInnerHTML={{ __html: review.text }}
                ></p>
                <div className="author">
                  <img src={profileImg} alt={review.author} />
                  <span>{review.author}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="see-all-btn">See All Stories</button>
    </section>
  );
};

export default CommunityStories;
