// Optional: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  //  image testimonial change
  const items = document.querySelectorAll(".testi");
  let currentIndex = 0;
  function showItem(index) {
    items[currentIndex].classList.remove("active");
    currentIndex = (index + items.length) % items.length;
    items[currentIndex].classList.add("active");
  }
  function nextItem() {
    showItem(currentIndex + 1);
  }
  function prevItem() {
    showItem(currentIndex - 1);
  }
  document.getElementById("next-arrow").addEventListener("click", nextItem);
  document.getElementById("prev-arrow").addEventListener("click", prevItem);
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextItem();
    if (e.key === "ArrowLeft") prevItem();
  });
  setInterval(nextItem, 10000); // Change text every 10 seconds
  
  
  //  image collection change
  const items2 = document.querySelectorAll(".collec");
  let currentIndex2 = 0;
  function showItem2(index) {
    items2[currentIndex2].classList.remove("active2");
    currentIndex2 = (index + items2.length) % items2.length;
    items2[currentIndex2].classList.add("active2");
  }
  function nextItem2() {
    showItem2(currentIndex2 + 1);
  }
  function prevItem2() {
    showItem2(currentIndex2 - 1);
  }
  document.getElementById("next-arrow2").addEventListener("click", nextItem2);
  document.getElementById("prev-arrow2").addEventListener("click", prevItem2);
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextItem2();
    if (e.key === "ArrowLeft") prevItem2();
  });
  setInterval(nextItem2, 10000); // Change text every 10 seconds
  
  
  
  //  house collection change
  const items3 = document.querySelectorAll(".pro");
  let currentIndex3 = 0;
  function showItem3(index) {
    items3[currentIndex3].classList.remove("active3");
    currentIndex3 = (index + items3.length) % items3.length;
    items3[currentIndex3].classList.add("active3");
  }
  function nextItem3() {
    showItem3(currentIndex3 + 1);
  }
  function prevItem3() {
    showItem3(currentIndex3 - 1);
  }
  document.getElementById("next-arrow3").addEventListener("click", nextItem3);
  document.getElementById("prev-arrow3").addEventListener("click", prevItem3);
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextItem3();
    if (e.key === "ArrowLeft") prevItem3();
  });
  setInterval(nextItem3, 10000); // Change text every 10 seconds
  
  
  //  car collection change
  const items4 = document.querySelectorAll(".vehi");
  let currentIndex4 = 0;
  function showItem4(index) {
    items4[currentIndex4].classList.remove("active4");
    currentIndex4 = (index + items4.length) % items4.length;
    items4[currentIndex4].classList.add("active4");
  }
  function nextItem4() {
    showItem4(currentIndex4 + 1);
  }
  function prevItem4() {
    showItem4(currentIndex4 - 1);
  }
  document.getElementById("next-arrow4").addEventListener("click", nextItem4);
  document.getElementById("prev-arrow4").addEventListener("click", prevItem4);
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextItem4();
    if (e.key === "ArrowLeft") prevItem4();
  });
  setInterval(nextItem4, 10000); // Change text every 10 seconds
  
  //  jewels collection change
  const items5 = document.querySelectorAll(".jew");
  let currentIndex5 = 0;
  function showItem5(index) {
    items5[currentIndex5].classList.remove("active5");
    currentIndex5 = (index + items5.length) % items5.length;
    items5[currentIndex5].classList.add("active5");
  }
  function nextItem5() {
    showItem5(currentIndex5 + 1);
  }
  function prevItem5() {
    showItem5(currentIndex5 - 1);
  }
  document.getElementById("next-arrow5").addEventListener("click", nextItem5);
  document.getElementById("prev-arrow5").addEventListener("click", prevItem5);
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextItem5();
    if (e.key === "ArrowLeft") prevItem5();
  });
  setInterval(nextItem5, 10000); // Change text every 10 seconds
  
  
  //  jewels collection change
  const items6 = document.querySelectorAll(".multi");
  let currentIndex6 = 0;
  function showItem6(index) {
    items6[currentIndex6].classList.remove("active6");
    currentIndex6 = (index + items6.length) % items6.length;
    items6[currentIndex6].classList.add("active6");
  }
  function nextItem6() {
    showItem6(currentIndex6 + 1);
  }
  function prevItem6() {
    showItem6(currentIndex6 - 1);
  }
  document.getElementById("next-arrow6").addEventListener("click", nextItem6);
  document.getElementById("prev-arrow6").addEventListener("click", prevItem6);
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextItem6();
    if (e.key === "ArrowLeft") prevItem6();
  });
  setInterval(nextItem6, 10000); // Change text every 10 seconds
  function showSidebar(){
  const sidebar = document.querySelector(".side-bar")
  sidebar.style.display = 'flex'
  }
  
  function closeMenu(){
    const sidebar = document.querySelector(".side-bar")
  sidebar.style.display = 'none'
  }
  
  
  
  
  
  // function toggleMenu() {
  //   const navLinks = document.querySelector('.nav-bar');  // Select the nav-bar element
  //   if (navLinks.classList.contains('active')) {
  //     navLinks.classList.toggle('inactive');  // Add or remove 'inactive' class
  //     navLinks.classList.remove('active');  // Ensure 'active' class is removed
  //   } else {
  //     navLinks.classList.toggle('active');  // Add or remove 'active' class
  //     navLinks.classList.remove('inactive');  // Ensure 'inactive' class is removed
  //   }
  // }
  