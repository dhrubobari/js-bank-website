function setPlayerStyle(player){
    player.style.border = '1px solid red';
    player.style.borderRadius = '8px';
    player.style.margin = '10px';
    player.style.padding = '5px';
}
const players = document.getElementsByClassName('player');
// loop korar karon shob players der jonno style set hobe.
for(const player of players){
    setPlayerStyle(player);
    
}

function addPlayer(){
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player'); // class add kora hoise
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, sunt harum aliquid, debitis nulla provident in voluptate blanditiis officiis dolorum excepturi repellendus repudiandae aut perspiciatis sint eius nihil corrupti unde.</p>
    ` // `` sign take bole caret
    // console.log(player)
    setPlayerStyle(player);
    playersContainer.appendChild(player); // append = at the end
}
// bubble
document.getElementById('players').addEventListener('click', function(event){
    // console.log()
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'antiquewhite';
    }
    else{
        event.target.parentNode.style.color = 'cyan';
    }
})