export function scroll() {
    SmoothScroll({
    animationTime    : 1000,
    stepSize         : 60,
    accelerationDelta : 200,
    accelerationMax   : 2,
    keyboardSupport   : true,
    arrowScroll       : 50,
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,
    touchpadSupport   : true,
  })
}
