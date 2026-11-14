function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('menu-button');
    const isOpen = menu.classList.toggle('hidden') === false;

    menu.classList.toggle('flex', isOpen);
    document.getElementById('icon-open').classList.toggle('hidden', isOpen);
    document.getElementById('icon-close').classList.toggle('hidden', !isOpen);
    button.setAttribute('aria-label', isOpen ? 'close menu' : 'open menu');

    document.querySelector('nav').classList.toggle('bg-[#181715]', isOpen);

    const nav = document.querySelector('nav');
    nav.classList.toggle('bg-[#181715]/50', !isOpen);
    nav.classList.toggle('bg-transparent', isOpen);
}