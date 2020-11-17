(function creatingDivs(){
    var number = document.getElementById('number');
    var width = document.getElementById('width');
    var height = document.getElementById('height');
    var background = document.getElementById('background');
    var background3 = document.getElementById('background3');
    var createButton = document.querySelector('.btn-defaults');
    var container = document.querySelector('.container');

    createButton.addEventListener('click', function () {
        for(let i = 0; i < number.value; i++){
            var div = document.createElement("div");
            div.className = "created-div"
            div.style.width = width.value;
            div.style.height = height.value;
            div.style.background = background.value;
            container.appendChild(div);
            if (i%3==0) {
                div.style.background = background3.value;
            }
        }
    });
})();