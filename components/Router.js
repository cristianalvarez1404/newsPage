import { fetchApi } from "../helpers/fetch_api.js";
import { PrimaryNews } from "./Primary-News.js";
import { RelevantNews } from "./Relevant-News.js";

export const Router = async () => {
  console.log(window.location);
  if (location.hash.includes("#/") || !location.hash) {
    const $main = document.querySelector("main");

    await fetchApi(
      "http://css-tricks.com/wp-json/wp/v2/posts?_embed&per_page=20",
      (json) => {
        const data = json[0];
        console.log(data);
        let { title, content, _embedded } = data;
        const $relevantNews = document.querySelector(".relevant-news");
        const $singleNewRandom = document.querySelector(".random-news.flex");
        const $mainNewFlex = document.querySelector(".main-news.flex");
        const $otherNews = document.querySelector(".other-news.flex");
        const $relevantNews2 = document.querySelectorAll(".relevant-news")[1];
        const $categories = document.querySelector(".categories");
        const $otherRandomNews = document.querySelector(
          ".another-random-news.flex"
        );

        $relevantNews.innerHTML = null;
        $singleNewRandom.innerHTML = null;
        $mainNewFlex.innerHTML = null;
        $otherNews.innerHTML = null;
        $otherRandomNews.innerHTML = null;
        $categories.innerHTML = null;

        $relevantNews.innerHTML = `
          <div class="relevent-news-images">
            <div class="relevent-news-image">
              <img
                src="${`${json[0]._embedded["wp:featuredmedia"][0].source_url}`}"
                alt=""
              />
              <img
                src="${`${json[1]._embedded["wp:featuredmedia"][0].source_url}`}"
                alt=""
              />
            </div>
            <div class="relevent-news-image">
              <img
               src="${`${json[2]._embedded["wp:featuredmedia"][0].source_url}`}"
                alt=""
              />
            </div>
            <div class="relevent-news-image">
              <img
                src="${`${json[3]._embedded["wp:featuredmedia"][0].source_url}`}"
                alt=""
              />
              <img
                src="${`${json[4]._embedded["wp:featuredmedia"][0].source_url}`}"
                alt=""
              />
              <img
                src="${`${json[5]._embedded["wp:featuredmedia"][0].source_url}`}"
                alt=""
              />
            </div>
          </div>
          <div class="relevant-news-info">
            <h2 class="relevant-news-title">${title.rendered}</h2>
            <p>${content.rendered.slice(0, 800)}...</p>
          </div>
        
        
        `;

        json.slice(0, 3).forEach((el) => {
          let { title, content, _embedded, date } = el;
          $singleNewRandom.innerHTML += `
             <article class="single-news random">
              <div class="random-news-img">
                <img
                  src="${`${_embedded["wp:featuredmedia"][0].source_url}`}"
                  alt=""
                />
              </div>
              <div class="random-news-info">
                <h3>${title.rendered}</h3>
                <div>
                  <a href="/"><i class="fa-solid fa-share-nodes"></i></a>
                  <span>${new Date(date).toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          `;
        });

        json.slice(0, 8).forEach((el) => {
          let { title, content, _embedded, date } = el;

          $mainNewFlex.innerHTML += `
             <article class="single-news main-news">
              <div class="random-news-img">
                <img
                  src="${`${_embedded["wp:featuredmedia"][0].source_url}`}"
                  alt=""
                />
              </div>
              <div class="random-news-info">
                <h3>${title.rendered}</h3>
                <div>
                  <a href="/"><i class="fa-solid fa-share-nodes"></i></a>
                  <span>${new Date(date).toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          `;
        });

        json.slice(0, 8).forEach((el) => {
          let { title, content, _embedded, date } = el;

          $otherNews.innerHTML += `
             <article class="single-news other-news">
              <div class="random-news-img">
                <img
                  src="${_embedded["wp:featuredmedia"][0].source_url}"
                  alt=""
                />
              </div>
              <div class="random-news-info">
                <h3>${title.rendered}</h3>
                <div>
                  <a href="/"><i class="fa-solid fa-share-nodes"></i></a>

                  <span>${new Date(date).toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          `;
        });

        json.slice(0, 3).forEach((el) => {
          let { title, content, _embedded, date } = el;
          $otherRandomNews.innerHTML += `
             <article class="single-news random">
              <div class="random-news-img">
                <img
                  src="${`${_embedded["wp:featuredmedia"][0].source_url}`}"
                  alt=""
                />
              </div>
              <div class="random-news-info">
                <h3>${title.rendered}</h3>
                <div>
                  <a href="/"><i class="fa-solid fa-share-nodes"></i></a>
                  <span>${new Date(date).toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          `;
        });

        $relevantNews2.innerHTML = `
          <div class="relevent-news-images">
            <div class="relevent-news-image">
              <img
                src="${`${json[6]._embedded["wp:featuredmedia"][0].source_url}`}"
                alt=""
              />
              <img
                src="${`${json[17]._embedded["wp:featuredmedia"][0].source_url}`}"
                alt=""
              />
            </div>
            <div class="relevent-news-image">
              <img
               src="${`${json[15]._embedded["wp:featuredmedia"][0].source_url}`}"
                alt=""
              />
            </div>
            <div class="relevent-news-image">
              <img
                src="${`${json[9]._embedded["wp:featuredmedia"][0].source_url}`}"
                alt=""
              />
              <img
                src="${`${json[10]._embedded["wp:featuredmedia"][0].source_url}`}"
                alt=""
              />
              <img
                src="${`${json[11]._embedded["wp:featuredmedia"][0].source_url}`}"
                alt=""
              />
            </div>
          </div>
          <div class="relevant-news-info">
            <h2 class="relevant-news-title">${json[2].title.rendered}</h2>
            <p>${json[2].content.rendered.slice(0, 500)}...</p>
          </div>
        
        
        `;
        json.slice(0, 6).forEach((el) => {
          let { title, content, _embedded, date } = el;
          $categories.innerHTML += `
            <figure class="category">
            <img
              src="${`${el._embedded["wp:featuredmedia"][0].source_url}`}"
              alt=""
            />
            <h3>
              ${el.title.rendered}
            </h3>
            <figcaption>
              ${el.content.rendered.slice(0, 200)}
            </figcaption>
            <div class="category-title">
              <h2>${`${el._embedded["wp:featuredmedia"][0].type}`}</h2>
            </div>
          </figure>
          `;
        });
      }
    );
  }
};
