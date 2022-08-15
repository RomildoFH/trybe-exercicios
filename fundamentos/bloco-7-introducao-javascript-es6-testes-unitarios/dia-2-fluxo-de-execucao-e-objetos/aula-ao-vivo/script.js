// let month = 2;

const getNumberOfDays = (month) => {
    // console.log(typeof month)
    switch (parseInt(month)) {
        case 1:
            return (31);

        case 2:
            return (28);

        case 3:
            return (30);

        case 4:
            return (31);

        case 5:
            return (30);

        case 6:
            return (31);

        case 7:
            return (30);

        case 8:
            return (31);

        case 9:
            return (30);

        case 10:
            return (31);

        case 11:
            return (30);

        case 12:
            return (31);
        default:
            // return `Mês inválido`
            throw new Error('Mês Inválido');
    }
}

const textParagrapher = () => {
    try {
        const month = document.getElementById('month').value;
        const result = document.getElementById('result');

        result.innerText = `O mês ${month} tem ${getNumberOfDays(month)} dias`;

        // Limpando o input após mostrar resultado do try (Caso atenda requisitos e não dê erro)
        // document.getElementById('month').value = '';
    }
    catch (erro) {
        console.log(erro.message);
        result.innerText = erro.message;
    } finally {
        // Limpando o input após execução independente do resultado
        document.getElementById('month').value = '';
    }
}

window.onload = () => {
    const button = document.getElementById('button');

    button.addEventListener('click', textParagrapher);
}

// console.log(getNumberOfDays(month));