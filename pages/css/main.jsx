import estilo from "./main.module.css"
import Titulo from "@/components/Titulo"
import Subtitulo from "@/components/Subtitulo"
import Descricao from "@/components/Descricao"
import Imagens from "@/components/Imagens"


export default function exercicioEstatico() {

    return (
        <div id={estilo.__next}>
            <Titulo />
            <br />
            <div id={estilo.secaocard}>
                <section className={estilo.cards}>
                    <Subtitulo />
                </section>
                <section className={estilo.cards}>
                    <Imagens />
                </section>
                <section className={estilo.cardsdescricao}>
                    <Descricao />
                </section>
            </div>
        </div>
    )
}