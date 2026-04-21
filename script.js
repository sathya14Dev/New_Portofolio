// ========== MOBILE MENU ==========
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerBtn = document.getElementById("hamburger-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const hamburgerIcon = document.getElementById("hamburger-icon");

// Fungsi buka menu
const openMobileMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.style.maxHeight = "500px";

  if (hamburgerIcon) {
    hamburgerIcon.className =
      "fa-solid fa-xmark text-2xl text-gray-800 dark:text-white";
  }
};

// Fungsi tutup menu
const closeMobileMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.style.maxHeight = null;

  if (hamburgerIcon) {
    hamburgerIcon.className = "fa-solid fa-bars text-2xl text-gray-800 dark:text-white";
  }
};

// Toggle: jika menu terbuka -> tutup, jika tertutup -> buka
const toggleMobileMenu = () => {
  if (!mobileMenu) return;
  
  // Cek apakah menu sedang terbuka
  const isOpen = mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== "0px" && mobileMenu.style.maxHeight !== null;
  
  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
};


// Event untuk hamburger button (toggle buka/tutup)
if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", toggleMobileMenu);
}

// Tutup menu saat klik link
document.querySelectorAll("[data-mobile-nav]").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

// Tutup menu saat resize ke desktop
window.addEventListener("resize", function() {
  if (window.innerWidth >= 768) {
    closeMobileMenu();
  }
});

// ========== DARK MODE ==========
const html = document.documentElement;

let isDark = localStorage.getItem("darkMode") === "enabled";
html.classList.toggle("dark", isDark);

document.querySelectorAll("#theme-icon").forEach((icon) => {
  icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
});

document.querySelectorAll("#theme-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    isDark = !isDark;
    html.classList.toggle("dark", isDark);
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");

    document.querySelectorAll("#theme-icon").forEach((icon) => {
      icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    });
  });
});

// ========== SCROLL TO TOP BUTTON ==========
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollTopBtn.classList.remove("hidden");
    } else {
      scrollTopBtn.classList.add("hidden");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}