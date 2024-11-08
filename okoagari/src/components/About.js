// import React from 'react';

// function About() {
//   return (
//     <section id="about" className="about">
//       <h2>History of Okoagari</h2>
//       <p>Okoagari has been providing premium services since its inception, with a focus on customer satisfaction and reliable performance.</p>
//     </section>
//   );
// }

// export default About;

import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <h2>History of Okoagari</h2>
      <div className="about-image">
        {/* Slot for history-related image */}
        <img src="./assets/history-image.jpg" alt="History of Okoagari" />
      </div>
      <p>Okoagari has been providing premium services since its inception, with a focus on customer satisfaction and reliable performance.</p>
    </section>
  );
}

export default About;
