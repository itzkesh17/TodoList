let input=document.getElementById('input');
let list=document.getElementById('list');

function add() {
    if(input.value==="")
    {
        alert('you must write something here');
    }
    else{
        let listAdd = document.createElement("li");
        listAdd.innerHTML=input.value;
        list.appendChild(listAdd);

        let img = document.createElement('img')
        img.src="img/delete.png"
        listAdd.appendChild(img)
    }
    input.value=""
    store()
}

list.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle('item')
        store()
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        store()
    }
})

function store(){
    localStorage.setItem("data",list.innerHTML)
}
function show() {
    list.innerHTML=localStorage.getItem("data")
}
show();