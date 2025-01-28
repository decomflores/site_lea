document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('interestForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Pegue os valores dos campos do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Prepare os dados a serem enviados
        const data = {
            name: name,
            email: email,
            phone: phone
        };

        // URL do seu script Google Apps
        const googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbxCg0q6N-J2eUhi8NPjtwlYl4Mt-jtYtCTwpM2OACHFqn8RPlCvKA6dPxDwl6HnJguR/exec';

        // Envia os dados para o Google Apps Script usando fetch (POST)
        fetch(googleAppsScriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data).toString() // Converte os dados para o formato application/x-www-form-urlencoded
        })
        .then(response => response.text())  // Recebe como texto
        .then(responseText => {
            const responseData = JSON.parse(responseText);  // Converte o texto em JSON
            console.log('Dados enviados para o Google Sheets com sucesso!', responseData);
            alert('Formulário enviado com sucesso!');

            // Fecha o modal após o envio bem-sucedido
            const modal = bootstrap.Modal.getInstance(document.getElementById('interestModal'));
            modal.hide();
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
            alert('Ocorreu um erro ao enviar os dados.');
        });
    });
});