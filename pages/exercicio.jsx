import styles from '@/styles/Home.module.css'

export default function form() {
    return (
        <>
            <form action="" className={styles.center}>
                <h1>Cadastro de Produtos</h1>
                <br />
                <label htmlFor="">Nome:</label>
                <input type="text" name="" id="" required />
                <br />
                <label htmlFor="">Descrição:</label>
                <textarea name="" id="" cols="30" rows="10" required></textarea>
                <br />
                <label htmlFor="">Preço:</label>
                <input type="number" name="" id="" required />
                <br />
                <label htmlFor="">Categoria:</label>
                <select name="" id="">
                    <option value="valor1">Eletronicos</option>
                    <option value="valor2">Roupas</option>
                    <option value="valor3">Alimentos</option>
                    <option value="valor4">Outros</option>
                </select>
                <br />
                <button>Cadatrar</button>
            </form>
        </>
    )
}