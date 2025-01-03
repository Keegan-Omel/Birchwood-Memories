import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/Home.css";
import { QRCodeCanvas } from "qrcode.react"; // Import QRCodeCanvas
// Import Stripe.js (we’ll use this later for the Stripe integration)
import { loadStripe } from "@stripe/stripe-js";

// Ensure you replace with your actual Stripe public key
const stripePromise = loadStripe("your-publishable-stripe-key");

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Toggle for expandable content
  const [isQRVisible, setIsQRVisible] = useState(false); // Toggle for QR code visibility

  const galleryImages = [
    "./images/photo1.jpg",
    "./images/photo2.jpg",
    "./images/photo3.jpg",
    "./images/photo4.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const handleToggleDescription = () => {
    setIsExpanded((prevState) => !prevState); // Toggle expanded state
  };

  const handleToggleQR = () => {
    setIsQRVisible((prevState) => !prevState); // Toggle QR code visibility
  };

  // Placeholder function for handling Stripe checkout (to be implemented later)
  const handleStripePayment = async () => {
    const stripe = await stripePromise;

    // You will need to call your backend to create the Checkout Session and get the session ID
    const response = await fetch("/create-checkout-session", { method: "POST" });
    const session = await response.json();

    // Redirect to Stripe checkout page
    const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

    if (error) {
      console.error("Error during Stripe Checkout", error);
    }
  };

  return (
    <div>
      {/* Main Description */}
      <h1 className="hcolour">Welcome To Birchwood Memories</h1>
      <img
        src="./images/old_cabin_photo.jpg"
        alt="Image of a rustic cabin looking over a lake"
        style={{
          display: "block",
          margin: "0 auto",
          width: "500px",
          height: "auto",
          boxShadow: "0 2px 4px rgba(0,0,0,0.9)",
          borderRadius: "15px",
        }}
      />
      <h2>Welcome to Birchwood Memories, a cherished retreat nestled amidst the serene beauty of Rose City, Michigan...</h2>
      
      {/* Full Description of Birchwood Memories */}
      <p>
        Birchwood Memories is more than just a getaway; it’s a place where families and friends can reconnect with nature. The tranquil surroundings of the Rose City area, combined with our beautiful spring-fed lake and forest trails, make for the perfect retreat. Whether you're here for a weekend or an extended stay, you'll find peace and relaxation at every turn.
      </p>

      {/* Contact for Booking Button */}
      <nav className="navbar">
        <button className="contact-btn" onClick={handleToggleDescription}>
          Contact for Booking
        </button>
      </nav>

      {/* Expandable Contact and QR code Section */}
      {isExpanded && (
        <section className="contact-qr-section">
          <h2>Contact Information</h2>
          <p>If you are interested in booking a stay or have any inquiries, feel free to reach out!</p>
          <div className="contact-details">
            <p>Email: contact@birchwoodmemories.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Stripe Payment Button */}
          <h3>Make a Payment</h3>
          <button className="stripe-btn" onClick={handleStripePayment}>
            Pay with Credit Card (Stripe)
          </button>

          {/* QR Code Section */}
          <div className="qr-code-container">
            <h3>Pay Using XRP</h3>
            <QRCodeCanvas value="your-xrp-wallet-address-here" size={256} />
            <p>Scan this QR code to make a payment using XRP</p>
          </div>
        </section>
      )}

      {/* Photo Gallery Section */}
      <section className="carousel-gallery">
        <h2>Photo Gallery</h2>
        <Slider {...settings}>
          {galleryImages.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                }}
              />
            </div>
          ))}
        </Slider>
      </section>

      <footer className="footer">
        Copyright © 2024 KEEG. All rights reserved...
      </footer>
    </div>
  );
};

export default Home;