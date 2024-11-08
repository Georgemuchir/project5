// import React from 'react';

// function Services() {
//   return (
//     <section id="services" className="services">
//       <h2>Our Services</h2>
//       <div className="services-list">
//         <div className="service-item">
//           <h3>Free Removal</h3>
//           <p>We provide safe and quick removal services at no cost.</p>
//         </div>
//         <div className="service-item">
//           <h3>Cash for Items</h3>
//           <p>Get cash for unwanted items right on the spot.</p>
//         </div>
//         <div className="service-item">
//           <h3>Fast Service</h3>
//           <p>We offer fast removal and service, no matter the condition.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;

import React from 'react';

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <img src="./assets/free-removal.png" alt="Free Removal" className="service-image" />
          <h3>Free Removal</h3>
          <p>We provide safe and quick removal services at no cost.</p>
        </div>
        <div className="service-item">
          <img src="./assets/cash-for-items.png" alt="Cash for Items" className="service-image" />
          <h3>Cash for Items</h3>
          <p>Get cash for unwanted items right on the spot.</p>
        </div>
        <div className="service-item">
          <img src="./assets/fast-service.png" alt="Fast Service" className="service-image" />
          <h3>Fast Service</h3>
          <p>We offer fast removal and service, no matter the condition.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
