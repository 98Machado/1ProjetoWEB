// Pega elementos do DOM
const btns = document.querySelectorAll('.botoes button');
const imgs = document.querySelectorAll('.imagens img');

// Adiciona um evento de clicar para todos os botões
btns.forEach(btn => {
    btn.addEventListener('click', filterImg);
});

// Deixa ativado botão ao clicar
function setActiveBtn(e) {
    // Remove a classe ativa para todos os botões
    btns.forEach(btn => {
        btn.classList.remove('btn-clicked');
    });

    // Adiciona classe ativada ao botão clicado
    e.target.classList.add('btn-clicked');
}

// Filtra imagens
function filterImg(e) {
    // Roda a função do botão ativado
    setActiveBtn(e);

    // Pega o tipo do botão clicado
    const btnType = parseInt(e.target.dataset.btn);

    // Percorre todas as imagens
    imgs.forEach(img => {
        // Expande todas as imagens
        img.classList.remove('img-shrink');
        img.classList.add('img-expand');

        // Pega a data do tipo da imagem
        const imgType = parseInt(img.dataset.img);

        // Se o tipo da imagem e o tipo do botão não são iguais, esconde a imagem
        if (btnType !== 1 && imgType !== btnType) {
            img.classList.remove('img-expand');
            img.classList.add('img-shrink');
        }
    });
}


// TESTE TESTE

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.galeria img');
    images.forEach(image => {
        image.addEventListener('click', () => {
            const imgSrc = image.src;
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${imgSrc}" alt="Imagem ampliada">
                </div>
            `;
            document.body.appendChild(modal);

            const closeModal = modal.querySelector('.close');
            closeModal.addEventListener('click', () => {
                modal.remove();
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });
});