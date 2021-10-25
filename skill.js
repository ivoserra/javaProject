//const {AttackSkill, skills} = require('./index.js')

class AttackSkill {
    
    constructor (nameAttack, damageAmount, magicAmount){
        this.nameAttack = nameAttack
        this.damageAmount = damageAmount
        this.magicAmount = magicAmount
    
    } 

}

let thunder = new AttackSkill('thunder', 40, 50)
let thunder2 = new AttackSkill('thunder2', 40, 50)
class Library{

    constructor(){
        this.skills = {}
    }

    addSkills(){
        this.skills == {...this.skills , ...obj}
    }

}

let skillsLibrary = new Library()
skillsLibrary.addSkills({thunder})
skillsLibrary.addSkills({thunder2})

console.log(skillsLibrary)




























