function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=crop&w=1350&h=500&q=80')",
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          color: '#FFD700', // Golden color
          marginBottom: '1rem',
          textShadow: '2px 2px 8px rgba(0,0,0,0.7)' // Make it pop!
        }}>
          <b>Welcome to Paradise Hotel</b>
        </h1>
        <p style={{
          fontSize: '1.5rem',
          color: '#f8f8f8',
          textShadow: '1px 1px 6px rgba(0,0,0,0.5)'
        }}>
          <b>Luxury, Comfort, and Elegance Await You</b>
        </p>
      </section>



      {/* Featured Services */}
      <section style={{ padding: '2rem', backgroundColor: '#f4f4f4' }}>
        <h2 style={{ textAlign: 'center' }}>Our Highlights</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '2rem',
          flexWrap: 'wrap'
        }}>
          <div className="service-box">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=250&q=80"
             alt="Ocean View Rooms" 
             style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
              />
            <h3>🏖️ Ocean View Rooms</h3>
            <p>Wake up to the sound of waves.</p>
            <button className="details-button">View Details</button>
          </div>

          <div className="service-box">
            <img
              src="https://hospitalityinsights.ehl.edu/hubfs/AdobeStock_190029404.jpeg"
              alt="Spa & Wellness"
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3>💆‍♀️ Spa & Wellness</h3>
            <p>Relax and rejuvenate with us.</p>
            <button className="details-button">View Details</button>
          </div>

          <div className="service-box">
            <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/original/jpg/4550.jpg" alt="Free Wi-Fi" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
            <h3>📶 Free High-Speed Wi-Fi</h3>
            <p>Stay connected always.</p>
            <button className="details-button">View Details</button>
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Ready for your dream vacation?</h2>
        <button style={{ padding: '1rem 2rem', backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '1rem', marginTop: '1rem' }}>
          Book Now
        </button>
      </section>
    </div>
  )
}

export default Home
