// Button Active
var header = document.getElementById("button");
var btns = header.getElementsByClassName("option-type");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
// end Button Active

//Fetch data menu from API Endpoint
const BASE_API_URL = "https://be-2-surabaya-23-production.up.railway.app";

async function fetchData() {
  try {
    const response = await fetch(`${BASE_API_URL}/menu`);
    const data = await response.json();
    const articleContent = document.getElementById("menu");

    // Initial render without filtering
    renderMenu(data);

    // Keep track of the current filter type
    let currentFilterType = "all";

    // Add event listeners to filter buttons by type
    const buttons = document.querySelectorAll(".option-type");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const type = button.id;

        // Update the current filter type
        currentFilterType = type;

        // Filter the data based on the selected type
        const filteredData =
          type === "all" ? data : data.filter((menu) => menu.type === type);
        renderMenu(filteredData);
      });
    });

    // Add event listener for the "All" button
    const allButton = document.getElementById("all");
    allButton.addEventListener("click", () => {
      currentFilterType = "all";
      renderMenu(data);
    });

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch data");
  }
}

function renderMenu(data) {
  const articleContent = document.getElementById("menu");
  const menuContent = data.map((menu) => {
    return `
      <div class="card">
        <div class="card-image">
          <img src="${menu.image}" alt="" />
        </div>
        <div class="card-desc">
          <p class="title-name"> ${menu.menuName}</p>
          <p class="menu-desc">
            ${menu.description}
          </p>
        </div>
      </div>
    `;
  });

  articleContent.innerHTML = menuContent.join("");
}

fetchData();
