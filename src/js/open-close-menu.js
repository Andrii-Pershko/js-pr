const refs = {
    menu: document.querySelector('.menu-thumb'),
    menuOpen: document.querySelector('.menu-open'),
    menuBefore: document.querySelector('.menu-open::after'),
    menuAfter: document.querySelector('.menu-open::after'),
    modal: document.querySelector('.modal-mobile-menu'),
    body: document.querySelector('body'),
    search: document.querySelector('.search-thumb'),
    searchForm: document.querySelector('.search-form'),
    openFieldSearch: document.querySelector('.js-icon-open-field')

}

refs.menu.addEventListener('click', onClickMenu);

function onClickMenu() {
    const { menuOpen, modal, body, search } = refs;
    menuOpen.classList.toggle('active-menu');
    modal.classList.toggle('is-hidden');
    search.classList.toggle('is-hidden');
    body.style.overflow = 'hidden';
    body.style.pointerEvents = 'none'
};

refs.openFieldSearch.addEventListener('click', onSearchClick);

function onSearchClick() {
    refs.searchForm.classList.toggle('shhafle-thumb');

    console.log('i here');
}

