<template>
    <div class="landing-page">
      <div class="hero">
        <header>
          <div class="logo">MatchUp</div>
          <nav>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><button class="login-btn">Log In</button></li>
            </ul>
          </nav>
        </header>
        
        <div class="hero-content">
            
          <h1>Join, MatchUp and Play!</h1>
          <hr>
          <h3 class="subtitle">
            <ol>
              <li>Find & join local sport matches</li>
              <li><strong><em>MatchUp</em></strong> & chat with other players</li>
              <li>Meet & have fun!</li>
            </ol>
        </h3>
         
          <button class="signup-btn">Join in the fun <span class="arrow">→</span></button>
        </div>
      </div>
      
      <section class="features">
        <h2>Why Choose MatchUp?</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="icon">🔍</div>
            <h3>Smart Matching</h3>
            <p>Our algorithm finds connections based on shared interests and compatibility</p>
          </div>
          <div class="feature-card">
            <div class="icon">🔒</div>
            <h3>Safe & Secure</h3>
            <p>Your privacy matters to us. All your data is encrypted and protected</p>
          </div>
          <div class="feature-card">
            <div class="icon">🌟</div>
            <h3>Quality Matches</h3>
            <p>Focus on meaningful connections with verified profiles</p>
          </div>
        </div>
      </section>
      
      <footer>
        <div class="footer-content">
          <div class="copyright">© 2025 MatchUp. All rights reserved.</div>
          
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage'
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');


  .landing-page {
    background-image: url('@/assets/landing.jpg');
    background-size: cover;
    background-position: center;
    font-family: 'Roboto', sans-serif;
    color: #333333;
    line-height: 1.6;
    }
  
  .hero {
    background-image: url('@/assets/landing bgnd.jpg');
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    position: relative;
    color: white;
  }
  
  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('@/assets/landing bgnd.jpg');
    background: linear-gradient(to right bottom, rgba(72, 27, 112, 0.67), rgba(116, 76, 151, 0.7));
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
    position: relative;
    z-index: 1;
    background: rgba(72, 27, 112, 0.8);
    box-shadow: 0px 4px 10px rgba(242, 238, 238, 0.3);
  }
  
  .logo {
    font-size: 32px;
    font-weight: 700;
  }
  
  nav ul {
    display: flex;
    list-style: none;
    align-items: center;
  }
  
  nav ul li {
    margin-left: 30px;
  }
  
  nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: 500;
  }
  
  .login-btn {
    background-color: transparent;
    color: white;
    border: 2px solid white;
    padding: 8px 20px;
    border-radius: 50px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .login-btn:hover {
    background-color: white;
    color: #744c97;
  }
  
  .hero-content {
    max-width: 800px;
    padding: 100px 10%;
    position: relative;
    z-index: 1;
  }
  
  h1 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
  }
  
  .subtitle {
    font-size: 24px;
    margin-bottom: 40px;
    color: white;
  }
  

  .signup-btn {
    background-color: #5c2b87;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 50px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .signup-btn:hover {
    background-color:  #744c97;
    transform: translateY(-2px);
  }

.signup-btn:hover .arrow {
    transform: translateX(5px);
}

/* Ensure the arrow has a smooth transition */
.arrow {
    transition: transform 0.3s ease;
}

  .features {
    padding: 80px 5%;
    background-color: white;
    text-align: center;
  }
  
  h2 {
    font-size: 36px;
    margin-bottom: 60px;
    color: #5c2b87;
  }
  
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .feature-card {
    background-color: #e1dfdfc4;
    padding: 40px 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
  }
  
  .feature-card:hover {
    transform: translateY(-10px);
  }
  
  .icon {
    font-size: 40px;
    margin-bottom: 20px;
  }
  
  h3 {
    font-size: 22px;
    margin-bottom: 15px;
    color: #5c2b87;
    
  }
  
  footer {
    background-color: #f5f5f5;
    padding: 30px 5%;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .copyright {
    font-size: 14px;
    color: #666;
  }
  
  
  @media (max-width: 768px) {
    nav ul {
      display: none;
    }
    
    .hero-content {
      padding: 60px 5%;
    }
    
    h1 {
      font-size: 36px;
    }
    
    .subtitle {
      font-size: 20px;
    }
    
    .footer-content {
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }
  }
  </style>