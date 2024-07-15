document.addEventListener("DOMContentLoaded", () => {
  // Link Button Event
  const button = document.getElementById("openLinkButton");
  button.addEventListener("click", () => {
    const url = "https://www.fylehq.com/";
    window.open(url, "_blank");
  });

  // Project List Click Event
  const projectList = document.querySelectorAll(".flxCol");
  const projectImage = document.getElementById("imgproject");

  projectList.forEach((project) => {
    projectImage.style.backgroundImage = "url('./Images/fruit.jpg')";
    project.addEventListener("click", function () {
      projectList.forEach((p) => p.classList.remove("selected"));
      this.classList.add("selected");

      const projectId = this.id;
      let newImage;

      switch (projectId) {
        case "Gerderless_Kie_Japans_Hot_1":
          newImage = "url('./Images/fruit.jpg')";
          break;
        case "Better_Strategy_and_Quality":
          newImage = "url('./Images/image.png')";
          break;
        case "Gerderless_Kie_Japans_Hot_2":
          newImage = "url('./Images/flower.jpg')";
          break;
      }
      projectImage.style.backgroundImage = newImage;
    });
  });

  // Contact Form Events
  const contactButton = document.getElementById("contactUs");
  const contactForm = document.getElementById("popupForm");
  const closeButton = document.getElementById("closeButton");

  contactButton.addEventListener("click", () => {
    contactForm.style.display = "flex";
  });

  closeButton.addEventListener("click", () => {
    contactForm.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === contactForm) {
      contactForm.style.display = "none";
    }
  });

  // Input Fields Events
  const inputFields = document.querySelectorAll(
    'input[type="text"], input[type="email"]'
  );
  inputFields.forEach((input) => {
    const label = input.parentElement.querySelector("label");
    if (label) {
      input.addEventListener("input", () => {
        label.style.visibility =
          input.value.trim() !== "" ? "visible" : "hidden";
      });
    }
  });

  let currentSlideIndex = 0;
  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");

  function currentSlide(index) {
    currentSlideIndex = index;
    const slideWidth = document.querySelector(".slide").offsetWidth;
    slides.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentSlideIndex].classList.add("active");
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => currentSlide(index));
  });
});
