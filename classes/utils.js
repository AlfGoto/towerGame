export function randomBetweenTwoInt(min, max) { return Math.floor(Math.random() * (max - min + 1) + min) }
export function distanceToPlayer(left, top) { return (Math.abs(window.innerHeight / 2 - top)) + (Math.abs(window.innerWidth / 2 - left)) }
export function distanceToTarget(left, top, tLeft, tTop) { return (Math.abs(tTop - top)) + (Math.abs(tLeft - left)) }
export function angleToPlayer(left, top) { return { top: Math.round(((window.innerHeight / 2 - top) / distanceToPlayer(left, top)) * 100), left: Math.round(((window.innerWidth / 2 - left) / distanceToPlayer(left, top)) * 100) } }
export function angleToTarget(left, top) { let ang = angleToPlayer(left, top); return { top: ang.top * -1, left: ang.left * -1 } }