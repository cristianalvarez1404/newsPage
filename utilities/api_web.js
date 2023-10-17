const NAME = "css-tricks";
const DOMAIN = `http://${NAME}.com`;
const SITE = `${DOMAIN}/wp-json`;
const API_WE = `${SITE}/wp/v2`;
const PER_PAGE = 9;
const POSTS = `${API_WE}/posts?_embed&per_page=${PER_PAGE}`;
const POST = `${API_WE}/posts`;
const SEARCH = `${API_WE}/search?_embed&per_page=${PER_PAGE}&search=`;

export default {
  NAME,
  DOMAIN,
  SITE,
  API_WE,
  PER_PAGE,
  POSTS,
  POST,
  SEARCH,
  page,
};
