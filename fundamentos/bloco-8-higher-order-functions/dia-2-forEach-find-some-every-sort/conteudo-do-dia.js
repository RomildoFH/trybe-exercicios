// forEach - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email, index, array) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
    console.log(`Na posição ${index}`);
    console.log(`Em uma lista de ${array.length} emails.`);
  };
  
  // Adicione seu código aqui

  emailListInData.forEach((element, indexOfTheArray, theEntireArray) => {
    showEmailList(element, indexOfTheArray, theEntireArray);
  });