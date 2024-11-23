/*Após efetuar o login o usuário é direcionado para a página inicial do site*/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });
})

/*Modal - "Produto adicionado do carrinho"*/

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.botao-add-carrinho');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById('modal').style.display = 'block';
        });
    });

    document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});