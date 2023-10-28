export default function repeticaoUm() {
    const listaAprovados = [
        'Ana',
        'Roberto',
        'Flávia',
        'Ricardo',
        'Antonio',
        'Débora'
    ]

    function renderizarLista() {
        const itens = []

        for (let i = 0; i < listaAprovados.length; i++) {
            itens.push(<li>{listaAprovados[i]}</li>)

        }

        return itens;
    }




    return (
        <>
            {renderizarLista()}
        </>
    )



}