document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ với chúng tôi!");
    this.reset();
  });
});
