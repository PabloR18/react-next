import listaProdutos from "@/data/listaProdutos"

export default function repeticaoDois() {

    function renderizarLinhas() {
        return listaProdutos.map((produto) => {
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        })
    }

    return (
        <>
            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </>
    )
}