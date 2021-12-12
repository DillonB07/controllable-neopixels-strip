radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        strip.clear()
        state = 0
    } else if (receivedNumber == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        state = 1
    } else if (receivedNumber == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        state = 2
    } else if (receivedNumber == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        state = 3
    } else if (receivedNumber == 4) {
        strip.showColor(neopixel.rgb(255, 0, 123))
        state = 4
    } else if (receivedNumber == 5) {
        strip.showColor(neopixel.rgb(149, 0, 255))
        state = 5
    } else if (receivedNumber == 6) {
        strip.showColor(neopixel.rgb(0, 255, 251))
        state = 6
    } else if (receivedNumber == 7) {
        index = 0
        for (let index2 = 0; index2 < strip.length(); index2++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
            index += 1
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
            index += 1
        }
        state = 7
    } else if (receivedNumber == 8) {
        strip.showColor(neopixel.rgb(255, 136, 0))
        state = 8
    } else if (receivedNumber == 9) {
        strip.showRainbow(1, 360)
        state = 9
    }
    strip.show()
})
function change_brightness (amount: number) {
    brightness += amount
    if (brightness >= 255) {
        brightness = 255
    } else if (brightness <= 5) {
        brightness = 5
    }
    strip.setBrightness(brightness)
    if (state == 10) {
        strip.showColor(neopixel.rgb(R, G, B))
    } else if (state == 11) {
        strip.showColor(neopixel.hsl(H, S, L))
    } else {
        radio.sendNumber(state)
    }
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "+") {
        change_brightness(2)
    } else if (receivedString == "-") {
        change_brightness(-2)
    } else if (receivedString == "*") {
        strip.rotate(1)
    } else if (receivedString == "/") {
        strip.rotate(-1)
    } else if (receivedString == "S*") {
        rotating = 1
    } else if (receivedString == "S/") {
        rotating = -1
    } else if (receivedString == "SR") {
        rotating = 0
    } else if (receivedString == "S+") {
        change_brightness(255)
    } else if (receivedString == "S-") {
        change_brightness(-255)
    } else if (receivedString == "S6") {
        strip.easeBrightness()
    }
    strip.show()
})
radio.onReceivedValue(function (name, value) {
    if (name == "R") {
        R = value
    } else if (name == "G") {
        G = value
    } else if (name == "B") {
        B = value
    } else if (name == "RGBready" && value == 1) {
        strip.showColor(neopixel.rgb(R, G, B))
        strip.show()
        state = 11
    } else if (name == "H") {
        H = value
    } else if (name == "S") {
        S = value
    } else if (name == "L") {
        L = value
    } else if (name == "HSLready" && value == 1) {
        strip.showColor(neopixel.hsl(H, S, L))
        strip.show()
        state = 11
    }
})
let L = 0
let S = 0
let H = 0
let B = 0
let G = 0
let R = 0
let index = 0
let state = 0
let strip: neopixel.Strip = null
let rotating = 0
let brightness = 0
brightness = 100
rotating = 0
radio.setGroup(255)
// Modify value(15) depending on the length of your LED strip
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
loops.everyInterval(300, function () {
    strip.rotate(rotating)
    strip.show()
})
