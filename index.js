
class AttackSkill {
    
    constructor (nameAttack, damageAmount, energyAmount){
        this.nameAttack = nameAttack
        this.damageAmount = damageAmount
        this.energyAmount = energyAmount
    
    } 

}

let thunder = new AttackSkill('thunder', 40, 50)
let lightning = new AttackSkill('lightning', 40, 50)
let sunlight = new AttackSkill(' sunlight', 60, 50)
let darkMatter = new AttackSkill('darkMatter', 60, 60)
let starDust = new AttackSkill('starDust', 40, 50)
let shadow = new AttackSkill('shadow', 40, 50)
let splash = new AttackSkill('splash', 50, 40)
let snakeRattle = new AttackSkill('snakeRattle', 50, 50)
let dragonBreath = new AttackSkill('dragonBreath', 60, 50)

class DataSkills{
   
    constructor(){
        this.skills ={ }
        this.tools ={ }
    }

    addSkills(obj){
        this.skills ={...this.skills,...obj}
    }

 

}

let library = new DataSkills()
library.addSkills({thunder})
library.addSkills({lightning})
library.addSkills({sunlight})
library.addSkills({darkMatter})
library.addSkills({starDust})
library.addSkills({shadow})
library.addSkills({splash})
library.addSkills({snakeRattle})
library.addSkills[{dragonBreath}]
//console.log(skillsLibrary)





class USER {

    constructor(name, gender,quote){
        
        this.name = name
        this.gender = gender
        this.quote = quote
        

        this.health = 5
        this.energy = 5
        this.skills = []
        this.quote = quote

       console.log(`

       My name is ${this.name}! 
       ${this.quote} 


       `)
    }

    info(){}

    getSkill(...obj){
        this.skills.push(...obj)
       
    }

    status(){
        console.log(`
        
        This is your current status: Heath:${this.health} Energy:${this.energy}
        
        In order to survive you will need to get some skills and improve your personal magic and health.
        The Health standard status for a easy ride is 10.
        Your magic should be 10 , believe me you will need to have fun too.
        `)
    }


    attack(x, opponent){
        
        if (this.energy >= this.skills[x].energyAmount) {
            this.energy -= this.skills[x].energyAmount
            opponent.health -= this.skills[x].damageAmount 
            console.log(`
            BAM ! the ATTACK was Delivered ! There is no messing with you today !

            your Opponent was damaged by 40 points 
            Your magic powers are at ${this.magic}. 
            Your Health is at ${this.health}.
            
            `)

        } else if ( this.energy < x ){
        console.log(`
        
        You have no power to go through another challenge ! 
        Walk away and log getMagic()
        
        
        `)
    } 

    }

    getEnergy(){
        if(this.energy < 10){
            console.log(`
            Oh NO !!! 
            You are running so low... You need to go to visit Ramstein the Castle. 
            In the Castle you need to log in the reception to get more info...`)

        }else if(this.energy >= 100){
            console.log(`
           

            LETS GO ! 
            
            `)
        }

    }

}

class Base {

    constructor(name){
        this.name = name 
        
    }



    reception(user){
      
        if (user.checkIn == undefined){

        user.checkIn={}
        user.checkIn.castle = {
        reception: true, 
        kitchen:undefined, 
        garden:undefined, 
        ballRoom:undefined, 
        mainRoom:undefined, 
        throneRoom:undefined,}
        
        console.log(`
        

        CASTLE ${this.name}

        Hello ${user.name}!
        We have been waiting for you!  
        
        I hope you feel welcome.
        My name is Frederic and I take care of this Castle.
        My job is to make sure everyone is safe and having a good time. 

        ${this.name} is a sacred place, were all users come to gather Health points and 
        collect as many skills and properties that is possible. 
        For this, all users need to go through some challenges to earn it ${user.name}!
        Available rooms:

        kitchen()
        garden()
        mainRoom()
        ballRoom()

        ....good luck and enjoy ! 
        `)
        } else if (user.checkIn.castle.reception == true){ 
        console.log(`

        

        CASTLE Rammstein

        Hello Batman! You have been here before! 
        
        This are the rooms that are available to you:

        kitchen()
        garden()
        mainRoom()
        ballRoom()
        
        Enjoy and dont get lost ! 
        
        `) } else return
        
    }




