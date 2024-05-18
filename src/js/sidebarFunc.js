function showSideBar() {
  const sidebar = document.querySelector(".sidebar");
  const navbars = document.querySelector(".fa-bars");
  const navxmark = document.querySelector(".fa-xmark");

  navbars.style.display = "none";
  navxmark.style.display = "flex";
  sidebar.style.display = "flex";
}

function hideSideBar() {
  const sidebar = document.querySelector(".sidebar");
  const navbars = document.querySelector(".fa-bars");
  const navxmark = document.querySelector(".fa-xmark");

  navbars.style.display = "flex";
  navxmark.style.display = "none";
  sidebar.style.display = "none";
}
