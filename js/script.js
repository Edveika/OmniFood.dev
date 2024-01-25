// const h1 = document.querySelector(".heading-primary");

// console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = variableZ;
//   h1.style.backgroundColor = "red";
// });

/* Set current year */
const yearEl = document.querySelector(".year");
const currYear = new Date().getFullYear();
yearEl.textContent = currYear;

/* Mobile navigation */
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///
// Smooth scrolling
///

const links = document.querySelectorAll("a:link");

links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const href = link.getAttribute("href");

    // Scroll to top
    if (href == "#") window.scrollTo({ top: 0, behavior: "smooth" });
    else if (href != "#" && href.startsWith("#")) {
      const selectedHref = document.querySelector(href);
      selectedHref.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///
// Sticky nav
///

const sectionHero = document.querySelector(".hero-section");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting)
      document.body.classList.add("sticky");
    else 
      document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px"
  }
);

observer.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js