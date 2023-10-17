export const Category = () => {
  const $category = document.createElement("figure");
  $category.classList.add("category");
  $category.innerHTML = `
    <img
              src="https://cnnespanol.cnn.com/wp-content/uploads/2023/10/chinches1.jpg?quality=100&strip=info&w=780&h=438&crop=1"
              alt=""
            />
            <h3>
              Lo que necesitas saber sobre el pánico a las chinches en Europa
            </h3>
            <figcaption>
              Según algunos entomólogos y viajeros, la realidad tiene un
              figcaptionoco más de matices: si bien las chinches, por supuesto,
              existen (y es muy posible que estén resurgiendo en centros
              turísticos como París después de otro verano de viajes de gran
              éxito), la situación real,
            </figcaption>
            <div class="category-title">
              <h2>Sports</h2>
            </div>
  `;
  return $category;
};
