document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const courseTitle = params.get("title") || "Untitled Course";
    const instructor = params.get("instructor") || "Unknown Instructor";
    const price = params.get("price") || "0";

    document.getElementById("course-title").textContent = courseTitle;
    document.getElementById("course-instructor").textContent = instructor;
    document.getElementById("course-price").textContent = price;

    document.getElementById("purchase-form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert(`Thank you for purchasing "${courseTitle}"!`);
        window.location.href = `confirmation.html?title=${encodeURIComponent(courseTitle)}`;
    });
});
