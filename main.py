def on_received_number(receivedNumber):
    global state
    if receivedNumber == 0:
        strip.clear()
        state = 0
    elif receivedNumber == 1:
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
        state = 1
    elif receivedNumber == 2:
        strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
        state = 2
    elif receivedNumber == 3:
        strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
        state = 3
    elif receivedNumber == 9:
        strip.show_rainbow(1, 360)
        state = 9
    strip.show()
radio.on_received_number(on_received_number)

def on_received_string(receivedString):
    global brightness
    if receivedString == "+":
        brightness += 10
        strip.set_brightness(brightness)
    elif receivedString == "-":
        brightness += -10
        strip.set_brightness(brightness)
    elif receivedString == "*":
        strip.rotate(1)
    elif receivedString == "/":
        strip.rotate(-1)
    strip.show()
radio.on_received_string(on_received_string)

state = 0
strip: neopixel.Strip = None
brightness = 0
brightness = 100
radio.set_group(255)
# Modify value(15) depending on the length of your LED strip
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)