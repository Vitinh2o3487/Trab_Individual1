const calcular = document.getElementById('calcular');


function calculadora () {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const distancia = document.getElementById('distancia').value;
    const horas = document.getElementById('horas').value;
    const minutos = document.getElementById('minutos').value;
    const segundos = document.getElementById('segundos').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && peso !== '' && distancia !== '' && horas !== '' && minutos !== '' && segundos !== '') {

        const velocidade = (distancia/horas+(minutos/60)+((segundos/60)/60));
        const calorias = (velocidade*(minutos+(segundos/60)+(horas*60))*distancia);
        const pace = ((minutos+(segundos/60)+(horas*60))/distancia);
        
    

        resultado.textContent = `Olá ${nome}! Você percorreu ${distancia} km em ${horas} horas, ${minutos} minutos e ${segundos}. Isso quer dizer que a sua velocidade média foi de ${velocidade} km/h, o que o corresponde a um pace de ${pace} min/km. Com 70kg, você gastou cerca de ${calorias} call` ;

    }else {
        resultado.textContent = 'Para obter os resultados , preencha todos os campos.';
    }

}
calcular.addEventListener('click', calculadora);
