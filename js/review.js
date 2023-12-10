//Fetch data menu from API Endpoint
const BASE_API_URL = "https://be-2-surabaya-23-production.up.railway.app";
async function fetchReview() {
  try {
    const response = await fetch(`${BASE_API_URL}/review`);
    const data = await response.json();
    renderReview(data);
  } catch (error) {
    console.log(error);
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
