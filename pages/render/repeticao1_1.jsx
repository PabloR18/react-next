export default function repeticaoUm_Um() {

    const listaAprovados = [
        'Carlos',
        'Maria',
        'Paulo',
        'Ricardo',
        'Andréia',
        'Fernando',
        'Pablo'
    ]

    function renderizarLista() {

        return listaAprovados.map((nome, i) => <li>{nome}</li>);
    }

    return (
        <>
            {renderizarLista()}
        </>
    )
}