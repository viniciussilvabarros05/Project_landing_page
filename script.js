
let container = document.getElementById("container")
let menu = document.getElementById("decoration_Pg2")
container.innerHTML = menu.innerHTML

let input = document.getElementById("input")
let submit = document.getElementById("submit")
let alert = document.querySelector(".alert_error_email")
let erro = document.querySelector(".image_error")
console.log(erro)



function actived(i) {
    let tab1 = document.getElementById("tab1")
    let tab2 = document.getElementById("tab2")
    let tab3 = document.getElementById("tab3")

    let menu = document.getElementById("decoration_Pg2")
    let container = document.getElementById("container")

    let menu1 = document.getElementById("decoration1_Pg2")
    let menu2 = document.getElementById("decoration2_Pg2")

    let array = [tab1, tab2, tab3]
    let menu_actived = [menu, menu1, menu2]



    for (index = 0; index < array.length; index++) {
        if (array[index] == i) {
            i.classList.add("actived")

            container.innerHTML = menu_actived[index].innerHTML



        } else {

            array[index].classList.remove("actived")
        }



    }


}




function hover_svg(i) {

    var svg = i
    svg.classList.add("social_hover")
}

function out_svg(i) {
    var svg = i
    svg.classList.toggle("social_hover")
}

function submit_email() {
  

    for (let i = 0;i< email_length(); i++) {
       let index = input.value[i]
        if ( index == "@" && email_length() >10) {
            alert.classList.remove("alert")
            erro.classList.remove("alert")
            input.value = ""   
        }else{
            alert.classList.add("alert")
            erro.classList.add("alert")
        }
    }
}


function email_length() {

    input.value.length
    return input.value.length
}

