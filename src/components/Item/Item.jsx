import "./Item.css"
export const Item = ({ title, description, price, image, children }) => {
    console.log({ title, description, price, image })
    return (
        <article className="card">
            <h3>{title}</h3>
            <img src={image} alt="NO CARGA" />
            <p> {description} </p>
            <p> {price} </p>
            {children}
        </article>
    )
}
