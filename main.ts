let distance = 0
basic.forever(function () {
    distance = Grove.grove_ultrasonic_v2(GrovePin.P1, DistanceUnit.cm)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
    basic.pause(distance)
})
basic.forever(function () {
    for (let index = 0; index <= 180; index++) {
        Grove.grove_servo(GroveAnalogPin.P0, index)
        basic.pause(50)
    }
    for (let index = 0; index <= 180; index++) {
        Grove.grove_servo(GroveAnalogPin.P0, 180 - index)
        basic.pause(50)
    }
})
