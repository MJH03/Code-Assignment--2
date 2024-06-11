//U6899-7808
// Step 3:
document.getElementById("eventForm").addEventListener("submit", event=>{
event.preventDefault();

    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const date = document.getElementById("date").value
  
    const mealChoice = document.querySelectorAll(`input[name="mealChoice"]:checked`)
    
    if (!firstName || !lastName || !email || !date || mealChoice.length === 0) {
        alert("Please fill out all fields.");
        return;
    }
    const information = document.getElementById(`registrant_information`)
    const registration = document.createElement(`div`)
    
    registration.innerHTML =`
    <h3> Registration Complete!!</h3>

    APPLICANT:<br>
    <b>${firstName} ${lastName}</b><br>
    <p> <h4>Email:${email} <br> Date:${date}<h4> </p>
    <p> Meal Preference: ${Array.from(mealChoice).map(choice => choice.value).join(', ')}</p>
    `
    information.appendChild(registration)
    
    document.getElementById(`eventForm`).reset()
})