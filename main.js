document.getElementById('interestForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
    };

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzfAzkLXm966czbs6DF9-x9bzBAZ7QGmeYKERMVJE-NrF1uS0TGJN9MPpOJC34nS12fEA/exec', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
            mode: 'no-cors',
        });

        if (response.ok) {
            alert('Formulário enviado com sucesso!');
            document.getElementById('interestForm').reset();
            new bootstrap.Modal(document.getElementById('interestModal')).hide();
        } else {
            alert('Erro ao enviar o formulário. Tente novamente.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar o formulário. Verifique sua conexão.');
    }
});
