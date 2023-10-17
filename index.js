import { app } from "./app.js";

window.addEventListener("hashchange", () => {
  console.log(location.hash);
  if (location.hash === "#login") {
    const main = document.querySelector(".main");
    main.innerHTML = `
      <div id="login" class="modal-login">
      <div class="modal">
        <h2>Login</h2>
        <form class="login">
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="jondoe@gmail.com"
              required
            />
          </div>
          <div>
            <label for="email">Password</label>
            <input type="password" id="email" name="email" required />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
    `;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  app();
});
