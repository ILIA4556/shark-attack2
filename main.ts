controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`6`, mySprite, 50, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    mySprite.startEffect(effects.confetti, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.startEffect(effects.disintegrate)
    otherSprite.destroy()
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
mySprite = sprites.create(assets.image`1`, SpriteKind.Player)
controller.moveSprite(mySprite)
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(assets.image`12`, SpriteKind.Enemy)
    mySprite2.setPosition(randint(0, 160), randint(0, 120))
})