    kitchen(user,str){

        if(user.checkIn.castle.kitchen === true){
        console.log(`
    
            
    
            Gaston le chef : 
    
            AH ${user.name} its you again ?
                
            We have gave you already a meal! What do you think this is?
    
            The Antoinette buffet ?
    
            There are no left overs, everyone ate everything !
    
            Im famous to be the best for a reason!
    
            Anyway, good luck on your journey and 
    
            Godspeed you ${user.name} !!!
    
                                            
                                            
        `)
        }else if(user.checkIn.castle.kitchen === undefined){
        user.checkIn.castle.kitchen = true
        console.log( `

        

        THE ${this.name} KITCHEN 

        Every day our kitchen is super busy making food for all  the hungry users.
        Users need to eat so their health increase for their adventures.

        'Gaston le Chef'  speaks in riddles ! He approaches you while
        singing a song looking at you.

        In order for you to get your food you need to guess... his song!

        fill the following quote:


        Smells Like....
         
         
        * tip: 
        this is the title of a song from an American grunge group Band


        ex:castle.kitchen(${user.name},'....')
         
         
         `);
        } else return
        

        if( str === undefined) return;

        let answer = str.toLowerCase(str)

        let y = 'teen spirit';

        if(answer === y) { 
        user.health += 30
        user.checkIn.castle.kitchen = true
        console.log(`

        

        Congrats!!!  You got an amazing Meal.

        ${user.name} : health = ${user.health}

        Smells like Teen Spirit is a song from Nirvana. 
        Released in 1991 form the album Nevermind.

        Unfortunately Cobain committed suicide on the 5th April 1994.



                                    + + +



        One of Cobain's favorite foods was Kraft-brand macaroni and cheese. 
        Despite his request, caterers in Atlanta once created a macaroni 
        shells, jack cheese and jalapeños meal, assuming it was close enough!



        I hope you can Enjoy your meal! 
            


        `) 
            
        } else if(str !== y){
        user.checkIn.castle.kitchen == undefined
        console.log(`

       

        


        ... this is awkward ... 

        you either have a typo... or you might need to do some research...
            
        I will give you the time you need ... dont give up and try again !
       
        


        `)
        }
        

    }





