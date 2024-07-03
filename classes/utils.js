export function randomBetweenTwoInt(min, max) { return Math.floor(Math.random() * (max - min + 1) + min) }
export function distanceToPlayer(left, top) { return (Math.abs(window.innerHeight / 2 - top)) + (Math.abs(window.innerWidth / 2 - left)) }
export function angleToPlayer(left, top) { return { top: Math.round(((window.innerHeight / 2 - top) / distanceToPlayer(left, top)) * 100), left: Math.round(((window.innerWidth / 2 - left) / distanceToPlayer(left, top)) * 100) } }