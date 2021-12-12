radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
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
    } else if (false) {
        
    } else if (false) {
        
    } else if (false) {
        
    } else if (false) {
        
    } else if (false) {
        
    } else if (receivedNumber == 9) {
        strip.showRainbow(1, 360)
        state = 9
    }
    
    strip.show()
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    
    if (receivedString == "+") {
        brightness += 10
        strip.setBrightness(brightness)
    } else if (receivedString == "-") {
        brightness += -10
        strip.setBrightness(brightness)
    } else if (receivedString == "*") {
        strip.rotate(1)
    } else if (receivedString == "/") {
        strip.rotate(-1)
    } else {
        
    }
    
    strip.show()
})
let state = 0
let strip : neopixel.Strip = null
let brightness = 0
brightness = 100
radio.setGroup(255)
//  Modify value(15) depending on the length of your LED strip
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
