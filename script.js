const boxes = document.querySelectorAll(".box");
const totalSpan = document.getElementById("total");

const sizeOptions = ["S", "M", "L"];
const colorOptions = ["Black", "Red", "Blue"];

// Generate option selectors
function createOptions(units) {
  const details = document.createElement("div");
  const header = document.createElement("div");
  header.className = "option-header";
  header.innerHTML = `<span></span><span class="label-text">Size</span><span class="label-text">Colour</span>`;
  details.appendChild(header);

  for (let i = 1; i <= units; i++) {
    const option = document.createElement("div");
    option.className = "option";
    option.innerHTML = `
      <span>#${i}</span>
      <div class="select-wrapper">
        <select>${sizeOptions.map(opt => `<option>${opt}</option>`).join('')}</select>
        <i class="fa-solid fa-caret-down"></i>
      </div>
      <div class="select-wrapper">
        <select>${colorOptions.map(opt => `<option>${opt}</option>`).join('')}</select>
        <i class="fa-solid fa-caret-down"></i>
      </div>
    `;
    details.appendChild(option);
  }
  return details.innerHTML;
}

// Set up boxes
boxes.forEach((box) => {
  const units = parseInt(box.dataset.units) || 2; // Default to 2
  const detailsDiv = box.querySelector(".details");
  detailsDiv.innerHTML = createOptions(units);

  box.querySelector("input[type='radio']").addEventListener("change", () => {
    boxes.forEach(b => b.classList.remove("active"));
    box.classList.add("active");
    totalSpan.textContent = `$${box.dataset.price} USD`;
  });
});
