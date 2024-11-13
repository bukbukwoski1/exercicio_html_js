document.getElementById('form-numeros').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    if (campoA > campoB) {
        alert('Sucesso: O número 1 é maior que o número 2.');
    } else {
        alert('Erro: O número 1 deve ser maior que o número 2.');
    }
});