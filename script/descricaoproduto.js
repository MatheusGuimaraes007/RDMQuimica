export default function descricao() {
    const descricao = Array.from(document.querySelectorAll('.produto-descricao span'));
    const produto = Array.from(document.querySelectorAll('.produto-descricao'))

    const showProduto0 = () => {
        descricao[0].classList.toggle('showDescricao');
    }
    produto[0].addEventListener('click' , showProduto0)

    const showProduto1 = () => {
        descricao[1].classList.toggle('showDescricao');
    }
    produto[1].addEventListener('click' , showProduto1)

    const showProduto2 = () => {
        descricao[2].classList.toggle('showDescricao');
    }
    produto[2].addEventListener('click' , showProduto2)

    const showProduto3 = () => {
        descricao[3].classList.toggle('showDescricao');
    }
    produto[3].addEventListener('click' , showProduto3)

    const showProduto4 = () => {
        descricao[4].classList.toggle('showDescricao');
    }
    produto[4].addEventListener('click' , showProduto4)

    const showProduto5 = () => {
        descricao[5].classList.toggle('showDescricao');
    }
    produto[5].addEventListener('click' , showProduto5)
    
}