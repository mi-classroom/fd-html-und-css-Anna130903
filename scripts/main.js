/* Menu
############################################################################ */
const menuOpenButton = document.querySelector('[data-js-main-menu-open]');
const menuOverlay = document.querySelector('[data-js-main-menu-target]');
const menuCloseButton = document.querySelector('[data-js-main-menu-close]');

menuOpenButton.addEventListener('click', function() {
  menuOverlay.classList.add('is-active');
});

menuCloseButton.addEventListener('click', function() {
  menuOverlay.classList.remove('is-active');
});



/* On Page Navigation
############################################################################ */

const sectionHeadlines = document.querySelectorAll("[data-js-page-navigation-content] > section > h2");
const pageNavigation = document.querySelector('[data-js-page-navigation-menu]');

sectionHeadlines.forEach(function (headline) {

  const sectionID = headline.innerText.toLowerCase().replaceAll(' ', '-');
  const pageNavigationItem = document.createElement('li');

  const pageNavigationAnchor = document.createElement('a');
  pageNavigationAnchor.innerText = headline.innerText;
  pageNavigationAnchor.setAttribute('href', '#' + sectionID);

  pageNavigationItem.appendChild(pageNavigationAnchor);

  pageNavigation.appendChild(pageNavigationItem);

  headline.parentElement.setAttribute('id', sectionID);

});


/*Search
############################################################################### */


