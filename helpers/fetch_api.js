export const fetchApi = (url, cb) => {
  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      return cb(json);
    })
    .catch((error) => {
      return `<p>${error.status} : ${
        error.statusText ? error.statusText : "Error"
      }</p>`;
    });
};
