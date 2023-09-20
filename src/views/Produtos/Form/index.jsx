import axios from "axios";
import { useRef } from "react";

export function Form() {
    const ref = useRef();
    const url = "http://localhost:8080/produtos";

    const aoSubmeterForm = (evento) => {
        evento.preventDefault();
        const produto = ref.current;

        axios.post(url, {
            nome:       produto.nome.value,
            valor:      produto.valor.value,
            qtd:        produto.qtd.value
        }).then(() => {
            alert("Cadastrado com sucesso")
        }).catch(error => {
          console.log(error)
        })
    }

    return (
        <div className="container">
            <h1>Cadastro Novo Produto</h1>
            <form ref={ref} onSubmit={aoSubmeterForm} className="mb-5 flex-nowrap">
                <div className="row input-group">
                    <input type="text" name="nome"  placeholder="nome"       className="form-control"   />
                    <input type="text" name="qtd"   placeholder="quantidade" className="form-control"   />
                    <input type="text" name="valor" placeholder="valor"      className="form-control"   />
                    <button className="form-control col-2 btn btn-success mr-2">Salvar</button>
                </div>
            </form>
        </div>
    )
}