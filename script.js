// Department wise email criteria
const departmentCriteria = {
    DS: "csds",
    CSE: "cse",
    IT: "it",
    ECE: "ece",
    ME: "me",
    CE: "ce"
};


// Feedback form
const feedbackForm = document.getElementById("feedbackForm");


// Submit Feedback
feedbackForm.addEventListener("submit", function (event) {

    // Page reload rokna
    event.preventDefault();

    // Get values
    const department = document.getElementById("department").value;
    const facultyEmail = document.getElementById("facultyEmail").value
        .trim()
        .toLowerCase();

    const name = document.getElementById("name").value.trim();
    const course = document.getElementById("course").value.trim();
    const feedback = document.getElementById("feedback").value.trim();

    const verificationMessage =
        document.getElementById("verificationMessage");

    const result =
        document.getElementById("result");


    // Check department
    if (!department) {

        verificationMessage.textContent =
            "❌ Please select a department.";

        verificationMessage.style.color = "red";

        return;
    }


    // Check email
    if (!facultyEmail) {

        verificationMessage.textContent =
            "❌ Please enter faculty official email.";

        verificationMessage.style.color = "red";

        return;
    }


    // Required email keyword
    const requiredKeyword = departmentCriteria[department];


    // Department email validation
    if (!facultyEmail.includes(requiredKeyword)) {

        verificationMessage.textContent =
            "❌ Email does not match the selected department.";

        verificationMessage.style.color = "red";

        result.innerHTML = "";

        return;
    }


    // If everything is correct
    verificationMessage.textContent =
        "✅ Student email verified successfully.";

    verificationMessage.style.color = "green";


    // Display submitted feedback
    result.innerHTML = `
        <h2>Submitted Feedback</h2>

        <p><strong>Department:</strong> ${department}</p>

        <p><strong>Faculty Email:</strong> ${facultyEmail}</p>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Course:</strong> ${course}</p>

        <p><strong>Feedback:</strong> ${feedback}</p>
    `;


    // Clear form
    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
    document.getElementById("feedback").value = "";

});