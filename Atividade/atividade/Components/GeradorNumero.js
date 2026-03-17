"use client";

import { useState } from "react";

export function GeradorNumero(){
    const [valor, setValor ] = useState("- -");
    const handleClik = () => {
        const num = Math.floor(Math.random() * 100) + 1;
        setValor(num);
    };
    return (
        <> 
            <h3>Número gerado: {valor}</h3>
            <button onClick={handleClik}> Gerar N° aleatório </button>
        </> 
    );
}