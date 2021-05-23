import animationStates from "./animationStates.js";

export let currentMovement = "sit";

const select = document.querySelector("select");
animationStates.map(({ name }) => {
  const option = document.createElement("option");
  option.value = name;
  option.innerText = name.slice(0, 1).toUpperCase() + name.slice(1);

  select.appendChild(option);
});

select.value = currentMovement;
select.addEventListener("change", (e) => (currentMovement = e.target.value));
