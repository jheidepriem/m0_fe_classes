// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class unicorn {
  constructor(name, color, say){
  this.name = name;
  this.color = "green";
  this.say = say;
}
  changeSay(newsay) {
  this.say = newsay;
  }

}
  var Unicorn1 = new unicorn("Uniballoony");
  Unicorn1.changeSay("*~*");
    console.log(Unicorn1);



// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false
class vampire {
  constructor(name){
  this.name = name
  this.pet = "bat"
  this.thirsty = true
}
  changeThirsty(newthirsty) {
      this.thirsty = newthirsty;
    }
    changePet(newpet){
      this.pet = newpet;
    }
}
  var vampire1 = new vampire("dracula");
  vampire1.changeThirsty(false);
  vampire1.changePet("dog")
  console.log(vampire1);


//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson

class Dragon {
  constructor(name, rider, color) {
  this.name = name
  this.rider = rider
  this.color = color
  this.eat = 1;
  this.isHungry = true;
  }
  changEat(neweat) {
      this.eat = neweat;
        if (this.eat >= 4) {
        this.isHungry = false
      }
  }

}
  var Dragon1 = new Dragon("gary", "susan", "red" );
  Dragon1.changeEat(8);
  console.log(Dragon1);



//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.



class Hobbit {
  constructor(name, disposition) {
    this.name = name;
    this.disposition = disposition;
    this.age = 0;
    this.isAdult = false;
    this.isOld = false;
    this.hasRing = false;
  }
  changeAge(newage) {
      this.age = newage;
        if (this.age >= 33) {
        this.isAdult = true
      }
  }
  changeName(newname) {
      this.name = newname;
      }
  hasBirthday() {
    this.age++
  }
  checkForRing() {
    if (this.name === "Frodo") {
    this.hasRing = true
      }
  }

}
var Hobbit1 = new Hobbit("Frodo", "cheerful");
  Hobbit1.changeAge(35);
  Hobbit1.changeName("samuel");
  Hobbit1.hasBirthday();
  Hobbit1.checkForRing();
    console.log(Hobbit1);
