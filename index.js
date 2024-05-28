const contentContainer = document.querySelector(".content-container");
const arrowUp = document.querySelector(".up");
const arrowDown = document.querySelector(".down");
const läsMerButtons = document.querySelectorAll(".läs-mer");
const rightSideContainer = document.querySelector(".right-side-container");
const rightSideTextContainer = document.querySelectorAll(".right-side-text-container")
const arrowsContainer = document.querySelector(".arrows-container");
const topContainer = document.querySelector(".top-container");
const textContainers = document.querySelectorAll(".text-container");
const leftArrow = document.querySelector(".left-arrow");
const toggleInput = document.querySelector(".toggle");

const containers = document.querySelectorAll(".left-side");

let activeIndex = 0;
const totalContainers = 5;
const containerWidth = document.querySelector('.left-side').offsetHeight;


läsMerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        fullScreen()
    })
})

leftArrow.addEventListener("click", () => {
    splitScreen()
})



function fullScreen(){
    rightSideContainer.style.width = "100%"
    arrowsContainer.style.transition = "opacity 0.5s ease-out"
    arrowsContainer.style.opacity ="0";
    contentContainer.style.overflow = "visible"
    
    
    setTimeout(() => {
        containers.forEach((container) => {
            container.style.display ="none";

        })

        textContainers.forEach((text,index) => {
            if(activeIndex === index){
                text.style.display = "flex";
                
                setTimeout(() => {
                    text.style.opacity = "1";
                    text.style.transform = "translateY(0)"
                },600)
            }
        })

        contentContainer.classList.add("full-screen")
        topContainer.style.display ="flex"
    },1000)

    

    rightSideTextContainer.forEach((container,index) => {
        if(activeIndex === index){
            container.style.transition = "opacity 0.5s ease-out"
            container.style.opacity = "0";


            setTimeout(() => {
                container.style.display ="none"
                arrowsContainer.style.display ="none"
            },1000)
        }
    })
}


function splitScreen(){
    rightSideContainer.style.width = "50%"
    arrowsContainer.style.transition = "opacity 0.5s ease-out"
    contentContainer.style.overflow = "hidden"
    
    topContainer.style.display ="none"
   
    containers.forEach((container) => {
        container.style.display ="flex";
    })

    textContainers.forEach((text,index) => {
        if(activeIndex === index){
            text.style.display = "none";
            text.style.opacity = "0";
            text.style.transform = "translateY(50px)"
        }
    })

    rightSideTextContainer.forEach((container,index) => {
        if(activeIndex === index){
            container.style.transition = "opacity 0.5s ease-out"
            
            container.style.display ="flex"
                arrowsContainer.style.display ="flex"
            
            setTimeout(() => {
                container.style.opacity = "1";
                arrowsContainer.style.opacity ="1";
                
            },1000)
            
        }
    })
}


function handleClickUp(){
    arrowDown.removeEventListener("click",handleClickDown);
    arrowUp.removeEventListener("click", handleClickUp);
    

    setTimeout(() => {
        arrowUp.addEventListener("click", handleClickUp);
        arrowDown.addEventListener("click", handleClickDown);
    },1500)

    activeIndex = (activeIndex - 1 + totalContainers) % totalContainers;
    updateLeftContainers();
    updateRightContainers();
}

function handleClickDown(){
    arrowDown.removeEventListener("click",handleClickDown);
    arrowUp.removeEventListener("click", handleClickUp);

    setTimeout(() => {
        arrowDown.addEventListener("click", handleClickDown);
        arrowUp.addEventListener("click", handleClickUp);
    },1500)
    activeIndex = (activeIndex + 1) % totalContainers;
    updateLeftContainers();
    updateRightContainers();
}





arrowUp.addEventListener("click",handleClickUp)
arrowDown.addEventListener("click",handleClickDown)


function updateLeftContainers() {
    const containers = document.querySelectorAll(".left-side");
  
    containers.forEach((container, index) => {
      if (index === activeIndex) {
        container.style.display = "flex";
        container.style.transition = "transform 1s ease"
        
        setTimeout(() => {
            container.style.opacity = "1"
            container.style.transform = "translateY(0)";
            

          }, 200);

      } else {
        
        
        
            setTimeout(() => {
                container.style.transform = `translateY(100vh)`;
            },200)
        
        setTimeout(() => {
            
         container.style.opacity = "0"
         container.style.transform = `translateY(-100vh)`;

        }, 1200);
      }
    });
  }

  function loadLeftSide(){
    const containers = document.querySelectorAll(".left-side");
  
    containers.forEach((container, index) => {
      if (index === activeIndex) {
        container.style.display = "flex";
        container.style.transition = "transform 1s ease"

      } else {
         container.style.opacity = "0"
         container.style.transform = `translateY(-100vh)`;

      }
    });
  }

  function loadRightSide(){
    const rightContainers = document.querySelectorAll(".right-side-text-container");

    rightContainers.forEach((container,index) => {
        if(index === activeIndex){
            container.style.display = "flex";
            container.style.transition = "transform 1s ease"
            
            
        }else{
            
            
            container.style.display = "none";

            
                container.style.opacity = "0"
                container.style.transform ="translateY(10vh)"
            

        }
    })
  }

function updateRightContainers(){
    const rightContainers = document.querySelectorAll(".right-side-text-container");

    rightContainers.forEach((container,index) => {
        if(index === activeIndex){
            container.style.display = "flex";
            container.style.transition = "transform 1s ease"
            
            setTimeout(() => {
                container.style.opacity = "1"
                container.style.transform = "translateY(0)";
                
    
              }, 200); 
            
            
        }else{
            container.style.transition = "transform 1s ease"
            container.style.display = "none";
            setTimeout(() => {
                container.style.opacity = "0"
                container.style.transform ="translateY(10vh)"
            },1000)

        }
    })
}



    







loadLeftSide();
loadRightSide();
