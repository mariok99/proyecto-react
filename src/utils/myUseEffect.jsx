import { useEffect } from "react";

// abstraigo useEffect para cargar datos, por ahora solo se usa para productos
// pero dependiendo de callback puede cargar lo que sea
function useEffectLoading(callback, dependencies, setLoading) {
    useEffect(() => {
        setLoading(true);

        try {
            callback().finally(() => setLoading(false));
        } catch (error) {
            console.error("Error", error)
        }
    }, dependencies)
}

export {
    useEffectLoading
}

