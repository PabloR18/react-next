export default function Filho(props) {

    return (
        <>
            <div style={{ display: "flex", alignItems: "center" }}>
                <section>{props.nome} {props.familia}</section>
            </div>
        </>
    )
}