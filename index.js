window.addEventListener( 'load' , () =>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const color = ["#ffff66", "#ffb3ff",  "#4d88ff", "#b3ff66" , "#1a66ff", "#b300b3"];


    //Let's put sound here
    pads.forEach((pad, index )=> {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);

        });
    });
    //function to make bubbles
    const createBubbles = (index) => {
      const bubble = document.createElement("div")  ;
      visual.appendChild(bubble);
      bubble.style.backgroundColor = color[index];
      bubble.style.animation = "jump 1s ease";
      bubble. addEventListener( 'animationend', function(){
          visual.removeChild(this);

      });

    }
});
