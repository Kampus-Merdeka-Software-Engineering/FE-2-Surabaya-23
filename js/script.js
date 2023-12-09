//toggel class active
const navbarNav = document.querySelector('.navbar-list');
const hamburger = document.querySelector('#hamburger-menu');

//Ketika hamburger menu di klik
hamburger.addEventListener('click', function () {
  navbarNav.classList.toggle('active');
});

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// Review Star
const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})
// end Review Star

//Fetch data from API Endpoint
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



