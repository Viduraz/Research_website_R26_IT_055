(() => {
    document.documentElement.classList.add('js');

    const header = document.querySelector('.site-header');
    if (header) {
        const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    const auto = '.section .section-head, .section .card, .timeline-item, .arch-block, .step, .table-wrap, .callout';
    document.querySelectorAll(auto).forEach(el => { if (!el.closest('.h-reveal')) el.classList.add('reveal'); });

    const items = document.querySelectorAll('.reveal, .h-reveal');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
        items.forEach(el => el.classList.add('is-visible'));
        return;
    }
    const io = new IntersectionObserver(entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    }), { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => io.observe(el));
})();
