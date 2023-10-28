function acao1() {
    console.log("Morango 1")
}

export default function botao(props) {
    function acao2() {
        console.log("Morango 2")
    }

    function acao5(e) {
        console.log(e)
    }

    return (
        <>
            <button onClick={acao1}>Click 01</button>
            <button onClick={acao2}>Click 02</button>

            {/*Função anônima*/}
            <button onClick={function () { console.log("Morango 3") }}>Click 03</button>

            {/*Função Arrow*/}
            <button onClick={() => console.log("Morango 4")}>Click 04</button>
            <button onClick={() => alert("Adriano Gay")}>Click 04(V2)</button>

            {/*Função com Evento*/}
            <button onClick={acao5}>Click 05</button>
            <button onClick={e => acao5(e.altKey)}>Click 05(V2)</button>
        </>
    )
}