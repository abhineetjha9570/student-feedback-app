document.getElementById("feedbackForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const feedback = document.getElementById("feedback").value;

    document.getElementById("result").innerHTML = `
        <h2>Submitted Feedback</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Feedback:</strong> ${feedback}</p>
    `;

});