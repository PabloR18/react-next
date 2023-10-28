import Image from "next/image"
import backEnd from "../img/backEnd.svg"
import frontEnd from "../img/frontEnd.svg"
import fullStack from "../img/fullStack.svg"
export default function Imagens() {

    return (
        <>
            <Image src={frontEnd} width={300} height={300} />
            <Image src={backEnd} width={300} height={300} />
            <Image src={fullStack} width={300} height={300} />
        </>
    )
}