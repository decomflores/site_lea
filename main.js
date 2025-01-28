document.getElementById('interestForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
    };

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwnX0-UIrkx3cSZVkWpbFAQjWyMygXHsGEfbS6M4bV1hK9gxymvR086ynVId333Me3UGQ/exec', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
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
