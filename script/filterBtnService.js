const filterButtons = document.querySelectorAll(".filterButtons .filter-btn");
const filtterableServivces = document.querySelectorAll(
  ".subServicesSection .sevicesBox"
);

const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filtterableServivces.forEach((service) => {
    service.classList.add("hide");

    //Hide remove when data-name matches
    if (
      service.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      service.classList.remove("hide");
    }
  });
};

filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);
