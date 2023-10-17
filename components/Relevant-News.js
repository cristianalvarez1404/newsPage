export const RelevantNews = () => {
  const $relevantNews = document.createElement("section");
  $relevantNews.classList.add("relevant-news");
  $relevantNews.innerHTML = `
     <div class="relevent-news-images">
            <div class="relevent-news-image">
              <img
                src="${`https://cnnespanol.cnn.com/wp-content/uploads/2023/10/Gaza-lunes-2.jpg?quality=100&strip=info&w=460&h=260&crop=1`}"
                alt=""
              />
              <img
                src="${`https://cnnespanol.cnn.com/wp-content/uploads/2023/10/Gaza-lunes-2.jpg?quality=100&strip=info&w=460&h=260&crop=1`}"
                alt=""
              />
            </div>
            <div class="relevent-news-image">
              <img
                src="${`https://cnnespanol.cnn.com/wp-content/uploads/2023/10/Gaza-lunes-2.jpg?quality=100&strip=info&w=460&h=260&crop=1`}"
                alt=""
              />
            </div>
            <div class="relevent-news-image">
              <img
                src="${`https://cnnespanol.cnn.com/wp-content/uploads/2023/10/Gaza-lunes-2.jpg?quality=100&strip=info&w=460&h=260&crop=1`}"
                alt=""
              />
              <img
                src="${`https://cnnespanol.cnn.com/wp-content/uploads/2023/10/Gaza-lunes-2.jpg?quality=100&strip=info&w=460&h=260&crop=1`}"
                alt=""
              />
            </div>
          </div>
          <div class="relevant-news-info">
            <h2 class="relevant-news-title">
              Crisis humanitaria en Gaza se agrava: 500.000 personas huyen hacia
              el sur
            </h2>
            <p>
              La preocupación aumenta a medida de que Gaza sufre escasez de
              alimentos, agua y medicinas. Un equipo de la ONU espera en el lado
              egipcio del paso fronterizo de Rafah luz verde para entregar
              ayuda.
            </p>
          </div>
  `;

  return $relevantNews;
};