    garden(user, x, y ){

        if(user.checkIn.castle.garden == true){
        console.log(`

        

        Isabelle comes to the door !

        Isabelle:

        Hi ${user.name}, are you looking for someone? 
            
        You have already entered this room.

        Its within the rules of ${this.name} Castle that all its users

        can enter the garden only once.
            

        Everybody is getting ready to departure.

        Did you check the ballroom or the kitchen? the Main room ?

        I think you might have people waiting for you there.
            

        best of luck !

            `)

        } else
        console.log(`

       


        Welcome to the Garden of ${this.name}!


        This Garden is built of hidden corners, riddles and misfortunes.

        For your own safety, we have gathered the best Hosts that can guide you to 
        the places that have the most to offer you.
        
        No matter how suspicious your host might sound, we ask you to trust them and 
        to follow their instructions.
         
        * * *    

        When your ready ring the bell so a random Host comes to find you 
        
        and walk you through the garden.

        * To ring the bell type 'ring' after your name.

        
        exp.(${user.name},'ring') 



        `)


        let play = 'ring'
        let isabelle = 'map-concat'
        let madHater = 'alice'
        let gardner = 'poppy'
        const isa =[2, 6, 8, 50]

        if(x === play){
        let door = Math.floor(Math.random()*(3) +1)
        switch(door){
        case 1:
        console.log(`


        Hi ${user.name} my name is Isabelle and I am a Programmer.


        Let me take you to the land of the array of fruits.

        Isabelle releases a big laughter ! 
            
        I decided to created some fruits, give them names and put them inside an array ! 

        [ banana, apple, orange, kiwi, peach ]

        I had the idea to add them suffixes so they can sound more crazy... just like ME !
           
        [ bananalicious, applelicious, orangelicious, kiwilicious, peachlicious ]

        My challenge to you is to guess what methods of this array did I use to make 
        
        them delicious like this. Can you guess what are my methods?


        example (${user.name},ring, 'method1-method2')

            
            `)
        break;
        case 2:
        console.log(`

        WHERE IS THAT DAMM RABIT !!!

        My name is John , and Im a character creator.

        My favorite characters  derived always from children books.

        The MAD HATTER is one of my favorites! 
            
        And as I understand you are here because you need to go through a type of challenge.

        No worries, mine is super easy.

        I hope your into children stories, some of the stories are not for children at all !
        
        The Mad Hatter and the white rabbit are preparing their tea time somewhere in the woods
        
        At some point they are interrupted by a little girl. 
       

        do you know who am I talking about ${user.name}? 

        *** write the name *** exp(${user.name},'ring','....' )



        `)
        break;
        case 3:
        console.log(`
            

        Hello ${user.name} ! 

        I am the Henry the Gardner of ${this.name} Castle. 

        In reality Im a biologist and Im married to Isabelle the programer.
        
        I take care of the avatar department at ${this.user} . I make sure the artificial

        bodies of the avatars are in perfect condition. So our users feel comfortable in them 

        I Have been working all day on the my flowers section. Please follow me...

        I have planted this beautiful plants:

        'Poppy' 'Roses', 'Tulips','Lily','Sunflower' 

        unfortunately there is one of them that is DEADLY ! 


        which flower you think its the deadliest?

        Write the answer on a string exp(${user.name}, ring,'...')

    
        `)
        break;
        }
        }

        if(y === undefined) return

        if(y === isabelle){
        user.checkIn.castle.garden = true
        user.energy += 200
        user.health += 250
        user.property={} 
        user.property.dancer = 100
        user.keys=[]
        user.keys.isa = isa
        user.getSkill(lightning, thunder, sunlight)
        console.log(`

            
        Congratulations ${user.name}!


        Your energy is at ${user.energy} points
        Your health is at ${user.health} points

        ___________________________________________________

        You have new properties!

        .DANCER ${user.property.dancer} points
        .KEYS [${user.keys}]
        
        Isabelle gave you a secret key

        isa [${user.keys.isa}]  
            
        Your status gives access to the ballroom !
        ____________________________________________________

        You have uncovered 3 skills: 

        *** lightning
        *** thunder
        *** sunlight

         `)
        }else if(y === madHater){
        user.checkIn.castle.garden = true
        user.energy += 250
        user.health += 200
        user.property={}
        user.tools ={}
        user.property.dancer = 100
        user.tools.shield = 200
        user.getSkill(darkMatter, starDust, shadow)
        console.log(`
            
            
        Congratulations ${user.name}!

        

        Your energy is at ${user.energy} points
        Your health is at ${user.health} points

        ____________________________________________________

        You have one new property!

        . dancer with ${user.property.dancer} points

        . tools with SHIELD ${user.tools.shield}
            
        YOur status gives access to he Ballroom !
        ____________________________________________________

        You have uncovered 3 skills: 

        *** darkMatter
        *** starDust
        *** shadow
       

        `)
        }else if(y === gardner){ 
        user.checkIn.castle.garden = true
        user.health += 250
        user.energy += 200
        user.property={}
        user.property.dancer =100
        user.tools={}
        user.tools.hammer = 100
        user.getSkill(dragonBreath, snakeRattle, splash)
        console.log(`

            
        Congratulations ${user.name}!


        Your energy is at ${user.energy} points
        Your health is at ${user.health} points

        _____________________________________________________

        You have two new properties!

        the dancer with ${user.property.dancer}  points
        .tools with a hammer ${user.tools.hammer} points
            
        Your status gives you access to the Ballroom
        ______________________________________________________

        You have uncovered 3 skills: 

        *** dragonBreath 
        *** snakeRattle 
        *** splash 
            
           
             
            `)   
        }else user.checkIn.castle.garden = undefined
        return

    }





