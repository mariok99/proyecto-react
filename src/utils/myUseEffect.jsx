import { useEffect } from "react";

// abstraigo useEffect para cargar datos, por ahora solo se usa para productos
// pero dependiendo de callback puede cargar lo que sea
function useEffectLoading(callback, dependencies, setLoading) {
    useEffect(() => {
        setLoading(true);
        Promise.resolve(callback())
            .catch((error) => {
                console.error("Error", error)
            })
            .finally(() => {
                setLoading(false);
            })
    }, dependencies)
}

export {
    useEffectLoading
}

