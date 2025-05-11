function About() {
  return (
    <div className="about-page">

      {/* Hotel History Section */}
      <section className="history-section">
        <h2>Our Story</h2>
        <p>
          Established in 1995, Paradise Hotel was born from a dream to create a luxurious sanctuary where guests feel at home. 
          Over the years, we’ve blended world-class service with the stunning beauty of our oceanfront setting to craft unforgettable experiences.
        </p>
      </section>

      {/* Mission and Values Section */}
      <section className="mission-section">
        <h2>Our Mission & Values</h2>
        <p>
          At Paradise Hotel, we are dedicated to providing the highest level of hospitality, luxury, and personalized service. 
          Our core values are built around excellence, respect, and a passion for creating the perfect guest experience.
        </p>
      </section>

      {/* Hotel Photos Section */}
      <section className="photos-section">
        <h2>Explore Our Spaces</h2>
        <div className="photo-gallery">
          <img src="https://images.unsplash.com/photo-1560347876-aeef00ee58a1?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400&q=80" alt="Luxury Room" />
          <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400&q=80" alt="Hotel Lounge" />
          <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400&q=80" alt="Hotel Amenities" />
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="General Manager" />
            <h3>John Doe</h3>
            <p>General Manager</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Guest Services Manager" />
            <h3>Jane Smith</h3>
            <p>Guest Services Manager</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Head Chef" />
            <h3>Mike Johnson</h3>
            <p>Head Chef</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
