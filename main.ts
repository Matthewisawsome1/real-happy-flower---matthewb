let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . 3 3 3 . . 3 3 3 . 
    . . 3 3 3 . . 3 3 3 . 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 3 3 5 5 5 5 5 3 3 3 3 . 
    . . . . 3 3 1 f 5 1 f 5 3 3 3 . 
    . . 3 3 3 5 5 5 5 5 5 5 3 3 3 3 
    . . 3 3 3 3 5 f 5 f 5 5 3 3 3 3 
    . 3 3 3 3 3 5 5 f 5 5 3 3 3 3 . 
    . . . . . 3 3 5 5 5 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 . 3 3 . 3 3 . . . 
    . . . . . . . . . 7 . . . . . . 
    . . . . . . . . . 7 . . . . . . 
    . . . . . . . . . 7 . . . . . . 
    . . . . . . . . 7 7 . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . 9 9 9 8 . . 
        . . . . . . . . 9 9 9 9 8 . . . 
        . . . . . . . 9 9 9 9 8 . . . . 
        . . . . . . . 9 9 9 8 . . . . . 
        . . f f 5 5 9 9 9 f 5 f f . . . 
        . f f f 5 5 5 f f f 5 5 f f . . 
        . f 1 f 5 5 5 f f f 5 5 f f . . 
        . f f f 5 5 5 f f f 5 5 f f . . 
        . f f f 5 5 5 f f 5 5 5 f f f f 
        . f f f f 5 5 f f 5 5 5 f f . . 
        . . f f f 5 5 f f 5 5 f f f . . 
        . . f f f 5 5 f 5 5 5 f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
})
