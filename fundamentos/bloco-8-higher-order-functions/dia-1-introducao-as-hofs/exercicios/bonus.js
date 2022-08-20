const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonDamage = () => {
    if(dragon.healthPoints > 0) {
        let dano = Math.floor(Math.random() * ((dragon.strength) - 15 + 1) ) + 15;
        dragon.damage = dano;
    } else {
        dragon.damage = 0;
    }
  }

  const warriorDamage = () => {
    if(warrior.healthPoints > 0 && dragon.healthPoints > 0) {
        let dano = Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1) ) + warrior.strength;
        warrior.damage = dano;
    } else {
        warrior.damage = 0;
    }
  }

const mageDamage = () => {
    let damage = 0;
    if(mage.mana > 15 && dragon.healthPoints > 0) {
        damage = Math.floor(Math.random() * ((mage.intelligence) * 2 - mage.intelligence + 1) ) + mage.intelligence;   
        mage.damage = damage;     
    } else {
        mage.damage = 0;
    }
    return mage.damage;
}

const mageManaRefresh = () => {
    if(mage.mana > 15 && mage.healthPoints > 0) {
        mage.mana = mage.mana - 15;
    } else {        
        mage.mana = mage.mana - 0;
        mage.mana = `Não possui mana suficiente`;
    }
    return mage.mana;
}

const mageDamageAndManaSpent = () => {    
    mage.mana = mageManaRefresh();
    mage.damage = mageDamage();
        
}

const dragonHealth = () => {
    dragon.healthPoints = dragon.healthPoints - (warrior.damage + mage.damage);    
}
const warriorHealth = () => {
    warrior.healthPoints = warrior.healthPoints - dragon.damage;    
}
const mageHealth = () => {
    mage.healthPoints = mage.healthPoints - dragon.damage;    
}

 const nextTurn = () => {
    if(dragon.healthPoints > 0) {
        dragonDamage();   
        warriorDamage();
        mageDamageAndManaSpent();
        dragonHealth();
        warriorHealth();
        mageHealth();
        console.log(battleMembers);
    } else {
        warrior.damage = 0;
        mage.damage = 0;
        dragon.damage = 0;
        console.log(battleMembers);
        console.log(`Congratulations, you win!!`);
    }
 }
 nextTurn();
 nextTurn();
 nextTurn();
 nextTurn();
 nextTurn();
 nextTurn();