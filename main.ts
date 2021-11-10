let angle = 0
basic.forever(function () {
    angle = input.compassHeading()
    if (angle > 315 && (angle <= 360 || angle >= 0 && angle < 45)) {
        music.playMelody("- A B C5 B A - - ", 800)
        basic.showString("N")
        basic.pause(5000)
    } else if (angle > 45 && angle <= 135) {
        music.playMelody("- - - G A B A G ", 800)
        basic.showString("E")
        basic.pause(5000)
    } else if (angle > 135 && angle <= 225) {
        music.playMelody("- E D C D E - - ", 800)
        basic.showString("S")
        basic.pause(5000)
    } else if (angle > 225 && angle <= 315) {
        music.playMelody("G F E F G - - - ", 800)
        basic.showString("W")
        basic.pause(5000)
    } else {
    	
    }
})
