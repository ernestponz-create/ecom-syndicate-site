(function () {
  var yr = document.getElementById("yr"); if (yr) yr.textContent = new Date().getFullYear();
  document.querySelectorAll("[data-contact-email]").forEach(function (el) {
    var e = "ernestponz@gmail.com"; el.innerHTML = '<a href="mailto:' + e + '">' + e + "</a>";
  });
  var head = document.getElementById("head");
  var onScroll = function () { if (head) head.classList.toggle("scrolled", window.scrollY > 10); };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  var btn = document.getElementById("menuBtn"), nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open); btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }); });
  }
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add("in"); }); }
})();
