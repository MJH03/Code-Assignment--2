//U6899-7808
//Step 3:Implement form submission and validation

document.getElementById("feedbackForm").addEventListener("submit",(event)=>{
    event.preventDefault();

    
    const firstname = document.getElementById("firstName").value;
    const lastname = document.getElementById("lastName").value;
    const rating = document.getElementById("choice").value;
    const comments = document.getElementById("comments").value;

    
    document.getElementById("feedbackSummary").innerHTML =` 
    <h3>${firstname} ${lastname}</h3>
    <p><strong>Rating: </strong> ${rating}</p>
    <p>${comments}</p>
`
});