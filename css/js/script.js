tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      color: {
        value: "#00ffcc",
      },
      links: {
        color: "#00ffcc",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 250,
          links: {
            opacity: 0.8,
          },
        },
      },
    },
    detectRetina: true,
  });
  
  const counters = document.querySelectorAll('.stat-number');
  const speed = 50;
  
  const animateCounters = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        
        const updateCount = () => {
          const current = +counter.innerText;
          const inc = target / speed;
          if (current < target) {
            counter.innerText = Math.ceil(current + inc);
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
        observer.unobserve(counter);
      }
    });
  };
  
  const counterObserver = new IntersectionObserver(animateCounters, {
    threshold: 0.5
  });
  
  counters.forEach(counter => {
    counterObserver.observe(counter);
  });