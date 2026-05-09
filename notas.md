## Clase 2
Separar lógica de la apariencia
1. Alguien recibe los datos y los procesa
2. Alguien los convierte en una lista?
3. Otro se encarga de mostrarlos

### Exportación
* solo puedo exportar una función por archivo

### Caja Children
* "Caja contenedora" a la que le puedo meter cosas adentro. Puede servir para crear tarjetas.
Caja children seria toda la tarjeta y le paso los datos de la tarjeta

### Que son las props?
en React son la forma en la que se pasa información de un componente padre a un componente hijo.
```import Boton from './Boton';

function App() {
  return (
    <div>
      {/* Pasamos la prop "texto" y "color" al componente hijo */}
      <Boton texto="Aceptar" color="green" />
      <Boton texto="Cancelar" color="red" />
    </div>
  );
}
```
El componente hijo lo recibe como un diccionario
```// El componente recibe un objeto llamado "props"
function Boton(props) {
  return (
    <button style={{ backgroundColor: props.color }}>
      {props.texto}
    </button>
  );
}
```

### prop necesario en react: key
cuando tengo que renderizar muchos componenetes, ejemplo Item, siempre tengo que pasarle como prop key para que react pueda identificar a cada componente.

## Eventos en React
* sintaxis camelCase
* Eventos comunes:
    - onClick
    - onSubmit
    - onChange: detecta cabmios en inputs del formulario
    - onMouseOver
    - onMouseDown
    
## Manejo del estado local con useState
* useState es un hook que permite manejar el estado local de un componente.
* la sintaxis es: 
```javascript
const [estado, setEstado] = useState(valorInicial);
```
* declara una variable (estado) y una función para modificarla (setEstado). La función debe empezar por set y luego el nombre de la variable en mayusculas.
* Creo que si no uso useState los componentes no se actualizan, ya que es la forma de avisar a react que algo cambió. Una variable normal no le puede avisar.

## Efectos secundarios con useEffect
* useEffect es un hook que permite ejecutar código fuera del flujo principal de renderizado. .
* la sintaxis es:
```javascript
useEffect(() => {
    // código que se ejecuta después de que el componente se ha renderizado
    return () => {
        // código que se ejecuta cuando el componente se desmonta, puedo resetear el estado (del componente) o cancelar la petición a la API
    }
}, [dependencies]);
```
* las dependencias son un array de valores que, cuando cambian, hacen que el efecto se vuelva a ejecutar.
* Sirve para manejar operaciones asíncronas. 
* Ejemplos: obtener datos de una API, definir temporizadores
* Cuando no se pasa por argumento el array de dependencias, el efecto se ejecuta después de cada renderizado y esto ocurre cuando se actualiza un estado (cualquier que sea)
* Si paso un array de dependencias vacío [], el efecto se ejecuta solo una vez al montar el componente.
* Si paso un array de dependencias con valores [valor1, valor2], el efecto se ejecuta solo una vez al montar el componente y cada vez que cambie valor1 o valor2 (deben ser estados).

## Rutas con react-router-dom
* Las rutas me permiten navegar entre diferentes componentes sin recargar la página.
* Utilizo `<BrowserRouter>` para envolver toda la app (en main.jsx), y luego `<Routes>` y `<Route>` para definir las rutas (en App.jsx).
* Esto se explica en App.jsx
* Link: componente de react-router-dom que se utiliza para elegir una Route para renderizar lo que indicado en la Route en App.jsx.

