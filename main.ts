input.onButtonPressed(Button.A, function () {
    aim.turn(Direction.Right, 90)
})
input.onButtonPressed(Button.B, function () {
    let sprite: game.LedSprite = null
    isMoving = false
    basic.pause(2000)
    game.addScore(4 - (Math.abs(sprite.get(LedSpriteProperty.X) - 2) + Math.abs(sprite.get(LedSpriteProperty.Y))))
    bullets += -1
    if (bullets == 0) {
        basic.showNumber(game.score())
        basic.showString("Game Over")
    } else {
        aim.delete()
        aim = game.createSprite(2, 2)
        isMoving = true
    }
})
let bullets = 0
let isMoving = false
let aim: game.LedSprite = null
aim = game.createSprite(2, 2)
isMoving = true
bullets = 5
game.setScore(0)
basic.forever(function () {
    if (isMoving) {
        aim.move(1)
        aim.ifOnEdgeBounce()
    }
})
