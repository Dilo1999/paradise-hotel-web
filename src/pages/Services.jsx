import { FaBed, FaSwimmingPool, FaUtensils, FaGlassCheers, FaDumbbell, FaSpa, FaChalkboardTeacher, FaHeart } from 'react-icons/fa';

function Services() {
  return (
    <div className="services-page-modern">

      {/* Hero Banner */}
      <div className="services-hero">
        <h1>Our Premium Services</h1>
        <p>Designed for your comfort, leisure, and unforgettable experiences.</p>
      </div>

      {/* Room Types */}
      <section className="services-category">
        <h2>Room Types</h2>
        <div className="service-grid">
          <div className="service-item">
            <FaBed size={50} />
            <h3>Single Room</h3>
            <p>Elegant and cozy rooms perfect for solo travelers.</p>
          </div>
          <div className="service-item">
            <FaBed size={50} />
            <h3>Double Room</h3>
            <p>Spacious and comfortable rooms ideal for couples and families.</p>
          </div>
          <div className="service-item">
            <FaBed size={50} />
            <h3>Luxury Suite</h3>
            <p>Experience ultimate luxury with our fully-serviced suites.</p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="services-category">
        <h2>Facilities</h2>
        <div className="service-grid">
          <div className="service-item">
            <FaSwimmingPool size={50} />
            <h3>Swimming Pool</h3>
            <p>Take a refreshing dip in our stunning infinity pool.</p>
          </div>
          <div className="service-item">
            <FaDumbbell size={50} />
            <h3>Fitness Center</h3>
            <p>Stay active with our state-of-the-art gym facilities.</p>
          </div>
          <div className="service-item">
            <FaSpa size={50} />
            <h3>Spa & Wellness</h3>
            <p>Relax, rejuvenate, and treat yourself at our luxury spa.</p>
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="services-category">
        <h2>Dining</h2>
        <div className="service-grid">
          <div className="service-item">
            <FaUtensils size={50} />
            <h3>Fine Dining Restaurants</h3>
            <p>Enjoy a world-class culinary journey crafted by top chefs.</p>
          </div>
          <div className="service-item">
            <FaGlassCheers size={50} />
            <h3>Elegant Bars & Lounges</h3>
            <p>Relax with signature cocktails and a serene atmosphere.</p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="services-category">
        <h2>Events & Hosting</h2>
        <div className="service-grid">
          <div className="service-item">
            <FaChalkboardTeacher size={50} />
            <h3>Business Conferences</h3>
            <p>Host successful meetings with cutting-edge facilities.</p>
          </div>
          <div className="service-item">
            <FaHeart size={50} />
            <h3>Wedding Celebrations</h3>
            <p>Make your special day magical in our grand venues.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;
