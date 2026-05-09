import { useState, useEffect } from "react";

const [contador, setContador] = useState(0);
export const ComponenteConEfecto = () => {
    const [mostrarMensaje, setMostrarMensaje] = useState(true);
    useEffect(() => {
        console.log("Componente montado");
    }, []);

    return (
        <>
            <button onClick={() => setContador(contador + 1)}>Sumar</button>
            <p>{contador}</p>
            <br />
            <br />

            <button onClick={() => setMostrarMensaje(!mostrarMensaje)}>
                {mostrarMensaje ? "Ocultar" : "Mostrar"}
            </button>
            {mostrarMensaje && <p>Texto visible xd</p>}
        </>

    )
}