export default function IngredientsList(props) {
    const newMap = props.ingredients.map((item) => {
        return <li key={item}>{item}</li>;
    });

    return (
        <section>
                        <h2>Ingredients on hand:</h2>
                        <ul className="ingredient-list" aria-live="polite">{newMap}</ul>
                            {props.ingredients.length > 3 ? 
                            <div className="get-recipe-container">
                                <div>
                                    <h3>Ready for a recipe?</h3>
                                    <p>Generate a recipe from your list of ingredients</p>
                                </div>
                                <button onClick={props.recipeClick}>Get a recipe</button>
                            </div> : null}
        </section>
    );
}