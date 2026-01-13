<template>
  <div id="app">
    <nav class="navbar">
      <div class="logo-container">
        <img src="../assets/csi.png" alt="CSI Logo" class="logo-img" />
        <h1 class="logo">Computer System Institute</h1>
      </div>
      <div class="nav-links" :class="{ active: mobileMenuOpen }" ref="navLinks">
        <router-link to="/" @click="closeMobileMenu">Home</router-link>
        <router-link to="/mission" @click="closeMobileMenu">Mission</router-link>
        <router-link to="/vision" @click="closeMobileMenu">Vision</router-link>
        <router-link to="/developers" @click="closeMobileMenu">Developers</router-link>
      </div>
      <div class="menu-toggle" :class="{ active: mobileMenuOpen }" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <footer class="footer"> 
      <div class="footer-bottom">
        <p>&copy; 2026 Computer System Institute. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  },
  mounted() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.mobileMenuOpen = false
      }
    })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes glow {
  0%, 100% { text-shadow: 0 0 5px rgba(102, 126, 234, 0.5); }
  50% { text-shadow: 0 0 20px rgba(102, 126, 234, 0.8); }
}

@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  margin: 0;
  background: linear-gradient(-45deg, #8ffc29, #033f1a, #19779c, #075c15);
  background-size: 400% 400%;
  min-height: 100vh;
  animation: gradientShift 15s ease infinite;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.logo-img {
  width: 45px;
  height: 45px;
  border-radius: 8px;
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
}

.logo {
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin: 0;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-links a::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.nav-links a:hover::before {
  left: 100%;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 20px;
  height: 2px;
  background: white;
  border-radius: 1px;
  animation: slideInScaleX 0.4s ease forwards;
}

@keyframes slideInScaleX {
  to {
    transform: translateX(-50%) scaleX(1);
  }
}

/* Mobile Menu */
.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: white;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
  }

  .logo-container {
    gap: 0.5rem;
  }

  .logo-img {
    width: 35px;
    height: 35px;
  }

  .logo {
    font-size: 1.5rem;
  }

  .nav-links {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .menu-toggle {
    display: flex;
  }

  .menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}

/* Page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Page styles */
.page {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 255, 0.95) 100%);
  border-radius: 15px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: slideUpFade 0.6s ease;
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page h2 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  animation: fadeInDown 0.6s ease;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #666;
  animation: fadeInUp 0.8s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #666;
}

.page ul {
  list-style: none;
  padding: 0;
}

.page li {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 5px;
}

/* Footer Styles */
.footer {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  margin-top: auto;
  padding: 3rem 0 1rem;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
  border-top: 2px solid rgba(102, 126, 234, 0.3);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
}

.footer-section h3 {
  color: #ecf0f1;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  animation: fadeInUp 0.6s ease;
}

.footer-section h4 {
  color: #3498db;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  animation: fadeInUp 0.7s ease;
}

.footer-section p {
  margin: 0.5rem 0;
  line-height: 1.6;
  color: #bdc3c7;
  transition: color 0.3s ease;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin: 0.5rem 0;
  transition: transform 0.3s ease;
}

.footer-section ul li:hover {
  transform: translateX(5px);
}

.footer-section a {
  color: #bdc3c7;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.footer-section a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.3s ease;
}

.footer-section a:hover {
  color: #667eea;
}

.footer-section a:hover::after {
  width: 100%;
}

.footer-bottom {
  border-top: 1px solid #34495e;
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  animation: fadeIn 0.8s ease;
}

.footer-bottom p {
  margin: 0;
  color: #95a5a6;
  font-size: 0.9rem;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
