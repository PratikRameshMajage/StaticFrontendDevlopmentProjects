// 1. smooth Scrolling
// 2. gsap
// 3. scrolltrigger   


import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});