const e={menu:document.querySelector(".menu-thumb"),menuOpen:document.querySelector(".menu-open"),menuBefore:document.querySelector(".menu-open::after"),menuAfter:document.querySelector(".menu-open::after"),modal:document.querySelector(".modal-mobile-menu"),body:document.querySelector("body"),search:document.querySelector(".search-thumb"),searchForm:document.querySelector(".search-form"),openFieldSearch:document.querySelector(".js-icon-open-field")};e.menu.addEventListener("click",(function(){const{menuOpen:o,modal:n,body:t,search:c}=e;o.classList.toggle("active-menu"),n.classList.toggle("is-hidden"),c.classList.toggle("is-hidden"),t.style.overflow="hidden"})),e.openFieldSearch.addEventListener("click",(function(){e.searchForm.classList.toggle("shhafle-thumb"),console.log("i here")}));
//# sourceMappingURL=favorite.d99ca56a.js.map