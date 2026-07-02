/*==================== THEME TOGGLE ====================*/
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("theme-button");
  const stored = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  const apply = (theme) => root.setAttribute("data-theme", theme);
  apply(stored || (prefersLight ? "light" : "dark"));

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    apply(next);
    localStorage.setItem("theme", next);
  });
})();

/*==================== HEADER SHADOW ON SCROLL ====================*/
(function () {
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/*==================== MOBILE MENU: close on link click ====================*/
(function () {
  const toggle = document.getElementById("nav-toggle");
  document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.checked = false;
    });
  });
})();

/*==================== SCROLL REVEAL ====================*/
(function () {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => io.observe(el));
})();

/*==================== ACTIVE NAV LINK ====================*/
(function () {
  const sections = document.querySelectorAll("section[id]");
  const links = new Map();
  document.querySelectorAll(".nav__link").forEach((l) => {
    links.set(l.getAttribute("href").slice(1), l);
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.classList.remove("active"));
        const active = links.get(entry.target.id);
        if (active) active.classList.add("active");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => io.observe(s));
})();

/*==================== FOOTER YEAR ====================*/
document.getElementById("year").textContent = new Date().getFullYear();
