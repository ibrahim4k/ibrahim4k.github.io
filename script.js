function handleSubmit() {
    // Collect all form fields
    const formData = {
        firstName: document.getElementById('firstname').value,    //required
        lastName: document.getElementById('lastname').value,       //required
        email: document.getElementById('email').value,             //required
        role: document.getElementById('role').value,              
        experience: document.getElementById('experience').value,    
        
        // Get selected work area (radio button selection)
        workArea: document.querySelector('input[name="work_area"]:checked').value,
        
        // Get all checked skills (converts checkbox selections into array)
        skills: Array.from(document.querySelectorAll('input[name="skills"]:checked'))
               .map(item => item.value),
        
        // Get additional comments
        comments: document.getElementById('comments').value
    };

    // Validate required fields (first name, last name, email) 
    if (formData.firstName && formData.lastName && formData.email) {
        // Save to localStorage (temporary storage in the browser) 
        localStorage.setItem("formData", JSON.stringify(formData));
        //alert/prompt if successfully submitted with all required fields filled out
        alert(`Thank you, ${formData.firstName}! Your information has been saved.`);
    } else {
        //if required fields aren't filled out new alert/prompt message
        alert("Please fill in all required fields.");
    }
}
