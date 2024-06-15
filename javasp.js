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

  function toggleMenu(e) {
    e.classList.toggle("active");
    document.querySelector("aside").classList.toggle("active");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.querySelector("h4").addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
});
