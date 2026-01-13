<template>
  <section class="page developers">
    <h2>Our Development Team</h2>
    <p class="intro">
      Meet the talented developers behind Computer System Institute's digital presence.
    </p>
    <div class="team-grid">
      <div class="developer-card">
        <div class="avatar">
          <img src="../../assets/images/jeff.jpg" alt="Jeff Kolin Miranda" />
        </div>
        <h3>Jeff Kolin Miranda</h3>
        <p class="role">Lead Developer</p>
        <p class="bio">
          Passionate about creating innovative web solutions and mentoring junior developers.
        </p>
        <div class="skills">
          <span>Vue.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
        </div>
      </div>
      <div class="developer-card">
        <div class="avatar">
          <img src="../../assets/images/jazh.jpg" alt="Jazhmine Mirasol" />
        </div>
        <h3>Jazhmine Mirasol</h3>
        <p class="role">Front Developer</p>
        <p class="bio">
          Designing meaningful digital experiences with usability and accessibility in mind.
        </p>
        <div class="skills">
          <span>Html</span>
          <span>Adobe Photoshop</span>
          <span>CSS</span>
        </div>
      </div>
      <div class="developer-card">
        <div class="avatar">
          <img src="../../assets/images/lisa.jpg" alt="Lisa Tolentino" />
        </div>
        <h3>Lisa Tolentino</h3>
        <p class="role">UI/UX Designer</p>
        <p class="bio">
          Crafting beautiful and intuitive user experiences with a focus on accessibility.
        </p>
        <div class="skills">
          <span>Figma</span>
          <span>Adobe XD</span>
          <span>CSS</span>
        </div>
      </div>
      <div class="developer-card">
        <div class="avatar">
          <img src="../../assets/images/rey.jpg" alt="Reyjan Dajab" />
        </div>
        <h3>Reyjan Dajab</h3>
        <p class="role">Backend Engineer</p>
        <p class="bio">
          Building robust and scalable server-side applications with modern technologies.
        </p>
        <div class="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JS</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #666;
  animation: fadeInUp 0.8s ease 0.2s both;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.developer-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(102, 126, 234, 0.1);
  animation: fadeInUp 0.6s ease backwards;
}

.developer-card:nth-child(1) {
  animation-delay: 0.2s;
}

.developer-card:nth-child(2) {
  animation-delay: 0.3s;
}

.developer-card:nth-child(3) {
  animation-delay: 0.4s;
}

.developer-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.2), transparent);
  transition: left 0.6s ease;
}

.developer-card:hover::before {
  left: 100%;
}

.developer-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 20px 50px rgba(102, 126, 234, 0.3);
  border-color: rgba(102, 126, 234, 0.3);
}

.avatar {
  font-size: 5rem;
  margin-bottom: 1rem;
  display: inline-block;
  transition: all 0.4s ease;
  animation: popIn 0.6s ease 0.5s both;
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid #667eea;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.3) rotate(-45deg);
  }

  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.developer-card:hover .avatar {
  transform: scale(1.15);
}

@keyframes floatAndSpin {
  0% {
    transform: scale(1) translateY(0) rotate(0deg);
  }

  50% {
    transform: scale(1.2) translateY(-10px) rotate(180deg);
  }

  100% {
    transform: scale(1.2) translateY(0) rotate(360deg);
  }
}

.developer-card h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.role {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
  animation: slideInRight 0.6s ease 0.6s both;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.bio {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  animation: fadeInUp 0.6s ease 0.7s both;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.skills span {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
  animation: slideInUp 0.6s ease backwards;
}

.skills span:nth-child(1) {
  animation-delay: 0.8s;
}

.skills span:nth-child(2) {
  animation-delay: 0.9s;
}

.skills span:nth-child(3) {
  animation-delay: 1s;
}

.skills span:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .developer-card {
    padding: 1.5rem;
  }

  .avatar {
    font-size: 4rem;
  }

  .developer-card h3 {
    font-size: 1.2rem;
  }
}
</style>
