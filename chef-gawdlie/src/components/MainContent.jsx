export default function MainContent() {
    const ingredients = ["oregano", "basil", "parsley"];
    const map = ingredients.map((item) => {
        return <li key={item}>{item}</li>;
    });


    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        ingredients.push(newIngredient);
        console.log(ingredients);
    }

    return(
        <>
            <main>
                <form onSubmit={handleSubmit} className="ingredient-form">
                    <input aria-label="Add ingredient" type="text" placeholder="e.g. oregano" name="ingredient" />
                    <button>Add ingredient</button>
                </form>
                <ul>
                    {map}
                </ul>
            </main>
        </>
    );
}