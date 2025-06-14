// The Toggle Cursor
document.addEventListener("DOMContentLoaded", function () {
    const cursorTracker = document.getElementById('cursor-tracker');
    const cursorDot = document.getElementById('cursor-dot');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        // Both move instantly to the cursor position
        cursorTracker.style.left = `${x}px`;
        cursorTracker.style.top = `${y}px`;

        cursorDot.style.left = `${x}px`;
        cursorDot.style.top = `${y}px`;
    });




    // Dark Mode Toggle
    const toggleButton = document.getElementById("darkModeToggle");
    const toggleIcon = document.getElementById("toggleIcon");
    const body = document.body;

    function enableDarkMode() {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        localStorage.setItem("darkMode", "enabled");
        toggleIcon.classList.replace("fa-moon", "fa-sun");
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem("darkMode", "disabled");
        toggleIcon.classList.replace("fa-sun", "fa-moon");
    }

    if (localStorage.getItem("darkMode") !== "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    toggleButton.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // ** Blast Effect Animation**
    const nameElement = document.getElementById("name");
    const text = nameElement.innerText;
    nameElement.innerText = ""; // Clear existing text

    [...text].forEach((letter, index) => {
        let span = document.createElement("span");
        span.innerText = letter;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.position = "relative";
        span.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100
            }px) rotate(${Math.random() * 360}deg)`;
        span.style.transition = `all 0.8s ease-out ${index * 0.05}s`;
        nameElement.appendChild(span);

        setTimeout(() => {
            span.style.opacity = "1";
            span.style.transform = "translate(0, 0) rotate(0deg)";
        }, 500);
    });

    // Fix Light Mode on Reload
    function updateLightMode() {
        if (body.classList.contains("light-mode")) {
            document.getElementById("name-container").style.color = "black";
        } else {
            document.getElementById("name-container").style.color = "white";
        }
    }

    updateLightMode();

    document.getElementById("darkModeToggle").addEventListener("click", updateLightMode);
});


//Page Loader 
window.addEventListener("load", function () {
    const l = this.document.getElementById("loader");
    const h = document.querySelector('header');
    const m = document.querySelector('main');
    setTimeout(() => {
        l.style.display = "none";
        h.style.display = "block";
        m.style.display = "block";
    }, 2000);
});

// scroll section
const sections = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2,
});

sections.forEach(section => {
    observer.observe(section);
});



// animation of full page
function createButterfly() {
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.textContent = '🧶';
  
    const topPosition = Math.random() * window.innerHeight * 0.8;
    butterfly.style.top = `${topPosition}px`;
  
    document.body.appendChild(butterfly);
  
    setTimeout(() => {
      butterfly.remove();
    }, 12000);
  }
  
  // Start the animation every 3 seconds
  setInterval(createButterfly, 10000);
  