document.getElementById("toggleButton").addEventListener("click", function () {
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    if (page1.style.display === "block") {
        page1.style.top = "-100%";
        page2.style.top = "0";
    } else {
        page1.style.top = "0";
        page2.style.top = "100%";
    }
});