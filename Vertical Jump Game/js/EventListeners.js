window.addEventListener('keydown',(event)=>{
    console.log(event);
    switch(event.key){
        case 'ArrowUp':
            if(player.velocity.y === 0){
            player.velocity.y = -20;
            }
        break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
        break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
        break;
    }
})

window.addEventListener('keyup',(event)=>{
    console.log(event);
    switch(event.key){
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
        break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
        break;
    }
})