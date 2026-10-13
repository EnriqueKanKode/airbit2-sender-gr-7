input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (Throttle < 60) {
        Throttle += -5
    } else {
        Throttle += -1
    }
    
})
input.onGesture(Gesture.ScreenDown, function on_gesture_screen_down() {
    
    Throttle = 0
    Arm = 0
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    Throttle = 0
    Arm = 0
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    if (Arm == 0) {
        Arm = 1
    } else {
        Arm = 0
    }
    
    Throttle = 0
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (Throttle < 60) {
        Throttle += 5
    } else {
        Throttle += 1
    }
    
})
let Roll = 0
let Pitch = 0
let Arm = 0
let Throttle = 0
let radioGroup = 7
radio.setGroup(radioGroup)
basic.showNumber(radioGroup)
basic.forever(function on_forever() {
    
    Pitch = input.rotation(Rotation.Pitch)
    Roll = input.rotation(Rotation.Roll)
    basic.clearScreen()
    if (Arm == 1) {
        led.plot(0, 0)
    }
    
    led.plot(0, Math.map(Throttle, 0, 100, 4, 0))
    led.plot(Math.map(Roll, -45, 45, 0, 4), Math.map(Pitch, -45, 45, 0, 4))
    radio.sendValue("P", Pitch)
    radio.sendValue("A", Arm)
    radio.sendValue("R", Roll)
    radio.sendValue("T", Throttle)
})
