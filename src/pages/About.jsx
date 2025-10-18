const About = () => (
 <section className="about-section">
   <h2>About South India’s Best spice products</h2>
   <p>
     Founded in 2025,"We source high-quality spices from around the world to bring vibrant flavors to your kitchen.
      Our products range from single-origin spices to unique blends, 
      all prepared with a commitment to freshness and purityf and also fast.
   </p>


   <div className="team-grid">
     {["Marketing Team", "Sales Team", "Delivery Team"].map((team) => (
       <div key={team} className="team-card">
         <h3>{team}</h3>
         <p>
           Dedicated professionals ensuring smooth operations across South India.
         </p>
       </div>
     ))}
   </div>
 </section>
);

export default About;