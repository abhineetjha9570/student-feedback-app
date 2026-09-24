const form = document.getElementById("feedbackForm");
const result = document.getElementById("result");


// NIET official email validation
function isValidNietEmail(email) {
    const nietEmailPattern = /^[a-zA-Z0-9._%+-]+@niet\.co\.in$/;

    return nietEmailPattern.test(email.trim());
}


// Department specific email validation
function isValidDepartmentEmail(department, email) {

    // First check NIET official domain
    if (!isValidNietEmail(email)) {
        return false;
    }

    const emailUsername = email.split("@")[0].toLowerCase();

    // Department codes
    const departmentCodes = {
        "Data Science": "csds",
        "Computer Science": "cse",
        "Information Technology": "it",
        "ECE": "ece",
        "Mechanical": "me"
    };

    const requiredCode = departmentCodes[department];

    if (!requiredCode) {
        return false;
    }

    return emailUsername.includes(requiredCode);
}


form.addEventListener("submit", function(event) {

    event.preventDefault();

    const department = document.getElementById("department").value;
    const facultyEmail = document.getElementById("facultyEmail").value.trim();
    const name = document.getElementById("name").value.trim();
    const course = document.getElementById("course").value.trim();
    const feedback = document.getElementById("feedback").value.trim();


    // Check department
    if (!department) {
        result.innerHTML = "❌ Please select your department.";
        return;
    }


    // Check NIET email
    if (!isValidNietEmail(facultyEmail)) {
        result.innerHTML =
            "❌ Please enter a valid NIET official email ending with @niet.co.in";
        return;
    }


    // Check department email
    if (!isValidDepartmentEmail(department, facultyEmail)) {

        result.innerHTML =
            `❌ Email does not match the selected ${department} department.`;

        return;
    }


    // Check other fields
    if (!name || !course || !feedback) {
        result.innerHTML = "❌ Please fill all fields.";
        return;
    }


    // Successful submission
    result.innerHTML = `
        <h2>Submitted Feedback</h2>

        <p><strong>Department:</strong> ${department}</p>

        <p><strong>Faculty Email:</strong> ${facultyEmail}</p>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Course:</strong> ${course}</p>

        <p><strong>Feedback:</strong> ${feedback}</p>

        <p style="color: green;">
            ✅ Feedback submitted successfully!
        </p>
    `;

    form.reset();
});