    ballRoom(user,x){

        let yes = 'yes'
        let no = 'no'
        
        if(user.property == undefined){
        console.log(`
        






        ${this.name} BALLROOM
            
        My name is Richard, the supervisor of this room.

        Unfortunately ${user.name} you still dont have the properties that allows
        you to enter the Ballroom.
            
        Im pretty confident if you explore the Castle you may get your chance to 
        earn the right status !

        It will be a great Honor to have you with us.

        Good Luck !









            `)
        }else if (user.checkIn.castle.kitchen == undefined){
        console.log(`

        

        Hello ${user.name}.
            
        I see you managed to get your status for the Ballroom.

        Tonight its a wild night, everyone is getting ready, so the room
        is crazy and exciting.... as you can imagine !
            
        You must eat something before you can come into this
        room. Its a dogs world out there... you need to be at your best!
            
        The food at ${this.user} is delicious and Gaston le Chef, has 
        always the best menu in this region.
            
        Just go there, have some food, and no worries the party waits for you!

        Enjoy your meal and see you soon !

                                    
        go to the kitchen()

        



            `)
        }else {
        user.documents=[]
        user.documents.id = [1045,45,678,987,65,2075]
        user.checkIn.castle.ballRoom = true
        console.log(`

        ${this.name} Ballroom
    
        Richard the ballroom supervisor sees you, opens the door and with 
        open arms salutes you:

        Richard:

        Its a honor to have you with us ${user.name}!
        In a couple of moments all users will be called to the main room to 
        depart to the next destiny.

        ${user.name} ID = ${user.documents.id}

        Here, this is your ID. Dont ever loose this.
        This ID gets you into ... well everywhere !
        
        Enjoy the evening !

        
        You walk into the Big room, high nobel ceilings and modern art paintings 
        hanging on the wall. The room is Hot, everyone is having a good time, 
        sweat bodies, laugher and awesome energy in the room.

        The orchestra is in the middle of the room elevated from the ground. 
        Everybody dances wildly around the musicians. You look to the expressive 
        crowd and suddenly you realise your being watched. 
            
        You hear a friendly voice coming into your direction... Its Eliza... 
        you smile and wave at her.
            
        Eliza: 

        Hey ${user.name} old friend, long time no see you.... 
        Your looking so fresh these days, I can see your totally ready for your 
        next journey!  
            
        Did you manage to find any key ?

        ***

        you reply: 'yes' or 'no' . exp(${user.name},'...')

            
        `)
        }

        if (x === undefined) return

        if (x === no){
        user.keys = []
        user.keys.iza=[]
        user.keys.iza.push(1,3,4,10,100,45,2,12,2025)
        console.log(`

        Eliza stretches her hand and gives you a card.
                
        ${user.name} = Keys property = [${user.keys.iza}]

        I managed to hack a special key that no matter what city you go,  you will always have access 
        
        to the underground scene. The undergrounds of Cities are not  an easy place, 
        
        you know ${user.name} what they say is true:
                
        - One Mans Trash its other Mans treasure...  
                
        I have never forgotten the day you saved my ass at the strip-club. I was out of control... 

        facing my own death...... And you saved me from the worst fight of my journey.
                
        Im eternally grateful to you! 

        Eliza approaches you and gives you a tender kiss of appreciation!

        ****

        Suddenly the orchestra stopped to play and all the users started to walk

        into the main room.

        go to the mainRoom().
    
        `)
        }else if (x === yes){
        user.keys.iza=[]    
        user.keys.iza.push(1,3,4,10,100,45,2,12,2025)
        console.log(`





        Eliza stretches her hand and gives you a card.

        ${user.name} = new key [${user.keys.iza}]

        Eliza: 

        I managed to hack a special key that no matter what city you go, you will always have 

        access to the underground scene. The undergrounds of Cities are not an easy place...  

        You know ${user.name} what they say is true:
                
        - One Mans Trash its other Mans treasure...  
                
        I have never forgotten the day you saved my ass at the strip-club... I was out of control... 

        facing death... And you saved me from the worst fight of my journey!
                
        Im eternally grateful to you!

        Eliza approaches you and gives you a tender kiss of appreciation!

        Suddenly the orchestra stopped to play and all the users in the room started to walk to the main room.

                
        go to the mainRoom().

                
        `)

        }
    }

    


    mainRoom(user, x){
        
        if (user.documents === undefined){
        console.log(`

        ${this.name} MAin Room entrance.
             
        A flight attendant is at the door sitting on her desk! She organizes papers 
        and checks her computer. You get closer to the desk and she immediately recognizes you.
            
        Flight attendant:

        Oh my GOSH ! is this for real ? 
        Hi ${user.name} !  Finally I get to meet you ! Im such a huge fan of you.

        Sorry for being rude, my name is Charlie.
        I guess you want to check-in to your journey.... let me check in our data base...

        (Charlie takes a couple of seconds)
            
        Your profile is logged in and you have been registered to the next round of departures, 
        but we are missing your ID in our system... Im so sorry... 
            
        Unfortunately I cannot let you in without your ID. 
        Our system says that you have not been at the Ballroom.

        You should definitely go there.


            `)
        }else if( x === undefined){
        console.log(`

        WELCOME TO THE MAIN ROOM ! GET READY FOR DEPARTURE 

    
        The doors of the Main room are now wide open. The room is as wider as an Airport Terminal.

        There are multiple doors with different gate numbers. The atmosphere is tense, 

        everybody is getting ready....A Male flight attendant approaches you and introduces himself.

        Michael :
        
        Hello ${user.name}. My name is Michael and I am here to direct you to your gate.

        Can I have your your ID please ?

        ***
        You give him your ID exp(user, user.documents.id)




        `)
        }
        else if (x === user.documents.id){
        user.code = user.documents.id.reduce((a, b) => a + b)
            
        console.log(`

        
        Michael: 

        Your code is ${user.code}

        We have from your ID generated a code. Your code will go through several processes 

        as you progress in your journey. With your code you will access to the other cities 
        
        and other planets. This its the only way we can trace all your avatars so you can 
        
        return to ${this.name} Castle. Without this you will not be able to complete your tasks, 
        
        not even capable to return. Your gate is number 48.

        There is another college waiting for you at the gate. 
        
        Safe travel.

        go to gate(${user.name})

        
        `)
        } else return
    }
        



