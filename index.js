let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
let audio = new Audio('click.wav');

arr.forEach(buttons => {
    buttons.addEventListener('click' , (e) => {
        audio.play();
        buttons.classList.add("pressed");
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else if(e.target.innerHTML == 'sqrt'){
            string = Math.sqrt(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'PI'){
            string = Math.PI;
            input.value = string;
        }

        else if(e.target.innerHTML == 'log'){
            string = Math.log10(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'ln'){
            string = Math.log(string);
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }

        setTimeout(function(){
            buttons.classList.remove("pressed");
        }, 100);
    })
});
