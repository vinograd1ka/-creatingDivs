(function creatingDivs(){
    var number = document.getElementById('number');
    var width = document.getElementById('width');
    var height = document.getElementById('height');
    var background = document.getElementById('background');
    var background3 = document.getElementById('background3');
    var createButton = document.querySelector('.btn-defaults');
    var deleteButton = document.querySelector('.btn-delete');
    var container = document.querySelector('.container');

    createButton.addEventListener('click', function () {
        for(let i = 0; i < number.value; i++){
            var div = document.createElement("div");
            div.className = "created-div"
            div.style.width = width.value;
            div.style.height = height.value;
            div.style.background = background.value;
            div.innerHTML = i;

            container.appendChild(div);
            if (i%3==0) {
                div.style.background = background3.value;
                div.classList.add("third-element")
            }
        }
    });

    deleteButton.addEventListener('click', function () {
        for (var i = 0; i < number.value; i++) {
            var allDivs = document.querySelectorAll('.created-div');
            if (i%3===0)allDivs[i].remove()
            //allDivs[i%3==0].remove();
        }
    });
})()