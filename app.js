console.log('my app');
showNotes();

let saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    // setting the value of notes in local storage in array. notes is the notes element. notesObj is the notes array
    let notes = localStorage.getItem("notes"); 
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);

    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    console.log(notesObj);
    showNotes();

});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);

    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html +=
            `<div class="card mt-2 my-2 mx-2" style="width: 18rem;">

                <div class="card-body">
                    <h5 class="card-title"> ${element.title}</h5>
                    <p class="card-text"> ${element.text}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-dark">Delete</button>
                </div>
            </div>`


    });
    let notesElem = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML= `No notes! Write to add`;
    }
}

    function deleteNote(index) {
    
        //   console.log("I am deleting", index);
        
          let notes = localStorage.getItem("notes");
          if (notes == null) {
            notesObj = [];
          } else {
            notesObj = JSON.parse(notes);
          }
        
          notesObj.splice(index, 1);
          localStorage.setItem("notes", JSON.stringify(notesObj));
          showNotes();
    }
        
        
        let search = document.getElementById('searchTxt');
        search.addEventListener("input", function(){
        
            let inputVal = search.value.toLowerCase();
            console.log('Input event fired!', inputVal);
            let Cards = document.getElementsByClassName('card');
            Array.from(Cards).forEach(function(element){
                let cardTxt = element.getElementsByTagName("p")[0].innerText;
                if(cardTxt.includes(inputVal)){
                    element.style.display = "block";
                }
                else{
                    element.style.display = "none";
                }
                console.log(cardTxt);
            })
        })
        
        