    gate(user,Number, user1, name, gender){
        console.log(`



        Gate 48 

        You arrive to the gate and you meet Zoe:

        Zoe: 

        Hi ${user.name}, you arrive just on time.
        
        Your avatar is ready to be initialized. Zoe takes you to a private room. 
        Inside there are a couple of doctors and engineers.
        
        You see your avatar.

        Zoe takes you near of a computer.
        
        Zoe: please type your code to start the process.

        
        exp: castle.gate(${user.name}, code)


        `)

        if (Number == undefined){
            return
        }

        if(Number === user.code){
        user.checkOut =[]
        user.avatar = []
        console.log(` 

        Zoe leaves you and closes the room.

        Initializing Avatar : ACTIVATED

        Prime data: user: ${user.name}. 
        
        One man with his face covered approaches you: 
        
        We have created 2 properties for you: Avatar and checkOut.

        If something goes wrong this properties can help to trace your avatar.
        
        Voice: Assignment process of avatar.
        
        you type in the computer:
        
        const 'avatar Name' = Object.create( your name )....

        then log again:

        castle.gate(user, user.code, avatar)








        `)

        }else if(Number !== user.code){
        console.log(`




        this code is not correct !

        Please console.log(${user.name} and check your code)






        `)
        }else return 
        
        
        if(user1){
        console.log(`



        
        Avatar Assigned. Please log your 'name', 'gender' 

        castle.gate(${user.name}, code, avatarname, 'name', 'gender' )






        `)
        }else return

        if(name,gender){
        user1.name = name
        user1.gender = gender
        console.log(`



        Avatar ${user1.name}, ${user1.gender} ready for data transmission.


        please go to the transferRoom()

        assign with your avatar name followed with your name

        transferenceRoom(${user1.name}, ${user.name})



        `)
        }
    }


