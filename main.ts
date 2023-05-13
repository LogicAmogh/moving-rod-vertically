function Rod (y: number) {
    X = 0
    for (let index = 0; index < 5; index++) {
        led.plot(y, X)
        X += 1
    }
}
let X = 0
let Y = 4
led.plot(X, Y)
basic.forever(function () {
    Rod(4)
    basic.pause(500)
    basic.clearScreen()
    Rod(3)
    basic.pause(500)
    basic.clearScreen()
    Rod(2)
    basic.pause(500)
    basic.clearScreen()
    Rod(1)
    basic.pause(500)
    basic.clearScreen()
    Rod(0)
    basic.pause(500)
    basic.clearScreen()
})
