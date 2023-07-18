import React from 'react';
import '../CSS/Home.css';


const Home = () => (
    <div>
          <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
                <li className="navbar-item"><a href="/about" className="navbar-link">About</a></li>
                <li className="navbar-item"><a href="/gallery" className="navbar-link">Gallery</a></li>
                <li className="navbar-item"><a href="/contact" className="navbar-link">Contact</a></li>
            </ul>
        </nav>
      <h1 className='hcolour'>Welcome To Birchwood Memories</h1>
      <img src="./images/old_cabin_photo.jpg" alt="Image of a rustic cabin looking over a lake" style={{ display: 'block', margin: '0 auto', width: '500px', height: 'auto', boxShadow: '0 2px 4px rgba(0,0,0,0.9',}} />
      <h2>Welcome to Birchwood Memories, a cherished retreat nestled amidst the serene beauty of Rose City, Michigan. This enchanting property offers a perfect blend of rustic charm and natural splendor. Surrounded by a picturesque forest adorned with majestic Pines, Birch, Oak, Maple, and other magnificent trees, it presents a haven of tranquility where you can escape the hustle and bustle of everyday life. At the heart of this magical setting lies a cozy cabin, offering breathtaking views of a private 12-acre lake. Step into a world where time slows down, and immerse yourself in the beauty of nature, creating unforgettable memories in an ambiance filled with cherished family history. Whether you seek solitude, outdoor adventures, or simply a space to reconnect with loved ones, Birchwood Memories welcomes you with open arms.</h2>
      <footer className="footer">Copyright © 2023 KEEG. All rights reserved.

      The content, design, and graphics on this website are protected under international copyright laws and may not be reproduced, distributed, transmitted, displayed, or otherwise used without the prior written consent of KEEG. Unauthorized use of any materials on this website may violate copyright, trademark, and other laws.

    All trademarks, logos, and service marks displayed on this website are the property of their respective owners.

    For inquiries or permission requests regarding the use of content from this website, please contact

    KEEG 
    St Marys, ON, CANADA
    {/* [Email]
    [Phone] */}
    </footer>
        </div>
      );
  
  

export default Home;