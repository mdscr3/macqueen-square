basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
        basic.pause(2000)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
        basic.pause(2000)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
