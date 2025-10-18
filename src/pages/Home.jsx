import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
 const teams = [
   {
     name: "Marketing Team",
     description: "Strategically promoting our products across South India to ensure maximum reach."
   },
   {
     name: "Sales Team",
     description: "Dedicated sales personnel helping retailers and distributors efficiently place orders."
   },
   {
     name: "Delivery Team",
     description: "Timely delivery across South India, ensuring fresh and high-quality masalas reach every client."
   }
 ];
 
 return (
   <div>
     <Navbar />
     <Hero />

     {/* ================= Card Layout ================= */}
     <section className="info-section">
       <h2>South India’s Best spice products</h2>
       <p>Our spice company is a small business, like "Spice Origins," that imports and sells high-quality, ethically sourced spices directly to consumers, focusing on authentic flavors and preserving traditional recipes.</p>

       <div className="info-cards">
         {teams.map((team) => (
           <div key={team.name} className="info-card">
             <h3>{team.name}</h3>
             <p>{team.description}</p>
           </div>
         ))}
       </div>
     </section>

     {/* ================= Table Layout ================= */}
     <section className="info-section">
       <h2>Our Teams – Table View</h2>
       <table className="info-table">
         <thead>
           <tr>
             <th>Team</th>
             <th>Description</th>
           </tr>
         </thead>
         <tbody>
           {teams.map((team) => (
             <tr key={team.name}>
               <td>{team.name}</td>
               <td>{team.description}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </section>
   </div>
 );
};

export default Home;
