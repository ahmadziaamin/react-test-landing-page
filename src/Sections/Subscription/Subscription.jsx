import React from 'react'
import './Subscription.css'
const Subscription = () => {
    const plans = [
    {
      title: 'Standard',
      price: '$4.99',
      tag:'/mth',
      charge: 'Charges $6 every month',
      features: [
        'Listening with better audio quality',
        'Listening without restrictions & ads',
        'Create playlist & listen offline',
      ],
    },
    {
      title: 'Growth',
      price: '$4.99',
      tag:'/mth',
      charge: 'Charges $6 every month',
      features: [
        'Listening with better audio quality',
        'Listening without restrictions & ads',
        'Create playlist & listen offline',
      ],
    },
    {
      title: 'Scale',
      price: '$4.99',
      tag:'/mth',
      charge: 'Charges $6 every month',
      features: [
        'Listening with better audio quality',
        'Listening without restrictions & ads',
        'Create playlist & listen offline',
      ],
    },
    {
      title: 'Family Package',
      price: '$4.99',
      tag:'/mth',
      charge: 'Charges $6 every month',
      features: [
        'Listening with better audio quality',
        'Listening without restrictions & ads',
        'Create playlist & listen offline',
      ],
    },
  ];
  return (
   <>
   <div className='subscription_Section'>
    <div className='subscription_content global_theme'>
        <h6 className='subscription_heading'>Subscribe to The Clear Quran® Audiobook Premium</h6>
      <div className=".containerss {
">
      <div className="plans">
        {plans.map((plan, index) => (
          <div key={index} className={`plan ${plan.title.toLowerCase().replace(' ', '-')}`}>
            <span className="plan-title">{plan.title}</span>
            <div className="price">{plan.price} <span>{plan.tag}</span></div>
            <div className="charge">{plan.charge}</div>
            <div className='subs_divider'></div>
            <ul className="features-list">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="check-mark"></span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="lifetime-section">
        
        <div className="lifetime-content">
            <span className="lifetime-title">Lifetime</span>
          <h2>Get Lifetime Access to All Features — One Time, Forever.</h2>
          <ul className="features-list">
            <li>
              <span className="check-mark1"></span> Listening with better audio quality
            </li>
            <li>
              <span className="check-mark1"></span> Listening without restrictions & ads
            </li>
            <li>
              <span className="check-mark1"></span> Create playlist & listen offline
            </li>
          </ul>
         
        </div>
        <div className='subscripe_price_plane'>
           <div className='subscripe_price_plane_top_text'>
             <h6>99.00 <span>lifetime</span></h6>
             <p>Onetime payment $99 for lifetime</p>
           </div>
           <div className='subscripe_price_plane_bottom_text'>
             <h6>6 - months money-  back guarantee</h6>
            <button>Get Lifetime Access</button>
           </div>
            


        </div>
      </div>
    </div>
    </div>
   </div>
   </>
  )
}

export default Subscription