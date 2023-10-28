export default function lista3() {
    return (
        <>
            {criar(100)}
        </>
    )
}

function criar(valor) {
    const listagem = [];
    for (let i = 1; i <= valor; i++) {
        listagem.push(<span>{i}<br></br></span>);
    }

    return listagem;



}