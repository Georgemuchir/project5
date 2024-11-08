// import React from 'react';

// function Contact() {
//   return (
//     <section id="contact" className="contact">
//       <h2>Get In Touch</h2>
//       <form>
//         <input type="text" placeholder="Name" />
//         <input type="email" placeholder="Email" />
//         <input type="tel" placeholder="Phone" />
//         <textarea placeholder="Message"></textarea>
//         <button type="submit">Send Message</button>
//       </form>
//       <p>Call us at: <strong>0400475990</strong></p>
//       <p>Visit us at: 312 Elvet Rd, Franklin, Hobart</p>
//     </section>
//   );
// }

// export default Contact;

import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      {/* Slot for map or any contact-related image */}
      <div className="contact-image">
        <img src="./assets/contact-image.jpg" alt="Contact Us" />
      </div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>Call us at: <strong>0400475990</strong></p>
      <p>Visit us at: 312 Elvet Rd, Franklin, Hobart</p>
    </section>
  );
}

export default Contact;
