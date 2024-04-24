// Sample data for courses and features
const courses = [
    { title: "Programming Fundamentals", description: "Learn the basics of programming with our comprehensive course." },
    { title: "Data Science Essentials", description: "Master the fundamentals of data science and analytics." },
    { title: "Web Development Bootcamp", description: "Start your journey to become a web developer with our intensive bootcamp." }
];

const features = [
    "Interactive Learning Materials",
    "Personalized Learning Paths",
    "Live Tutor Support",
    "Assessment and Progress Tracking"
];

// Function to dynamically load courses
function loadCourses() {
    const coursesContainer = document.getElementById("courses");
    const loadCoursesBtn = document.getElementById("loadCoursesBtn");

    courses.forEach((course, index) => {
        const courseDiv = document.getElementById(`course${index + 1}`);
        if (courseDiv) {
            courseDiv.innerHTML = `
                <h3>${course.title}</h3>
                <p>${course.description}</p>
            `;
        }
    });

    loadCoursesBtn.style.display = "none";
}

// Function to dynamically load features
function loadFeatures() {
    const featuresContainer = document.querySelector("#features ul");

    features.forEach(feature => {
        const li = document.createElement("li");
        li.textContent = feature;
        featuresContainer.appendChild(li);
    });
}

// Event listener for load more courses button
document.getElementById("loadCoursesBtn").addEventListener("click", loadCourses);

// Load features on page load
window.addEventListener("load", loadFeatures);

