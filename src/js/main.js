const btns = document.querySelectorAll('.main-button');
const firstSection = document.querySelector('.user');
const secondSection = document.querySelector('.user-document');
const thirdSection = document.querySelector('.agree');
const fourthSection = document.querySelector('.result');
const arrayS = [firstSection, secondSection, thirdSection, fourthSection];

firstSection.classList.add('active');
const clickHandler = function (e) {
  arrayS.forEach((section) => {
    section.classList.remove('active');
  });
  e.target.closest('.section__wrapper').classList.add('active');
  btns.forEach(() => {
    const parent = e.target.parentElement;
    if (
      e.target.classList.contains('main-button') &&
      !e.target.classList.contains('agree__button')
    ) {
      e.target.parentNode.classList.toggle('active');
      e.target.parentNode.classList.add('checked');
      const nextSection = e.target.parentNode.nextElementSibling;
      nextSection.classList.add('active');
    } else if (e.target.classList.contains('agree__button')) {
      for (let index = 0; index < arrayS.length; index++) {
        const element = arrayS[index];
        element.classList.toggle('hidden');
        fourthSection.classList.add('active');
      }
    } else if (parent.classList.contains('checked')) {
      parent.classList.remove('checked');
    }
  });
};
arrayS.forEach((section) => {
  section.addEventListener('click', clickHandler);
});
