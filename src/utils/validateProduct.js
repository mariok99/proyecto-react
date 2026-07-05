export const validateProduct = (product) => {
    const errors = {};

    if (!product.title.trim()) {
        errors.title = "Title is required";
    }

    if (!product.description.trim()) {
        errors.description = "Description is required";
    }

    if (!product.price || product.price <= 0) {
        errors.price = "Price is required and must be greater than 0";
    }

    if (!product.stock || product.stock < 0) {
        errors.stock = "Stock is required and must be greater than or equal to 0";
    }

    if (!product.category.trim()) {
        errors.category = "Category is required";
    }

    if (!product.image) {
        errors.image = "Image is required";
    }

    if (!product.brand.trim()) {
        errors.brand = "Brand is required";
    }

    return errors;
}