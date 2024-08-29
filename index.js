let overAllContainer = document.getElementById("main-container")
let cvButton = document.getElementById("cvbutton")
let aboutMe = document.getElementById("home2")
let resume = document.getElementById("home3")
let portfolio = document.getElementById("home4")
let testimonial = document.getElementById("home5")
let contact = document.getElementById("home6")
let aboutMeSection = document.getElementById("aboutme-section")
let reumeSection = document.getElementById("resume")
let portFolio = document.getElementById("portfolio")
let testimonials = document.getElementById("testimonials")
let contacts = document.getElementById("contacts")
// let aboutMe = document.getElementById("home2")

aboutMe.addEventListener("keyup", function(event){
    if (event.key === "Enter") { // Check if the Enter key is pressed  
        window.location.hash = "aboutMeSection" 
    }
    console.log(aboutMe)
    
  })

resume.addEventListener("keyup", function(event){
    if (event.key === "Enter") { // Check if the Enter key is pressed  
        window.location.hash = "resumeSection" 
    }
    console.log(aboutMe)
    
  })

portFolio.addEventListener("keyup", function(event){
    if (event.key === "Enter") { // Check if the Enter key is pressed  
        window.location.hash = "portfolio" 
    }
    console.log(aboutMe)
    
  })

testimonial.addEventListener("keyup", function(event){
    if (event.key === "Enter") { // Check if the Enter key is pressed  
        window.location.hash = "testimonials" 
    }
    console.log(aboutMe)
    
  })

contacts.addEventListener("keyup", function(event){
    if (event.key === "Enter") { // Check if the Enter key is pressed  
        window.location.hash = "contacts" 
    }
    console.log(aboutMe)
    
  })

cvButton.addEventListener("click", function(){
    window.location.href = "https://www.figma.com/design/LySKx0zxE2EbTLJ8ZO1AEU/Linda-Resume-(Copy)?node-id=0-1&node-type=CANVAS&t=BSr9sXenvATQH10F-0"
})