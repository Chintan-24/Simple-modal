//get modal element

var modal = document.getElementById('simpleModal');

//get open modal btn
var modalBtn = document.getElementById('modalBtn');

//get close btn
var closeBtn = document.getElementById('closeBtn');

//listen for open click
modalBtn.addEventListener('click',openModal );

//listen for close click
closeBtn.addEventListener('click',closeModal );

//listen for outside click
window.addEventListener('click',clickOutside );


function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function clickOutside(e){
    if(e.target==modal){
    modal.style.display = 'none';
    }
}