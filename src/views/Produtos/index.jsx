import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import { Form } from "./Form";

export function Produtos() {
    const [produtos, setProdutos] = useState([]);
    const url = "http://localhost:8080/produtos";

    useEffect(() => {
        axios.get(url)
             .then(res => {
                setProdutos(res.data)
             })
            .catch(error => {
                console.log("Error: " + error);
             })
    },  [produtos])

    return (
        <div className="container">
            <Form />
             <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Qtd.</th>
                        <td>Valor</td>
                        <td className="text-center">Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((item, i) => (
                        <tr key={i} className="overflow-y-auto">
                            <td >{item.nome}</td>
                            <td >{item.qtd}</td>
                            <td>{item.valor}</td>
                            <td className="text-center">
                                <button className="btn btn-outline-warning">Editar</button>
                                <button className="btn btn-outline-danger" >Apagar</button>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}