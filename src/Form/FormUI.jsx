export const FormUI = ({ onSubmit, onChange, formData, errors }) => {

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                />

                {/** si hay un error, lo va a mostrar */}
                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="lastName">Last name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={onChange}
                />

                {errors.lastName && <p>{errors.lastName}</p>}
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={onChange}
                ></textarea>
                {errors.message && <p>{errors.message}</p>}
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}