import { useEffect } from "react";

function myUseEffect(callback, dependencies, setLoading) {
    useEffect(() => {
        setLoading(true);

        try {
            callback();
        } catch (error) {
            console.error("Error", error)
        } finally {
            setLoading(false);
        }
    }, dependencies)
}

export {
    myUseEffect
}

