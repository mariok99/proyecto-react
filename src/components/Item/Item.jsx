import "./Item.css"
export const Item = ({ title, description, price, image, stock, brand, children }) => {
    return (
        <article className="card">
            <h5>{title}</h5>
            <img src={image} alt="NO CARGA" />
            <p> {description} </p>
            {brand && <p> Marca: {brand} </p>}
            {stock > 0 && <p> Stock: {stock} </p>}
            <p> ${price} </p>
            {children}
        </article>
    )
}
