input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.Asleep)
})
input.setSoundThreshold(SoundThreshold.Quiet, 113)
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
    basic.pause(100)
})
