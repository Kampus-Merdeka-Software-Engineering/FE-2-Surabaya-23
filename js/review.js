const BASE_API_URL = "https://be-2-surabaya-23-production.up.railway.app";
// const BASE_API_URL = "http://localhost:3000";

// Review Star
const allStar = document.querySelectorAll(".rating .star");
const ratingValue = document.querySelector(".rating input");
let selectedRating = 0;

function clearRating() {
  selectedRating = 0;

  allStar.forEach((item) => {
    item.classList.replace("bxs-star", "bx-star");
    item.classList.remove("active");
  });

  ratingValue.value = "";
}

allStar.forEach((item, idx) => {
  item.addEventListener("click", function () {
    let click = 0;
    ratingValue.value = idx + 1;

    // Set the global variable with the selected rating
    selectedRating = idx + 1;

    allStar.forEach((i) => {
      i.classList.replace("bxs-star", "bx-star");
      i.classList.remove("active");
    });
    for (let i = 0; i < allStar.length; i++) {
      if (i <= idx) {
        allStar[i].classList.replace("bx-star", "bxs-star");
        allStar[i].classList.add("active");
      } else {
        allStar[i].style.setProperty("--i", click);
        click++;
      }
    }
  });
});

async function fetchTitleMenu() {
  const type = document.getElementById("type").value;
  const menuName = document.getElementById("menuName");
  // Membersihkan opsi sebelum menambahkan yang baru
  menuName.innerHTML = "";
  try {
    const response = await fetch(`${BASE_API_URL}/menu?type=${type}`);
    const data = await response.json();
    data.forEach((title) => {
      const option = document.createElement("option");
      option.value = title.id;
      option.text = title.menuName;
      menuName.appendChild(option);
    });
  } catch (err) {
    console.error(err);
  }
}

async function addReview() {
  const menuId = document.getElementById("menuName").value;
  const personName = document.getElementById("personName").value;
  const personReview = document.getElementById("personReview").value;

  // Validation
  if (
    menuId === "" ||
    personName === "" ||
    personReview === "" ||
    selectedRating === 0
  ) {
    Swal.fire({
      title: "Error",
      text: "Please fill in all required fields",
      icon: "error",
    });
    return; // Exit the function if validation fails
  }

  try {
    await fetch(`${BASE_API_URL}/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        personName,
        personReview,
        rating: selectedRating,
        menuId,
      }),
    });

    document.getElementById("menuName").value = "";
    document.getElementById("personName").value = "";
    document.getElementById("personReview").value = "";
    clearRating();

    Swal.fire({
      title: "Review Created",
      text: "Review has been successfully created",
      icon: "success",
    });
  } catch (err) {
    throw new Error("Failed to fetch data");
  } finally {
    fetchReview();
  }
}

//Fetch data menu from API Endpoint
async function fetchReview() {
  try {
    const divisiContent = document.getElementById("review");
    divisiContent.innerHTML = "<h3>Loading...</h3>";
    const response = await fetch(`${BASE_API_URL}/review`);
    const data = await response.json();
    renderReview(data);
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

function renderReview(data) {
  const divisiContent = document.getElementById("review");
  const reviewContent = data.map((review) => {
    return `
      <div class="testimonial-box">
      <div class="box-top">
        <div class="profile">
          <div class="name-user">
            <strong>${review.personName}</strong>
            <span>${review.menu.menuName}</span>
          </div>
        </div>
        <!--reviews------>
        <div class="reviews">
          <i class="fas fa-star"></i>
          <i>${review.rating}</i>
        </div>
      </div>
      <div class="client-comment">
        <p>
          ${review.personReview}
        </p>
      </div>
    </div>
      `;
  });

  divisiContent.innerHTML = reviewContent.join("");
}

fetchReview();
