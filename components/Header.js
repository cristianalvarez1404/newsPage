export const Header = (data) => {
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.innerHTML = `
      <div class="header-container">
          <a href="/" class="icon">Now</a>
          <nav>
            <a href="index.html/#politica">Política</a>
            <a href="index.html/#economia">Economía</a>
            <a href="index.html/#deportes">Deportes</a>
            <a href="index.html/#tecnologia">Tecnología</a>
            <a href="index.html/#salud">Salud</a>
          </nav>
          <nav>
            <a href="/"
              ><i class="fa-solid fa-magnifying-glass"></i
            ></a>
            <a href="/#login"><i class="fa-solid fa-user"></i></a>
          </nav>
        </div>
  `;
  return $header;
};
