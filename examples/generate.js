'use strict'
var Scale = require('../')

var MIN = parseInt('100000000000', 2)
var MAX = parseInt('111111111111', 2)

var groupedModes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function () { return [] })
for (var i = MIN; i <= MAX; i++) {
  var binary = i.toString(2)
  var scale = new Scale(binary)
  if (scale.leap() < 5) {
    groupedModes[scale.length].push(scale)
  }
}

var groupedScales = groupedModes.map(function (group) {
  var scales = []
  group.forEach(function (mode) {
    for (var i = 0; i < scales.length; i++) {
      if (mode.isModeOf(scales[i])) return
    }
    scales.push(mode)
  })
  return scales
})

console.log(groupedModes.map(function (g) { return g.length }))
console.log(groupedScales.map(function (g) { return g.length }))
console.log(groupedScales[4].map(function (s) {
  return { num: s.numbers(), steps: s.steps() }
}))
// console.log(heptatonics.map(function (s) { return s.binary }))