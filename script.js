
let container = document.getElementById("container")
let menu = document.getElementById("decoration_Pg2")

container.innerHTML = menu.innerHTML




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

