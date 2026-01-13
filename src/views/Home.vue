<template>
  <section class="page home">
    <h2>Welcome to CSI!
      
    </h2>
    <div class="home-content">
      <p>
        Computer Systems Institute is a highly respected school that provides top-quality computer education.
        With a focus on practical, hands-on training, the school offers programs in areas such as programming,
        networking, software development, and cybersecurity. Students gain real-world skills that prepare them
        to succeed in the fast-paced and ever-changing technology industry.
      </p>
      <div class="stats">
        <div class="stat">
          <div class="stat-icon">👥</div>
          <h3>Unity</h3>
        </div>
        <div class="stat">
          <div class="stat-icon">📍</div>
          <h3>Quality</h3>
        </div>
        <div class="stat">
          <div class="stat-icon">📅</div>
          <h3>Honesty</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2{
  border: 4px solid #667eea;
  border-radius: 30px;
  padding: 10px;
}
.home-content {
  text-align: center;
}

.home-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.home-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 0.8s ease 0.2s both;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.stat {
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  animation: scaleInUp 0.6s ease backwards;
}

.stat:nth-child(1) { animation-delay: 0.3s; }
.stat:nth-child(2) { animation-delay: 0.4s; }
.stat:nth-child(3) { animation-delay: 0.5s; }

.stat::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  animation: shimmerEffect 3s infinite;
}

@keyframes shimmerEffect {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

.stat:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
}

.stat-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  display: inline-block;

}

.stat-icon:hover {
  animation: spin 0.6s ease;
}

@keyframes spin {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
}

.stat h3 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.stat p {
  opacity: 0.9;
  font-size: 0.9rem;
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

@keyframes scaleInUp {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(30px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@media (max-width: 768px) {
  .stats {
    grid-template-columns: 1fr;
  }

  .home-icon {
    font-size: 3rem;
  }

  .home-content p {
    font-size: 1.1rem;
  }
}
</style>
