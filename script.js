(function creatingDivs(){
    var number = document.getElementById('number');
    var width = document.getElementById('width');
    var height = document.getElementById('height');
    var background = document.getElementById('background');
    var background3 = document.getElementById('background3');
    var createButton = document.querySelector('.btn-defaults');
    var deleteButton = document.querySelector('.btn-delete');
    var container = document.querySelector('.div-container');
    var deleteLast2ndButton = document.querySelector('.btn-delete-2nd')
    var changeLastColorButton = document.querySelector('.btn-change-last-color')
    var changeColorsButton = document.querySelector('.btn-change-colors')

    createButton.addEventListener('click', function () {
        container.innerHTML = '';
        for(let i = 0; i < number.value; i++){
            var div = document.createElement("div");
            div.className = "created-div"

            if(div.style.width === width.value + 'px' && div.style.height === height.value + 'px'){
                div.style.width = width.value;
                div.style.height = height.value;
            }
            else{
                div.style.width = width.value + 'px';
                div.style.height = height.value + 'px';
            }

            div.style.background = background.value;
            div.innerHTML = i;

            container.appendChild(div);
            if (i%3==0) {
                div.style.background = background3.value;
                div.classList.add("third-element")
            }
        }
    });

    createButton.onclick = function(e) {
        document.getElementById("width").value = "";
        document.getElementById("height").value = "";
        document.getElementById("number").value = "";
        document.getElementById("background").value = "";
        document.getElementById("background3").value = "";
    }

    deleteButton.addEventListener('click', function () {
        var allDivss = document.querySelectorAll('.created-div');
        for (var i = 0; i < allDivss.length; i++) {
            var allDivs = document.querySelectorAll('.created-div');

            if (i%2===0)allDivs[i].remove()
        }
    });

    deleteLast2ndButton.addEventListener('click', function () {
            var allDivs = document.querySelectorAll('.created-div');
            allDivs[allDivs.length - 1].remove();
            allDivs[allDivs.length - 2].remove();
    });

    changeLastColorButton.addEventListener('click', function () {
         var allDivs = document.querySelectorAll('.created-div');
         var lastElement = allDivs[allDivs.length - 1];

        if(window.getComputedStyle(lastElement).backgroundColor !== 'rgb(255, 255, 0)' && window.getComputedStyle(lastElement).backgroundColor !== 'rgb(0, 255, 0)'  &&window.getComputedStyle(lastElement).backgroundColor !== 'rgb(0, 0, 255)') {
            lastElement.style.background = 'rgb(255, 255, 0)'

        }else if (window.getComputedStyle(lastElement).backgroundColor === 'rgb(255, 255, 0)') {
            lastElement.style.backgroundColor = 'rgb(0, 255, 0)'

        }else if (window.getComputedStyle(lastElement).backgroundColor === 'rgb(0, 255, 0)') {
            lastElement.style.backgroundColor = 'rgb(0, 0, 255)'

        }else if (window.getComputedStyle(lastElement).backgroundColor === 'rgb(0, 0, 255)'){
            lastElement.style.backgroundColor = 'rgb(255, 255, 255)'
        }
    });


    changeColorsButton.addEventListener('click', function () {
        var allDivss = document.querySelectorAll('.created-div');

        for(let i = 0; i < allDivss.length; i--) {

        }
    });

})()