function changeText(){
    var heading = document.getElementById('heading');
    heading.textContent = "You clicked the button"

    var description = document.querySelector(".description");
    description.innerText = "Description Changed"

    description.innerText = "Description is changed"

    var items = document.getElementsByTagName('li');
    for (let i =0; i< items.length; i++){
        items[i].style.color = 'green'
    }

}