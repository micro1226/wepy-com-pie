export default class Circle {
  static isPointInHollowCircle (pointX, pointY, centerX, centerY, outRadius, innerRadius) {
    const absX = centerX - pointX
    const absY = centerY - pointY
    const hypotenuse = (absX * absX) + (absY * absY)
    if (hypotenuse > (outRadius * outRadius) || hypotenuse < (innerRadius * innerRadius)) {
      return false
    }
    return true
  }

  static getAngleFromRadian (radian) {
    return radian * 180 / Math.PI
  }

  static getRadianFromAngle (angle) {
    return angle * Math.PI / 180
  }

  static getAngleWithPoint (pointX, pointY, centerX, centerY) {
    const absX = centerX - pointX
    const absY = centerY - pointY
    let angle = Math.atan(absY / absX) * 180 / Math.PI + 90
    return absX < 0 ? angle : angle + 180
  }
}
