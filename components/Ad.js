export const Ad = () => {
  const $ad = document.createElement("section");
  $ad.classList.add("ad");
  $ad.innerHTML = `
    <div class="ad-container">
            <img src="./assets/ad.jpg" alt="" />
          </div>
  `;
  return $ad;
};
