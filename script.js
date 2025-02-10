document.addEventListener("DOMContentLoaded", () => {
    const plusIcons = document.querySelectorAll(".plus");
    const minusIcons = document.querySelectorAll(".minus");
    const toggleDivs = document.querySelectorAll(".toggle");
    const headers = document.querySelectorAll("h2");

    function toggleContent(index) {
        const isActive = toggleDivs[index].classList.contains("active");

        if (isActive) {
            toggleDivs[index].classList.remove("active");
            toggleDivs[index].style.maxHeight = null; 
            plusIcons[index].style.display = "block";
            minusIcons[index].style.display = "none";
        } else {
            toggleDivs[index].classList.add("active");
            toggleDivs[index].style.maxHeight = toggleDivs[index].scrollHeight + "px"; // Expand
            plusIcons[index].style.display = "none";
            minusIcons[index].style.display = "block";
        }
    }

    plusIcons.forEach((plus, index) => {
        plus.addEventListener("click", (event) => {
            event.stopPropagation(); 
            console.log(`Plus icon ${index} clicked`);
            toggleContent(index);
        });
    });

    minusIcons.forEach((minus, index) => {
        minus.addEventListener("click", (event) => {
            event.stopPropagation();
            console.log(`Minus icon ${index} clicked`);
            toggleContent(index);
        });
    });

    headers.forEach((header, index) => {
        header.addEventListener("click", () => {
            console.log(`Header ${index} clicked`);
            toggleContent(index);
        });
    });
});
