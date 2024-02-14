function press(p) {
    document.getElementById('inp').value += p
}

function equal() {
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}

function clrall() {
    document.getElementById('inp').value = " "
}

function clr() {
    var a = document.getElementById('inp')
    a.value = a.value.slice(0, -1)
}

function mod(){
    var a=document.getElementById('inp')
    a.value= a.value=+'%'
        
}
