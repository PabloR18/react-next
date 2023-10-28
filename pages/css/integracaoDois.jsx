import css from "./integracaoDois.module.css"

export default function integracaoDois() {

    return (
        <>
            <div>
                <div className={css.vermelho}>Texto #01</div>
                <div className={css.amarelo}>Texto #02</div>
                <div className={css.verde}>Texto #03</div>
            </div>
        </>
    )
}