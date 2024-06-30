function toggleCoursework(id) {
    var coursework = document.getElementById(id);
    if (coursework.style.display === "none" || coursework.style.display === "") {
        coursework.style.display = "block";
    } else {
        coursework.style.display = "none";
    }
}
