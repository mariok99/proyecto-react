export const ProductFormUI = ({
    product,
    errors,
    loading,
    onEntryChange,
    onImageChange,
    onSubmit,
}) => {
    return (
        <section>
            <form className="product-form" onSubmit={onSubmit}>
                <h2>Add new Product</h2>

                <div>
                    <label>title:</label>
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={onEntryChange}
                    />
                    {errors.title && <p className="error">{errors.title}</p>}
                </div>

                <div>
                    <label>price:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={onEntryChange}
                        min="0"
                    />
                    {errors.price && <p className="error">{errors.price}</p>}
                </div>

                <div>
                    <label>category:</label>
                    <input
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={onEntryChange}
                    />
                    {errors.category && <p className="error">{errors.category}</p>}
                </div>

                <div>
                    <label>description:</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={onEntryChange}
                    />
                    {errors.description && <p className="error">{errors.description}</p>}
                </div>
                <div>
                    <label>stock:</label>
                    <input
                        type="number"
                        name="stock"
                        value={product.stock}
                        onChange={onEntryChange}
                        min="0"
                    />
                    {errors.stock && <p className="error">{errors.stock}</p>}
                </div>

                <div>
                    <label>brand:</label>
                    <input
                        type="text"
                        name="brand"
                        value={product.brand}
                        onChange={onEntryChange}
                    />
                    {errors.brand && <p className="error">{errors.brand}</p>}
                </div>

                <div>
                    <label>image:</label>
                    <input type="file" accept="image/*" onChange={onImageChange} />
                    {errors.image && <p className="error">{errors.image}</p>}
                </div>

                <button className="btn" type="submit" disabled={loading}>
                    {loading ? "Adding..." : "Add"}
                </button>

                {errors.submit && <p className="error">{errors.submit}</p>}
            </form>
        </section>
    );
};