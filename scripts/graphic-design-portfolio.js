window.onload = function(){
    var currentSlide = 0;
    var descriptionArray = ["First descirption of the picture", 
                            "Second Descrition of the next picture.", 
                            "Another description of the picuture.",
                            "Yet another description of another picture.",
                            ];
    var slideArray = document.getElementsByClassName('slide');
    var right = document.getElementsByClassName('right')[0];
    var left = document.getElementsByClassName('left')[0];
    var slideDesciption = document.getElementsByClassName('changedDescription')[0];
    
    right.addEventListener('click', function(){
        slideArray[currentSlide].className = 'slide';
        currentSlide += 1;
        
        if(currentSlide > slideArray.length - 1){
            currentSlide = 0;
            slideArray[currentSlide].className = 'slide showing';
            slideDesciption.innerHTML = descriptionArray[currentSlide];
        }
        
        slideArray[currentSlide].className = 'slide showing';
        slideDesciption.innerHTML = descriptionArray[currentSlide];
    });
    
    left.addEventListener('click', function(){
        slideArray[currentSlide].className = 'slide';
        currentSlide -= 1;
        
        if(currentSlide < 0){
            currentSlide = slideArray.length - 1;
            slideArray[currentSlide].className = 'slide showing';
            
        }
        
        slideArray[currentSlide].className = 'slide showing';
    });
}
