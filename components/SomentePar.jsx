export default function SomentePar(props) {
    if (props.numero % 2 != 0) {
        return <h1 className="par">Ímpar : {props.numero}</h1>
    } else {
        return <h1 className="impar">Par : {props.numero}</h1>
    }
}