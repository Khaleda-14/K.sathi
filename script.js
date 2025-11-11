// Project image modal functionality
const projectModal = document.getElementById("projectModal");
const modalProjectImage = document.getElementById("modalProjectImage");
const projectCloseBtn = document.querySelector("#projectModal .close");

document.querySelectorAll("#projects .zoomable").forEach(img => {
  img.addEventListener("click", () => {
    projectModal.style.display = "block";
    modalProjectImage.src = img.src;
  });
});

projectCloseBtn.onclick = () => {
  projectModal.style.display = "none";
};

projectModal.onclick = (e) => {
  if (e.target === projectModal) projectModal.style.display = "none";
};

// Toggle course explanations on click
document.querySelectorAll(".course-title").forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

