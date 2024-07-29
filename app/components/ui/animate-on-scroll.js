// animateOnScroll.js

// Function to handle adding animation class when elements come into view
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  document.querySelectorAll('.profile').forEach(profile => {
    observer.observe(profile);
  });
});
