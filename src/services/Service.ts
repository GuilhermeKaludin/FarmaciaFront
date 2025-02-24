import axios from "axios";

const api = axios.create({
    baseURL: 'https://farmacia-jjxo.onrender.com/'
});

export const consultar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url);
    setDados(resposta.data);
};

export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url);
    setDados(resposta.data);
};

export const cadastrar = async (url: string, dados: { id?: number, nome: string, descricao: string }, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

export const atualizar = async (url: string, dados: { id: number, nome: string, descricao: string }, setDados: Function) => {
    const resposta = await api.put(url, dados);
    setDados(resposta.data);
};

export const deletar = async (url: string) => {
    await api.delete(url);
};
