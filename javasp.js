document.addEventListener('DOMContentLoaded', function() {
     const faqItems = document.querySelectorAll('.faq-item h4');
     faqItems.forEach(item => {
         item.addEventListener('click', () => {
             const content = item.nextElementSibling;
             content.style.display = content.style.display === 'none' ? 'block' : 'none';
         });
     });
 });
 
 var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 3,
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 350,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination"
    }
  });
  
document.addEventListener('scroll', function () {
  const videoSection = document.querySelector('.mv-container');
  const videoElement = document.querySelector('.middle-video video');
  const rect = videoSection.getBoundingClientRect();
  const inView = rect.top < window.innerHeight && rect.bottom > 0;

  if (inView) {
    document.body.classList.add('highlighted-bg');
    videoElement.classList.add('highlighted-video');
  } else {
    document.body.classList.remove('highlighted-bg');
    videoElement.classList.remove('highlighted-video');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  function handleResize() {
    const video = document.getElementById('video');
    const videoSource = document.getElementById('videoSource');
    if (window.innerWidth <= 1024) {
      videoSource.src = './video/landscape.mp4'; 
    } else {
      videoSource.src = './video/video3.mp4';
    }
    video.load();
  }

  window.addEventListener('resize', handleResize);
  handleResize();
});

document.querySelectorAll('.faq-item h2').forEach(item => {
  item.addEventListener('click', () => {
      const parent = item.parentElement;
      const isActive = parent.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(faq => {
          faq.classList.remove('active');
      });
      if (!isActive) {
          parent.classList.add('active');
      }
  });
});