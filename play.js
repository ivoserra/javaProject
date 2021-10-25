const {USER, Base,library} = require("./index.js")


// bruce.learnAttackSkill(skillsLibrary.skills.thunder2)
// console.log(skillsLibrary)
const castle = new Base('Rammstein')

const bruce = new USER('Bruce','male', 'Its not who I am underneath, but what I do that defines me')

console.log(bruce)
castle.reception(bruce)
castle.mainRoom(bruce)
castle.ballRoom(bruce)
castle.kitchen(bruce,'teen spirit')
castle.garden(bruce,'ring','map-concat')
castle.ballRoom(bruce,'yes')
castle.mainRoom(bruce, bruce.documents.id)
castle.gate(bruce,4895)
const john = Object.create(bruce)

castle.gate(bruce, 4895, john, 'john','male')
castle.transferRoom(john, bruce, 'enter','sandMoon45')
console.log(john)
//console.log(bruce)
//console.log(john.quote)






























