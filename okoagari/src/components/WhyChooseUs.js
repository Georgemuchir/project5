import React from 'react';
import './WhyChooseUs.css'; // Import CSS file for styling
import towTruckImage from '../assets/tow-truck.jpg'; // Adjust path as needed

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="content">
        <h2>Why Choose Us</h2>
        <p>
          There are major advantages of choosing to go with professional Australian towing 
          and emergency roadside services you can trust. You get a more secure and quick 
          roadside service around the clock without the need for paying any membership fees. 
          On the upside, you get only certified automotive recovery technicians touching 
          your vehicle and your car will be treated with respect.
        </p>
        <p>
          Our tow service offers you a special opportunity to save money on quality assistance 
          that suits your vehicle and your preferences. With us, you might not need to call a 
          mobile mechanic with on-the-spot assistance to get you back on the road within minutes.
        </p>
        <button className="read-more">Read More →</button>
      </div>
      <div className="image-container">
        <img src={towTruckImage} alt="Tow Truck" />
      </div>
    </section>
  );
}

export default WhyChooseUs;
