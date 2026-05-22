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

## Que es un hook
Función que empieza con use, se utilizan en componentes funcionales y permiten gestionar el estado de los componentes y otros efectos secundarios. Abajo explicamos los estados locales y los efectos secundarios.

## Manejo del estado local con useState
* useState es un hook que permite manejar el estado local de un componente.
* la sintaxis es: 
```javascript
const [estado, setEstado] = useState(valorInicial);
```
* declara una variable (estado) y una función para modificarla (setEstado). La función debe empezar por set y luego el nombre de la variable en mayusculas.
* No usar useState hace que los componentes no se actualicen, ya que es la forma de avisar a react que algo cambió. Una variable normal no le puede avisar.
* useState con objetos mutables:
  * Ejemplo array de objetos cart:
  Supongamos que quiero aumentar la cantidad de un producto p de uno de los productos del cart. Si solo actualizo p (ej. p.cantidad = p.cantidad + 1), react no se entera del cambio porque el objeto p es el mismo y, técnicamente, cart no cambió, por lo que no se vuelve a renderizar. Por lo que debemos crear una copia del objeto, actualizarla y luego guardarlo en el array. Ahora el array si cambió, ya que tiene un objeto distinto a p, por lo que sí se vuelve a renderizar

  ```javascript
  // Forma INCORRECTA: modificar directamente el array
  const aumentarCantidad = (productoId) => {
    // ❌ ¡Error! Mutable: Estamos modificando el array original
    const nuevoCart = cart;
    nuevoCart.forEach(item => {
      if (item.id === productoId) {
        item.cantidad++;
      }
    });
    setCart(nuevoCart); // React no detectará el cambio porque es el mismo objeto
  };

  // Forma CORRECTA: Crear un nuevo array (Inmutabilidad)
  const aumentarCantidad = (productoId) => {
    setCart(prevCart => 
      prevCart.map(item => 
        // ✅ ¡Correcto! Crea un nuevo objeto para el item modificado
        item.id === productoId 
          ? { ...item, cantidad: item.cantidad + 1 } 
          : item
      )
    ); // React detectará el cambio correctamente
  };
  ``` 

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

## Container y Presentational Components
* Container Components: se encargan de la lógica (ej. definen funciones que van a usar los presentational components), manejan el estado, hacen peticiones a la API, realizan validaciones, etc.
* Presentational Components: se encargan de la apariencia, reciben datos como props y los muestran. 

## Contexto
- Se crean las funciones / estados necesarios
- Se define el context
- Creamos un hook para el carrito
- Creamos el provider: componente que envuelve a los otros componentes y les pasa el context