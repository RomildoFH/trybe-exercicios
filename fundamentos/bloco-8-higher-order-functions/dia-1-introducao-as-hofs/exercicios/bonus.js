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
    let dano = Math.floor(Math.random() * ((dragon.strength) - 15 + 1) ) + 15;
    dragon.damage = dano;
  }

  const warriorDamage = () => {
    let dano = Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1) ) + warrior.strength;
    warrior.damage = dano;
  }

const mageDamage = () => {
    let damage = 0;
    if(mage.mana > 15) {
        damage = Math.floor(Math.random() * ((mage.intelligence) * 2 - mage.intelligence + 1) ) + mage.intelligence;        
    }
    return damage;
}

const mageManaRefresh = () => {
    if(mage.mana > 15) {
        mage.mana = mage.mana - 15;
    } else {        
        mage.mana = mage.mana - 0;
        return(`Não possui mana suficiente`);
    }
    return mage.mana;
}

const mageDamageAndManaSpent = () => {    
        mage.damage = mageDamage();
        mage.mana = mageManaRefresh();
}

 const nextTurn = () => {
    dragonDamage();
    warriorDamage();
    mageDamageAndManaSpent();
 }
 console.log(battleMembers);
 nextTurn();
 console.log(battleMembers);
 nextTurn();
 console.log(battleMembers);