export const Footer = () => {
  const $footer = document.createElement("footer");
  $footer.classList.add("footer");
  $footer.innerHTML = `
    <div class="footer-categories-list">
          <a href="/">Sports</a>
          <a href="/">Sports</a>
          <a href="/">Sports</a>
          <a href="/">Culture</a>
          <a href="/">Culture</a>
          <a href="/">Politic</a>
          <a href="/">Tech</a>
          <a href="/">Tech</a>
          <a href="/">Tech</a>
        </div>
        <hr />
        <div class="social-media">
          <div>
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div>
            <i class="fa-brands fa-x-twitter"></i>
          </div>
          <div>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div>
            <i class="fa-brands fa-tiktok"></i>
          </div>
        </div>
        <hr />
        <div class="copyrigth">© Now, Inc. All rights reserved.</div>
  
  `;
  return $footer;
};
