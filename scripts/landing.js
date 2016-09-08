window.onload = function(){
    var projects = document.getElementsByClassName('projects')[0];
    var project = document.getElementsByClassName('project');
    var navbar  = document.getElementsByClassName('navbar')[0];
    var projectWaypoint = new Waypoint({
        element: document.getElementsByClassName('projects')[0],
        handler: function(){
            console.log('Basic Waypoint Triggered')
        }
    });
    
    projects.addEventListener('mouseover', function(event){
        if(((event.target.className === 'project bloccit') || (event.target.className === 'project alexa'))){
            event.target.style.opacity = '1';
//            event.target.firstChild.style.transition: all 0.25s ease-in-out;
        }
    });
    
    for(var i = 0; i < project.length; i++){
        project[i].addEventListener('mouseleave', function(event){
             event.target.style.opacity = '0.5';
        });
    }
};

