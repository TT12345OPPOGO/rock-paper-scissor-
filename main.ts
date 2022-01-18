let player_value = 0
let Value = 0
input.onButtonPressed(Button.A, function () {
    player_value = 0
    if (Value == 0) {
        basic.showArrow(ArrowNames.East)
    }
    if (Value == 1) {
        basic.showArrow(ArrowNames.South)
    }
    if (Value == 2) {
        basic.showArrow(ArrowNames.North)
    }
})
input.onButtonPressed(Button.AB, function () {
    player_value = 2
    if (Value == 0) {
        basic.showArrow(ArrowNames.South)
    }
    if (Value == 1) {
        basic.showArrow(ArrowNames.North)
    }
    if (Value == 2) {
        basic.showArrow(ArrowNames.East)
    }
})
input.onButtonPressed(Button.B, function () {
    player_value = 1
    if (Value == 0) {
        basic.showArrow(ArrowNames.North)
    }
    if (Value == 1) {
        basic.showArrow(ArrowNames.East)
    }
    if (Value == 2) {
        basic.showArrow(ArrowNames.South)
    }
})
input.onGesture(Gesture.Shake, function () {
    Value = randint(0, 2)
    basic.pause(5000)
    if (Value == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (Value == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (Value == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
