function calcular() {
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    const distancia = parseFloat(document.getElementById("distancia").value);
    const preco = parseFloat(document.getElementById("preco").value); // Preço único do combustível
    const tipoCombustivel = document.getElementById("tipoCombustivel").value;
    const capacidadeTanque = parseFloat(document.getElementById("capacidadeTanque").value);

    // Verifica se todos os campos foram preenchidos corretamente
    if (isNaN(distancia) || isNaN(preco) || isNaN(capacidadeTanque) || !origem || !destino) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let consumoMedio, gastoTotalIda, gastoTotalIdaVolta;

    // Define o consumo médio com base no tipo de combustível
    switch (tipoCombustivel) {
        case 'alcool':
            consumoMedio = 7.5; // Consumo médio de álcool (km/l)
            break;
        case 'gasolina':
            consumoMedio = 10.0; // Consumo médio de gasolina (km/l)
            break;
        case 'diesel':
            consumoMedio = 12.0; // Consumo médio de diesel (km/l)
            break;
        default:
            alert("Tipo de combustível inválido.");
            return;
    }

    // Cálculo para a ida (distância única)
    const litrosNecessariosIda = distancia / consumoMedio;
    gastoTotalIda = litrosNecessariosIda * preco;

    // Cálculo para ida e volta (distância * 2)
    const litrosNecessariosIdaVolta = (distancia * 2) / consumoMedio;
    gastoTotalIdaVolta = litrosNecessariosIdaVolta * preco;

    // Exibe o resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
    <p style="color: white;">Origem: ${origem}</p>
    <p style="color: white;">Destino: ${destino}</p>
    <p style="color: white;">Distância (Ida e Volta): ${distancia * 2} km</p>
    <p style="color: white;">Consumo Médio: ${consumoMedio} km/l</p>
    <p style="color: white;">Preço Combustível: R$ ${preco.toFixed(2)} por litro</p>
    <p style="color: white;">Litros necessários (Ida e Volta): ${Math.round(litrosNecessariosIdaVolta)} litros</p>
    <p><strong style="color: #FF6347;">Custo da Ida: R$ ${gastoTotalIda.toFixed(2)}</strong></p> <!-- Tom de vermelho suave -->
    <p><strong style="color: #FF6347;">Custo Total (Ida e Volta): R$ ${gastoTotalIdaVolta.toFixed(2)}</strong></p> <!-- Tom de vermelho suave -->
    `;
}
