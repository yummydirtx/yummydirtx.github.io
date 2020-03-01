var ok = confirm('are you ready?');
if (ok){
alert('alright!');
alert('you are at home sleeping. you wake up. it is eerily quiet.');
alert('you go downstairs and realize your family is gone!');
var firstAnswer = prompt('What do you do? 1=call the police 2=text your mom 3=check your neigbors house 4=wait');
if (firstAnswer === '1'){
    alert('Nobody picks up... Strange. Suddenly you black out.');
    alert('Ending 1: Too many questions...');
} else if (firstAnswer === '2') {
    alert('As you text your mom you receive a text from an anonomous number that says: are you alive?');
    var secondAnswer = prompt('What do you do? 1=text back saying \'yeah! who are you?\' 2= ignore');
    if (secondAnswer === '1'){
        alert('you send the text and they don\'t respond');
        alert('suddenly you black out');
        alert('Ending 2: Are you alive?');
    }
    else if (secondAnswer === '2'){
        alert('you ignore it');
        alert('you get another text from the same number: DONT LIE TO ME HUMAN!!!! I KNOW YOU ARE ALIVE');
        var thirdAnswer = prompt('What do you do? 1=run away 2=smash your phone 3=ignore');
        if (thirdAnswer === '1'){
            alert('you run');
            alert('suddenly you fall');
            alert('the last thing you see is a black figure looming over you, then you black out');
            alert('ending 3: not quite human');
        } else if (thirdAnswer === '2'){
            alert('you smash your phone');
            alert('you walk outside');
            alert('you dont see anyone');
            alert('you walk around looking for someone, ANYONE');
            alert('but nobody is around');
            alert('suddenly someone emerges from the desert');
            alert('they are confused as to what happened as well');
            alert('you find out she had done the same thing you had');
            alert('you conclude it was electronics that had caused it, or at least was what was used');
            alert('you walk away into the sunrise with the person dreading the lonely years to come');
            alert('ending 4 : not exactly a happy ending...');
        } else if (thirdAnswer === '3'){
            alert('you keep on ignoring the number');
            alert('you hear someone coming up behind you and you turn around');
            alert('but not in time');
            alert('you fall to the ground and your vision fades...');
            alert('ending 5 : not to be ignored');
        } else {
            alert('you didn\'t answer!!!!');
        }
    } else {
        alert('you didn\'t answer. you lose.');
    }
} else if (firstAnswer === '3'){
    alert('you walk outside');
    alert('you walk to your neighbor\'s door');
    alert('suddenly you get a notification on your phone');
    var fourthAnswer = prompt('What do you do? 1=look down at your phone 2=ignore');
    if (fourthAnswer === '1'){
        alert('you look down at your phone');
        alert('you hear footsteps behind you');
        alert('you turn around quickly and accidently fling your phone');
        alert('your phone hits the... whatever that is...');
        alert('it gets knocked out');
        var fiveAnswer = prompt('What do you do? 1=Check the body 2=Check your phone 3=Run away');
        if (fiveAnswer === '1'){
            alert('you walk over to the body');
            var sixAnswer = prompt('it has a few weird objects on it. 1=pick them up 2=check your phone 3=Run away');
            if (sixAnswer === '1'){
                alert('you pick up the objects');
                alert('one of them starts to ring');
                alert('a voice comes out of it');
                alert('THE VOICE OF DONALD TRUMP');
                alert('hello?');
                alert('talk to me!');
                alert('alright we\'re teleporting you back to base');
                alert('then suddenly you are in a new weird location');
                alert('you hear troops coming');
                alert('you suddenly feel determined');
                alert('without thinking you run at them');
                alert('you take one of their guns');
                alert('one fires at you');
                alert('you fire back at them recklessly');
                alert('you win in a suprising turn of events');
                alert('you walk further into the base');
                alert('you find trump surrounded by guards');
                alert('you ask him to explain what is going on');
                alert('he looks at you suprised and then yells out "fire!!!!"');
                alert('you shoot the guards hands');
                alert('you ask trump again: "what is going on?"');
                alert('he looks nevous');
                alert('he says "alright"');
                alert('now what i am about to tell you may seem crazy');
                alert('insane even');
                alert('but i was promised great power and influence');
                alert('on their planet');
                alert('you stop, confused');
                alert('you ask: wait... their planet?');
                alert('who is they?');
                alert('donald explains: aliens. aliens came to earth');
                alert('they came in peacefully asking to see me');
                alert('the fbi brought them here quickly');
                alert('it told me they needed our planet');
                alert('and we needed to rid it of human life');
                alert('in exchange i get power and control on their planet');
                alert('it said that if I didn\'t do it then it would blow up the planet');
                alert('whatever it needed the earth for it couldn\'t be infested with humans to do it');
                alert('we came up with a plan');
                alert('we use phones to track people');
                alert('if the camera\'s camera picked up a human eye it would send a signal for an alien to come down and eradicate it');
                var trueFinal = prompt('Do you forgive him.... 1=forgive 2=FINISH HIM');
                if (trueFinal === '1') {
                    alert('you tell him: everyone makes mistakes');
                    alert('you go to the distant planet with him and live a lush life');
                    alert('Ending 6: friendly true ending');
                } else if (trueFinal === '2'){
                    alert('you bring up the gun');
                    alert('you killed my friends');
                    alert('you killed my family');
                    alert('are you proud of yourself?');
                    alert('See you in hell');
                    alert('you close your eyes and pull the trigger');
                    alert('you walk away into a lonely life');
                    alert('Ending 7: Lonely true ending');
                } else {
                    alert('you didn\'t answer. you lose');
                }
            } else if (sixAnswer === '2'){
                alert('you look at your phone');
                alert('suddenly your vision fades');
                alert('Ending 8: what was that thing?');
            } else if (sixAnswer === '3'){
                alert('you run away');
                alert('as you are running you trip');
                alert('you can\'t walk');
                alert('you hear footsteps behind you');
                alert('your vision fades away...');
                alert('Ending 9: You can\'t run and you can\'t hide');
            } else {
                alert('you didn\'t answer');
            }
        } else if (fiveAnswer === '2'){
            alert('you look at your phone');
                alert('suddenly your vision fades');
                alert('Ending 8: what was that thing?');
        } else if (fiveAnswer === '3'){
            alert('you run away');
                alert('as you are running you trip');
                alert('you can\'t walk');
                alert('you hear footsteps behind you');
                alert('your vision fades away...');
                alert('Ending 9: You can\'t run and you can\'t hide');
        } else {
            alert('you didn\'t answer');
        }
    } else if (fourthAnswer === '2'){
        alert('you knock on the neighbors door');
        alert('you wait...');
        alert('eventually you get bored');
        alert('you look down at your phone');
        alert('you hear footsteps behind you');
        alert('you turn around quickly and accidently fling your phone');
        alert('your phone hits the... whatever that is...');
        alert('it gets knocked out');
        var fiveAnswer = prompt('What do you do? 1=Check the body 2=Check your phone 3=Run away');
        if (fiveAnswer === '1'){
            alert('you walk over to the body');
            var sixAnswer = prompt('it has a few weird objects on it. 1=pick them up 2=check your phone 3=Run away');
            if (sixAnswer === '1'){
                alert('you pick up the objects');
                alert('one of them starts to ring');
                alert('a voice comes out of it');
                alert('THE VOICE OF DONALD TRUMP');
                alert('hello?');
                alert('talk to me!');
                alert('alright we\'re teleporting you back to base');
                alert('then suddenly you are in a new weird location');
                alert('you hear troops coming');
                alert('you suddenly feel determined');
                alert('without thinking you run at them');
                alert('you take one of their guns');
                alert('one fires at you');
                alert('you fire back at them recklessly');
                alert('you win in a suprising turn of events');
                alert('you walk further into the base');
                alert('you find trump surrounded by guards');
                alert('you ask him to explain what is going on');
                alert('he looks at you suprised and then yells out "fire!!!!"');
                alert('you shoot the guards hands');
                alert('you ask trump again: "what is going on?"');
                alert('he looks nevous');
                alert('he says "alright"');
                alert('now what i am about to tell you may seem crazy');
                alert('insane even');
                alert('but i was promised great power and influence');
                alert('on their planet');
                alert('you stop, confused');
                alert('you ask: wait... their planet?');
                alert('who is they?');
                alert('donald explains: aliens. aliens came to earth');
                alert('they came in peacefully asking to see me');
                alert('the fbi brought them here quickly');
                alert('it told me they needed our planet');
                alert('and we needed to rid it of human life');
                alert('in exchange i get power and control on their planet');
                alert('it said that if I didn\'t do it then it would blow up the planet');
                alert('whatever it needed the earth for it couldn\'t be infested with humans to do it');
                alert('we came up with a plan');
                alert('we use phones to track people');
                alert('if the camera\'s camera picked up a human eye it would send a signal for an alien to come down and eradicate it');
                var trueFinal = prompt('Do you forgive him.... 1=forgive 2=FINISH HIM');
                if (trueFinal === '1') {
                    alert('you tell him: everyone makes mistakes');
                    alert('you go to the distant planet with him and live a lush life');
                    alert('Ending 6: friendly true ending');
                } else if (trueFinal === '2'){
                    alert('you bring up the gun');
                    alert('you killed my friends');
                    alert('you killed my family');
                    alert('are you proud of yourself?');
                    alert('See you in hell');
                    alert('you close your eyes and pull the trigger');
                    alert('you walk away into a lonely life');
                    alert('Ending 7: Lonely true ending');
                } else {
                    alert('you didn\'t answer. you lose');
                }
            } else if (sixAnswer === '2'){
                alert('you look at your phone');
                alert('suddenly your vision fades');
                alert('Ending 8: what was that thing?');
            } else if (sixAnswer === '3'){
                alert('you run away');
                alert('as you are running you trip');
                alert('you can\'t walk');
                alert('you hear footsteps behind you');
                alert('your vision fades away...');
                alert('Ending 9: You can\'t run and you can\'t hide');
            } else {
                alert('you didn\'t answer');
            }
        } else if (fiveAnswer === '2'){
            alert('you look at your phone');
                alert('suddenly your vision fades');
                alert('Ending 8: what was that thing?');
        } else if (fiveAnswer === '3'){
            alert('you run away');
                alert('as you are running you trip');
                alert('you can\'t walk');
                alert('you hear footsteps behind you');
                alert('your vision fades away...');
                alert('Ending 9: You can\'t run and you can\'t hide');
        } else {
            alert('you didn\'t answer');
        }
    }
} else if (firstAnswer === '4'){
    alert('you wait... nothing happens');
var firstAnswer = prompt('What do you do? 1=call the police 2=text your mom 3=check your neigbors house');
if (firstAnswer === '1'){
    alert('Nobody picks up... Strange. Suddenly you black out.');
    alert('Ending 1: Too many questions...');
} else if (firstAnswer === '2') {
    alert('As you text your mom you receive a text from an anonomous number that says: are you alive?');
    var secondAnswer = prompt('What do you do? 1=text back saying \'yeah! who are you?\' 2= ignore');
    if (secondAnswer === '1'){
        alert('you send the text and they don\'t respond');
        alert('suddenly you black out');
        alert('Ending 2: Are you alive?');
    }
    else if (secondAnswer === '2'){
        alert('you ignore it');
        alert('you get another text from the same number: DONT LIE TO ME HUMAN!!!! I KNOW YOU ARE ALIVE');
        var thirdAnswer = prompt('What do you do? 1=run away 2=smash your phone 3=ignore');
        if (thirdAnswer === '1'){
            alert('you run');
            alert('suddenly you fall');
            alert('the last thing you see is a black figure looming over you, then you black out');
            alert('ending 3: not quite human');
        } else if (thirdAnswer === '2'){
            alert('you smash your phone');
            alert('you walk outside');
            alert('you dont see anyone');
            alert('you walk around looking for someone, ANYONE');
            alert('but nobody is around');
            alert('suddenly someone emerges from the desert');
            alert('they are confused as to what happened as well');
            alert('you find out she had done the same thing you had');
            alert('you conclude it was electronics that had caused it, or at least was what was used');
            alert('you walk away into the sunrise with the person dreading the lonely years to come');
            alert('ending 4 : not exactly a happy ending...');
        } else if (thirdAnswer === '3'){
            alert('you keep on ignoring the number');
            alert('you hear someone coming up behind you and you turn around');
            alert('but not in time');
            alert('you fall to the ground and your vision fades...');
            alert('ending 5 : not to be ignored');
        } else {
            alert('you didn\'t answer!!!!');
        }
    } else {
        alert('you didn\'t answer. you lose.');
    }
} else if (firstAnswer === '3'){
    alert('you walk outside');
    alert('you walk to your neighbor\'s door');
    alert('suddenly you get a notification on your phone');
    var fourthAnswer = prompt('What do you do? 1=look down at your phone 2=ignore');
    if (fourthAnswer === '1'){
        alert('you look down at your phone');
        alert('you hear footsteps behind you');
        alert('you turn around quickly and accidently fling your phone');
        alert('your phone hits the... whatever that is...');
        alert('it gets knocked out');
        var fiveAnswer = prompt('What do you do? 1=Check the body 2=Check your phone 3=Run away');
        if (fiveAnswer === '1'){
            alert('you walk over to the body');
            var sixAnswer = prompt('it has a few weird objects on it. 1=pick them up 2=check your phone 3=Run away');
            if (sixAnswer === '1'){
                alert('you pick up the objects');
                alert('one of them starts to ring');
                alert('a voice comes out of it');
                alert('THE VOICE OF DONALD TRUMP');
                alert('hello?');
                alert('talk to me!');
                alert('alright we\'re teleporting you back to base');
                alert('then suddenly you are in a new weird location');
                alert('you hear troops coming');
                alert('you suddenly feel determined');
                alert('without thinking you run at them');
                alert('you take one of their guns');
                alert('one fires at you');
                alert('you fire back at them recklessly');
                alert('you win in a suprising turn of events');
                alert('you walk further into the base');
                alert('you find trump surrounded by guards');
                alert('you ask him to explain what is going on');
                alert('he looks at you suprised and then yells out "fire!!!!"');
                alert('you shoot the guards hands');
                alert('you ask trump again: "what is going on?"');
                alert('he looks nevous');
                alert('he says "alright"');
                alert('now what i am about to tell you may seem crazy');
                alert('insane even');
                alert('but i was promised great power and influence');
                alert('on their planet');
                alert('you stop, confused');
                alert('you ask: wait... their planet?');
                alert('who is they?');
                alert('donald explains: aliens. aliens came to earth');
                alert('they came in peacefully asking to see me');
                alert('the fbi brought them here quickly');
                alert('it told me they needed our planet');
                alert('and we needed to rid it of human life');
                alert('in exchange i get power and control on their planet');
                alert('it said that if I didn\'t do it then it would blow up the planet');
                alert('whatever it needed the earth for it couldn\'t be infested with humans to do it');
                alert('we came up with a plan');
                alert('we use phones to track people');
                alert('if the camera\'s camera picked up a human eye it would send a signal for an alien to come down and eradicate it');
                var trueFinal = prompt('Do you forgive him.... 1=forgive 2=FINISH HIM');
                if (trueFinal === '1') {
                    alert('you tell him: everyone makes mistakes');
                    alert('you go to the distant planet with him and live a lush life');
                    alert('Ending 6: friendly true ending');
                } else if (trueFinal === '2'){
                    alert('you bring up the gun');
                    alert('you killed my friends');
                    alert('you killed my family');
                    alert('are you proud of yourself?');
                    alert('See you in hell');
                    alert('you close your eyes and pull the trigger');
                    alert('you walk away into a lonely life');
                    alert('Ending 7: Lonely true ending');
                } else {
                    alert('you didn\'t answer. you lose');
                }
            } else if (sixAnswer === '2'){
                alert('you look at your phone');
                alert('suddenly your vision fades');
                alert('Ending 8: what was that thing?');
            } else if (sixAnswer === '3'){
                alert('you run away');
                alert('as you are running you trip');
                alert('you can\'t walk');
                alert('you hear footsteps behind you');
                alert('your vision fades away...');
                alert('Ending 9: You can\'t run and you can\'t hide');
            } else {
                alert('you didn\'t answer');
            }
        } else if (fiveAnswer === '2'){
            alert('you look at your phone');
                alert('suddenly your vision fades');
                alert('Ending 8: what was that thing?');
        } else if (fiveAnswer === '3'){
            alert('you run away');
                alert('as you are running you trip');
                alert('you can\'t walk');
                alert('you hear footsteps behind you');
                alert('your vision fades away...');
                alert('Ending 9: You can\'t run and you can\'t hide');
        } else {
            alert('you didn\'t answer');
        }
    } else if (fourthAnswer === '2'){
        alert('you knock on the neighbors door');
        alert('you wait...');
        alert('eventually you get bored');
        alert('you look down at your phone');
        alert('you hear footsteps behind you');
        alert('you turn around quickly and accidently fling your phone');
        alert('your phone hits the... whatever that is...');
        alert('it gets knocked out');
        var fiveAnswer = prompt('What do you do? 1=Check the body 2=Check your phone 3=Run away');
        if (fiveAnswer === '1'){
            alert('you walk over to the body');
            var sixAnswer = prompt('it has a few weird objects on it. 1=pick them up 2=check your phone 3=Run away');
            if (sixAnswer === '1'){
                alert('you pick up the objects');
                alert('one of them starts to ring');
                alert('a voice comes out of it');
                alert('THE VOICE OF DONALD TRUMP');
                alert('hello?');
                alert('talk to me!');
                alert('alright we\'re teleporting you back to base');
                alert('then suddenly you are in a new weird location');
                alert('you hear troops coming');
                alert('you suddenly feel determined');
                alert('without thinking you run at them');
                alert('you take one of their guns');
                alert('one fires at you');
                alert('you fire back at them recklessly');
                alert('you win in a suprising turn of events');
                alert('you walk further into the base');
                alert('you find trump surrounded by guards');
                alert('you ask him to explain what is going on');
                alert('he looks at you suprised and then yells out "fire!!!!"');
                alert('you shoot the guards hands');
                alert('you ask trump again: "what is going on?"');
                alert('he looks nevous');
                alert('he says "alright"');
                alert('now what i am about to tell you may seem crazy');
                alert('insane even');
                alert('but i was promised great power and influence');
                alert('on their planet');
                alert('you stop, confused');
                alert('you ask: wait... their planet?');
                alert('who is they?');
                alert('donald explains: aliens. aliens came to earth');
                alert('they came in peacefully asking to see me');
                alert('the fbi brought them here quickly');
                alert('it told me they needed our planet');
                alert('and we needed to rid it of human life');
                alert('in exchange i get power and control on their planet');
                alert('it said that if I didn\'t do it then it would blow up the planet');
                alert('whatever it needed the earth for it couldn\'t be infested with humans to do it');
                alert('we came up with a plan');
                alert('we use phones to track people');
                alert('if the camera\'s camera picked up a human eye it would send a signal for an alien to come down and eradicate it');
                var trueFinal = prompt('Do you forgive him.... 1=forgive 2=FINISH HIM');
                if (trueFinal === '1') {
                    alert('you tell him: everyone makes mistakes');
                    alert('you go to the distant planet with him and live a lush life');
                    alert('Ending 6: friendly true ending');
                } else if (trueFinal === '2'){
                    alert('you bring up the gun');
                    alert('you killed my friends');
                    alert('you killed my family');
                    alert('are you proud of yourself?');
                    alert('See you in hell');
                    alert('you close your eyes and pull the trigger');
                    alert('you walk away into a lonely life');
                    alert('Ending 7: Lonely true ending');
                } else {
                    alert('you didn\'t answer. you lose');
                }
            } else if (sixAnswer === '2'){
                alert('you look at your phone');
                alert('suddenly your vision fades');
                alert('Ending 8: what was that thing?');
            } else if (sixAnswer === '3'){
                alert('you run away');
                alert('as you are running you trip');
                alert('you can\'t walk');
                alert('you hear footsteps behind you');
                alert('your vision fades away...');
                alert('Ending 9: You can\'t run and you can\'t hide');
            } else {
                alert('you didn\'t answer');
            }
        } else if (fiveAnswer === '2'){
            alert('you look at your phone');
                alert('suddenly your vision fades');
                alert('Ending 8: what was that thing?');
        } else if (fiveAnswer === '3'){
            alert('you run away');
                alert('as you are running you trip');
                alert('you can\'t walk');
                alert('you hear footsteps behind you');
                alert('your vision fades away...');
                alert('Ending 9: You can\'t run and you can\'t hide');
        } else {
            alert('you didn\'t answer');
        }
    }
} else{
    alert('you didn\'t answer');
}
} else{
    alert('you didn\'t answer');
}
} else {
    alert('ok... come back another time');
}