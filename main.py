def on_sound_quiet():
    basic.show_icon(IconNames.ASLEEP)
input.on_sound(DetectedSound.QUIET, on_sound_quiet)

def on_logo_pressed():
    pass
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

input.set_sound_threshold(SoundThreshold.QUIET, 56)

def on_forever():
    led.plot_bar_graph(input.sound_level(), 255)
basic.forever(on_forever)
