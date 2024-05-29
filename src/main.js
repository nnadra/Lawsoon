//Mobile nav
const mobileNav = document.querySelector('.mnav');
const closebtn = document.querySelector('.mnav__close-btn');
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';


closebtn.addEventListener('click', ()=> {
    mobileNav.classList.toggle(navOpenedClass);
    mobileNav.classList.toggle(navClosedClass);

    closeBtnIcon.classList.toggle(arrowLeftClass);
    closeBtnIcon.classList.toggle(arrowRightClass);
})

//swiper
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickkabel: true
    },
  
  });

  //FAQ
  const faqItems = document.querySelectorAll('.faq_item');

  faqItems.forEach((item) => {
    const faqBtn = item.querySelector('.faq__btn');


    item.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
      const iconElement = faqBtn.querySelector('i');
      iconElement.classList = `${iconClass} text-2xl`;
    });
});