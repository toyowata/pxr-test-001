input.onButtonPressed(Button.A, function () {
    led.plotBarGraph(
    input.soundLevel(),
    128
    )
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Hello!")
})
input.onSound(DetectedSound.Quiet, function () {
	
})
input.setSoundThreshold(SoundThreshold.Loud, 128)
