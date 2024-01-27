let timerCircle = document.querySelector('#user-id');
let user = document.querySelector('#user-t');
let reminder = document.querySelector('.reminder-d')
let addreminder = document.querySelector('#add-reminder')
let btnOn = document.querySelector('.btn-on')
let poroje = document.querySelector('.poroje')
let porojed = document.querySelector('.poroje-d')
let btnOne = document.querySelector('#btn-one')
let btnTime = document.querySelector('.btn-time')
let timerAdd = document.querySelector('.time')
let Add = document.querySelector('#add-timer')
let sub = document.querySelector('#s-btn')
let btnKarbar = document.querySelector('.btn-karbar')
function show() {
    if (document.getElementById('show').style.display == 'block') {
        document.getElementById('show').style.display = 'none'
    } else {
        document.getElementById('show').style.display = 'block'
    }
}

timerCircle.addEventListener('click', function (e) {
    user.style.display = 'block'
})

addreminder.addEventListener('click', function (e) {
    reminder.style.display = 'block'
})

btnOn.addEventListener('click', function (e) {
    reminder.style.display = 'none'
})


porojed.addEventListener('click', function (e) {
    poroje.style.display = 'block'
})
btnOne.addEventListener('click', function (e) {
    poroje.style.display = 'none'
})

Add.addEventListener('click', function (e) {
    timerAdd.style.display = 'block'
})

btnTime.addEventListener('click', function (e) {
    timerAdd.style.display = 'none'
})

// todoList

sub.addEventListener('click', function (e) {
    alert('salam')
})

btnKarbar.addEventListener('click', function (e) {
    reminder.style.display = 'none'
    addreminder.style.display = 'none'

})

// end-todolist 
function ChangeText() {
    var myselect = document.getElementById("MySelect");
    var result = document.getElementById("Result");
    result.innerHTML = "شما " + myselect.value + " را انتخاب کرده اید ";
    reminder.style.display = 'none'
    addreminder.style.display = 'none'
}


$('#datepicker').datepicker({
    uiLibrary: 'bootstrap5'
});

$(function () {
    $("#datepicker").datepicker({
        autoclose: true,
        todayHighlight: true,
    }).datepicker('update', new Date());
}); 