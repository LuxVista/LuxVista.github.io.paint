// Scroll reveal
function reveal() {
  const reveals = document.querySelectorAll(".timeline-item");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal(); // initial check

// ========== Create floating hearts & winds ==========
function createFloating(num) {
  for (let i = 0; i < num; i++) {
    // สร้างหัวใจ
    const heart = document.createElement('div');
    heart.classList.add('floating', 'heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.width = 10 + Math.random() * 20 + 'px';
    heart.style.height = heart.style.width;
    heart.style.animationDuration = 5 + Math.random() * 5 + 's';
    document.body.appendChild(heart);

    // สร้างลม
    const wind = document.createElement('div');
    wind.classList.add('floating', 'wind');
    wind.style.top = Math.random() * window.innerHeight + 'px';
    wind.style.animationDuration = 4 + Math.random() * 6 + 's';
    document.body.appendChild(wind);
  }
}

// เรียกฟังก์ชันสร้างเอฟเฟกต์
createFloating(20);