    transferRoom(user, user1, str, x){
        console.log(`


        welcome to the transfer room.


        ${user1.name} prime data will now be transmitted to ${user.name}.

        Secret data will be over overshadow by the new one.


        In case your avatar fails to uncover your prime data.


        follow the emergency procedure. 
        
        Transference starts now...


        ....Transference achieved 
        
        please select your mission by typing 'enter' 

        castle.transfer(${user.name},${user1.name},'enter', 'cityname')

        if you dont feel ready for the mission please press enter
        
        
        
        `)

        user.code = user1.code
        user.health += user1.health
        user.energy += user1.energy
        user.credit = 45000,
        user.documents = []
            
            
        user.checkIn = undefined
        user.checkIn={}
        user.checkOut = user1.checkOut
           
        user.keys = user1.keys
                
        user.property = user1.property
        user.skills = user1.skills
    
        
        user.tools = user1.tools
        user.keys = user1.keys

    
        let destination = 'enter'

        if (str === destination){
        let city = Math.floor(Math.random() * 5);

        switch (city){
        case 1:
        console.log(`
            
            city red-pacific
            
            population: 108796.56473890.0987

            Mission: find agent Jefferson.

            assign the mission by type the name of the city

            castle.transfer(${user.name},${user1.name},'enter', 'cityname')

            
        `)
        break;
        case 2:
        console.log(`

            
            city neo-berlin
            
            population: 2345108796.56473890.0987

            Mission: Help Johanna... Lorem ipsum.

            assign the mission by type the name of the city

            caste.transfer(${user.name},${user1.name},'enter', 'cityname')
            
            
            
        `)
        break;
        case 3:
        console.log(`
            
            
            city athena-3056
            
            population: 78945108796.56473890.0987

            Mission: Destroy satelite... Lorem ipsum.

            assign the mission by type the name of the city

            caste.transfer(${user.name},${user1.name},'enter', 'cityname')
            
        `)
        break;
        case 4:
        console.log(`
            
            
            city sandMoon45

            population:23452345108796.56473890.0987

            Mission: Lorem ipsum.

            assign the mission by type the name of the city

            caste.transfer(${user.name},${user1.name},'enter', 'cityname')
            


        `)
        break;
        case 5:
        console.log(`
            
            
            city kepler-456-x
            
            population: 2345108796.56473890.0987

            Mission: Lorem Ipsum

            assign the mission by type the name of the city

            caste.transfer(${user.name},${user1.name},'enter', 'cityname')
            
            
        `)
        break;    
        }

        let select = x

        let cityOne ='red-pacific'
        let cityTwo ='neo-berlin'
        let cityThree = 'athena-3056'
        let cityFour = 'sandMoon45'
        let cityFive = 'kepler456x'

        if(select === cityOne){
        user.checkIn.redPacific = { register: undefined, one: undefined, two:undefined, three: undefined, four:undefined, departure:undefined}
        user.documents.id = Array.from(user.code.toString()).map((a) => a ** 5 )
        user.code = user.documents.id.reduce((a,b) => a + b)
        user1.avatar.push({name:user.name, code: user.code, id: user.documents.id.toString(user.documents.id), mission:'red-pacific', result:undefined})
        console.log(`





            destination confirmed

            departure initialized

            





        `)

        }else if( select === cityTwo){
        user.checkIn.neoBerlin = { register: undefined, one: undefined, two:undefined, three: undefined, four:undefined, departure:undefined}
        user.documents.id = Array.from(user.code.toString()).map((a) => a ** 6 )
        user.code = user.documents.id.reduce((a,b) => a + b)
        user1.avatar.push({name:user.name, code: user.code, id:user1.documents.id.toString(user.documents.id), mission:'neo-berlin', result:undefined})
        console.log(`





            destination confirmed

            departure initialized





        `)

        }else if (select === cityThree){
        user.checkIn.athena3056 = { register: undefined, one: undefined, two:undefined, three: undefined, four:undefined, departure:undefined}    
        user.documents.id = Array.from(user.code.toString()).map((a) => a ** 7 )
        user.code = user.documents.id.reduce((a,b) => a + b)
        user1.avatar.push({name:user.name,code:user.code, id: user.documents.id.toString(user.documents.id), mission:'athena-3056', result:undefined})
        console.log(`




            destination confirmed

            departure initialized





        `)

        }else if(select === cityFour){
        user.checkIn.sandMoon45 = { register: undefined, one: undefined, two:undefined, three: undefined, four:undefined, departure:undefined}    
        user.documents.id = Array.from(user.code.toString()).map((a) => a ** 8 )
        user.code = user.documents.id.reduce((a,b) => a + b)
        user1.avatar.push({name: user.name, code: user.code, id: user.documents.id.toString(user.documents.id), mission:'sandMoon45', result: undefined})
        console.log(`





            destination confirmed

            departure initialized






        `)

        }else if (select === cityFive){
        user.checkIn.kepler456x = { register: undefined, one: undefined, two:undefined, three: undefined, four:undefined, departure:undefined}    
        user.documents.id = Array.from(user.code.toString()).map((a) => a ** 9 )
        user.code = user.documents.id.reduce((a,b) => a + b)
        user1.avatar.push({name:user.name, code:user.code, id:user.documents.id.toString(user.documents.id), mission:'kepler456x', result:undefined})
        console.log(`






            destination confirmed

            departure initialized







        `)

        }else return



          }
    


        }

    

}

        
    



    

    

    
   




   





const castle = new Base('Rammstein')
//const pikachu = new Pokemon('pikachu', 40, 120)

// let lightning = new AttackSkill('lightning', 40, 30)
// let thunder = new AttackSkill('thunder', 40, 30)
// // console.log(lightning)
//const pikachu = new USER ('pikachu',' Rock And Roll Baby')
//const poisonIvy = new USER('Poison Ivy', 100, 120,'I wanna Kiss you till you DIE!!!')
//const castle = new LevelOne('Rammstein')
// //console.log(castle)
//pikachu.learnAttackSkill(skillsLibrary.skills.thunder2)

//pikachu.learnAttackSkill(skillsLibrary.skills.thunder)

//castle.garden(pikachu,)

//pikachu.learnAttackSkill(thunder)
//console.log(pikachu)





// let skills=["lightening",40,30]






 module.exports ={USER,Base,library} ;