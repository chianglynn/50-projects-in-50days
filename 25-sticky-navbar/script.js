const nav = document.querySelector('.nav');

// Solution 1
// function fixNav() {
//     return window.scrollY > nav.offsetHeight + 150 ? nav.classList.add('active') : nav.classList.remove('active');
// }

// window.addEventListener('scroll', fixNav);

// Solution 2
const header = document.querySelector('.hero');
const navHeight = nav.getBoundingClientRect().height;
const fixNav = entries => {
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add('active');
    else nav.classList.remove('active');
};
const headerObserver = new IntersectionObserver(fixNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);