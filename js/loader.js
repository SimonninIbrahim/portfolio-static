/* ===============================
   LOADING SCREEN CONTROLLER
================================ */

document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");

    setTimeout(() => {
        if(loadingScreen){
            loadingScreen.classList.add("hidden");
        }

        window.dispatchEvent(new Event("portfolioReady"));
    }, 2200);
});