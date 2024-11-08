// import React from 'react';

// function Header() {
//   return (
//     <header className="header">
//       <div className="header-content">
//         <h1>Okoagari</h1>
//         <nav>
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About Us</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#contact">Contact Us</a></li>
//           </ul>
//         </nav>
//         <div className="contact-info">
//           <p>Call us: <strong>(03) 6169 2663</strong></p>
//           <p>Email: <a href="mailto:Okoagari@gmail.com">Okoagari@gmail.com</a></p>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        {/* Slot for logo image */}
        <img src="logo.jpeg" alt="Okoagari Logo" className="logo" />
        <h1>Okoagari</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        <div className="contact-info">
          <p>Call us: <strong>(03) 6169 2663</strong></p>
          <p>Email: <a href="mailto:Okoagari@gmail.com">Okoagari@gmail.com</a></p>
        </div>
      </div>
    </header>
  );
}

export default Header;

