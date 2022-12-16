//* switch page
const play_ok = () => {
    document.getElementsByClassName('home-screen')[0].style.display = "none"
    document.getElementsByClassName('game-screen')[0].style.marginLeft = "0px"
}

//* valiables for state
let enter_once = 0
let run_to = 0

let run_before = new Audio("./media/run_before.mp3")
let run_start = new Audio("./media/run_start.mp3")
let run_after = new Audio("./media/run_after.mp3")
let run_over = new Audio("./media/shakaboom.mp3")
let run_before_ok = true
let run_after_ok = true
let run_over_ok = true

document.onkeydown = function(evt) {
    run_before.play()
    if (evt.keyCode == 32) {
        var box = document.getElementById("messageBox");
        box.style.visibility="hidden";
        console.error("audio not working!")
        terminal_show(1)
    if(enter_once == 0){
        run_start_play()
        enter_once++
    }
    enter_once++
    }
    if(enter_once == 0){
        run_before_play()
    }
}
//* run_before.mp3 playing
run_before_play()

function run_before_play(){
    setInterval(() => {
        if(run_before_ok == true){
            run_before.play()
        }
    })
}

//* run_start.mp3 play
function run_start_play(){
    run_before.pause()
    run_before_ok = false
    run_start.play()
    document.getElementById("kprabhasha").innerHTML = "[ --RUN ]"
    setTimeout(run_after_play, 300)
}

//* run_after.mp3 play
function run_after_play(){
    document.getElementById("kprabhasha").innerHTML = "[ Kumuthu Prabhasha ]"
    terminal_show(0)
    setInterval(() => {
        if(run_after_ok == true){
            run_after.play()
        }
    })
}

//* sound hit
setInterval(() => {
    var hit_state = document.getElementById('kprabhasha')
    if(hit_state.innerHTML.match(/wtf/gi)){
        run_after_ok = false
        run_after.pause()

        if(run_over_ok == true){
            run_over.play()
            run_over_ok = false
        }

        hit_state.innerHTML = "SHAKABOOM:   Game Over"
        document.getElementById("terminal-show").value += "-> Game over...\n"
        //run_shakaboom()
    }
})
function run_shakaboom(){
}

//* terminal-show controll
function terminal_show(check){
    if(check == 0){document.getElementById("terminal-show").value += "-> Running...\n"}
    if(check == 1){document.getElementById("terminal-show").value += `-> Jumping... [${enter_once}]\n`}
    document.getElementById("terminal-show").scrollTop = document.getElementById("terminal-show").scrollHeight
}