const button = document.querySelector("#welcome-button");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "Hello! Your JavaScript is working.";
});
