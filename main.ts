input.onButtonPressed(Button.A, function () {
    if (posicionPaleta > 0) {
        paleta1.move(-1)
        paleta2.move(-1)
        posicionPaleta += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (posicionPaleta < 3) {
        paleta1.move(1)
        paleta2.move(1)
        posicionPaleta += 1
    }
})
function moverPelota () {
    basic.pause(300)
    pelota.move(1)
    pelota.ifOnEdgeBounce()
    if (pelota.isTouching(paleta1) || pelota.isTouching(paleta2)) {
        pelota.set(LedSpriteProperty.Direction, 0)
        azar = Math.randomBoolean()
        if (azar == true) {
            pelota.turn(Direction.Left, 45)
        } else {
            pelota.turn(Direction.Right, 45)
        }
        puntos += 1
    } else {
        if (pelota.get(LedSpriteProperty.Y) == 4) {
            basic.clearScreen()
            basic.showString("GAME OVER")
            basic.showString("PUNTOS:")
            basic.showNumber(puntos)
        }
    }
}
let azar = false
let puntos = 0
let posicionPaleta = 0
let pelota: game.LedSprite = null
let paleta2: game.LedSprite = null
let paleta1: game.LedSprite = null
paleta1 = game.createSprite(2, 4)
paleta2 = game.createSprite(3, 4)
pelota = game.createSprite(2, 0)
posicionPaleta = 2
puntos = 0
pelota.turn(Direction.Right, 90)
basic.forever(function () {
    moverPelota()
})
