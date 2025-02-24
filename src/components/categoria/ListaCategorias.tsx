import { useEffect, useState } from "react";
import Categoria from "../../models/Categoria";
import CardCategorias from "../categoria/CardCategorias";
import { buscar } from "../../services/Service";

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar("/categorias", setCategorias);
        } catch (error) {
            console.error("Erro ao buscar categorias:", error);
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, []); // Dependência vazia para evitar chamadas excessivas

    return (
        <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categorias.map((categoria) => (
                        <CardCategorias key={categoria.id} categoria={categoria} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListaCategorias;
