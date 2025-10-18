const Contact = () => (
 <section className="contact-section">
   <h2>Contact Us</h2>

   <div className="contact-container">
     {/* Left: Form */}
     <form className="contact-form">
       <input type="text" placeholder="Your Name" />
       <input type="email" placeholder="Your Email" />
       <textarea placeholder="Message" rows="4"></textarea>
       <button type="submit">Send Message</button>
     </form>

     {/* Right: Map */}
     <div className="contact-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1820.61485142389!2d77.54993164004023!3d12.88832736173325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1760693613587!5m2!1sen!2sin" 
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullscreen=""
        loading="lazy"
        
      ></iframe>
     </div>
    </div>

   <p className="contact-info">📍 Address: No. 45, Spice Market Road, kanakapura main road, Karnataka</p>
   <p className="contact-info">📞 Phone: +91 98765 43210</p>
 </section>
);

export default Contact;
