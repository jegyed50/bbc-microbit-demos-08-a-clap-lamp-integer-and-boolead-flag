input.onGesture(Gesture.TiltLeft, function () {
    if (led.pointBrightness(2, 2) > 0) {
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
// bbc-microbit-demos-08-a-clap-lamp-integer-and-boolead-flag
input.onSound(DetectedSound.Loud, function () {
    if (lamp == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        lamp = 0
    } else {
        basic.clearScreen()
        lamp = 1
    }
})
input.onGesture(Gesture.Shake, function () {
    if (varbooleanlamp) {
        basic.clearScreen()
        varbooleanlamp = false
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        varbooleanlamp = true
    }
})
let lamp = 0
let varbooleanlamp = false
varbooleanlamp = false
lamp = 0
basic.showIcon(IconNames.Asleep)
basic.pause(500)
basic.showString("f")
basic.pause(500)
