const departmentRules = {
    "Data Science": "csds",
    "Computer Science": "cse",
    "Information Technology": "it",
    "Electronics": "ece",
    "Mechanical": "me"
};

function isValidNietEmail(email) {
    const emailLower = email.trim().toLowerCase();

    // Only NIET official email
    if (!emailLower.endsWith("@niet.co.in")) {
        return false;
    }

    return true;
}

function isValidDepartmentEmail(email, department) {
    const emailLower = email.trim().toLowerCase();

    // First check NIET domain
    if (!isValidNietEmail(emailLower)) {
        return false;
    }

    // Department keyword
    const requiredKeyword = departmentRules[department];

    if (!requiredKeyword) {
        return false;
    }

    return emailLower.includes(requiredKeyword);
}


document.getElementById("feedbackForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const department = document.getElementById("department").value;
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const feedback = document.getElementById("feedback").value;

    // Check department
    if (department === "") {
        alert("Please select your department.");
        return;
    }

    // Check NIET + department email
    if (!isValidDepartmentEmail(email, department)) {

        alert(
            "Invalid official email!\n\n" +
            "Please use your NIET official email containing the correct department code.\n\n" +
            "Example for Data Science: student.csds@niet.co.in"
        );

        return;
    }

    // Submit feedback
    document.getElementById("result").innerHTML = `
        <h2>Submitted Feedback</h2>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Feedback:</strong> ${feedback}</p>
    `;

    document.getElementById("feedbackForm").reset();

    alert("Feedback submitted successfully!");
});