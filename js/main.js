document.onkeydown= function checkKeycode(event) {
    var keycode;
    if(!event){
        var event = window.event;
    }
    if(event.keyCode){
        keycode = event.keyCode;
    }

    switch(keycode) {
        case 13: sum();break;
        case 46: del();break;
        case 111: act('/');break;
        case 106: act('*');break;
        case 107: act('+');break;
        case 109: act('-');break;
        case 96: clik(0);break;
        case 97: clik(1);break;
        case 98: clik(2);break;
        case 99: clik(3);break;
        case 100: clik(4);break;
        case 101: clik(5);break;
        case 102: clik(6);break;
        case 103: clik(7);break;
        case 104: clik(8);break;
        case 105: clik(9);break;
    }

}

var b = 0;
var k = '';
var znak = false;

function del () {
    document.getElementById('input_calc').innerHTML = 0;
    b = 0;
    k = '';
    znak = false;
}

function act (act) {
    k = act;
    znak = false;
    b = parseInt(input_calc.innerHTML);
}

function sum () {
    if(k!='') {
        switch(k){
            case '/': b = b / parseInt(input_calc.innerHTML);break;
            case '*': b = b * parseInt(input_calc.innerHTML);break;
            case '+': b = b + parseInt(input_calc.innerHTML);break;
            case '-': b = b - parseInt(input_calc.innerHTML);break;
        }
        input_calc.innerHTML = b;
    }
}

function clik(number) {
    var inp_calc = document.getElementById('input_calc');
    if(inp_calc.innerHTML.length < 22) {
        if(inp_calc.innerHTML !=0 && znak == true)
            inp_calc.innerHTML+= number;
        else
            inp_calc.innerHTML = number;
        znak = true;
    }
}



























