import React from "react";

export default function MainContent() {

    const [myIngredients, setMyIngredients] = React.useState([]);
    const newMap = myIngredients.map((item) => {
        return <li key={item}>{item}</li>;
    });

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient");
        
        setMyIngredients(prevIngredients => 
            [...prevIngredients, newIngredient]);
    }

    return(
        <>
            <main>
                <form action={handleSubmit} className="ingredient-form">
                    <input aria-label="Add ingredient" type="text" placeholder="e.g. oregano" name="ingredient" />
                    <button>Add ingredient</button>
                </form>
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredient-list" aria-live="polite">{newMap}</ul>
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients</p>
                        </div>
                        <button>Get a recipe</button>
                    </div>
                </section>
            </main>
        </>
    );
}