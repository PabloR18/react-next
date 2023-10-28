import styles from '@/styles/Home.module.css'

export default function jsx4() {
    const subtitulo = 'Estou no javaScript';
    let outroSubtitulo = 'Continuo no JavaScript';

    return (
        <div>
            <h1 className='vermelho'>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h2>{outroSubtitulo}</h2>
            <h3>{12 * 9}</h3>
            <h4>{Math.max(25, 29, 30)}</h4>
            <h5>{Math.min(90, 50, 35)}</h5>
            <h5>{entre(56, 40, 100)}</h5>
        </div>
    )

    function entre(valor, min, max) {
        if (valor >= min && valor <= max) {
            return `o número ${valor} esta entre ${min} e ${max}`
        } else {
            return `o número ${valor} não esta entre ${min} e ${max}`
        }
    }

}

