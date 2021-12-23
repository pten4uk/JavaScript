`use strict`;

let baseSection = document.querySelector('section.base');
let skillsSection = document.querySelector('section.skills');
let specializationSection = document.querySelector('section.specialization');

let skillsNav = document.querySelector('nav.skills');
let infoNav = document.querySelector('nav.info');
let specNav = document.querySelector('nav.spec');


skillsNav.addEventListener('click', () => {
    skillsNav.classList.add('selected');
    infoNav.classList.remove('selected');
    specNav.classList.remove('selected');

    baseSection.classList.remove('active');
    skillsSection.classList.add('active');
    specializationSection.classList.remove('active');
})

infoNav.addEventListener('click', () => {
    skillsNav.classList.remove('selected');
    infoNav.classList.add('selected');
    specNav.classList.remove('selected');

    baseSection.classList.add('active');
    skillsSection.classList.remove('active');
    specializationSection.classList.remove('active');
})

specNav.addEventListener('click', () => {
    skillsNav.classList.remove('selected');
    infoNav.classList.remove('selected');
    specNav.classList.add('selected');

    baseSection.classList.remove('active');
    skillsSection.classList.remove('active');
    specializationSection.classList.add('active');
})
