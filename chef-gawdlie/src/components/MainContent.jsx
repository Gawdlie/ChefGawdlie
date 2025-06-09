import React from "react";
import GawdlieRecipe from "./GawdlieRecipe.jsx"
import IngredientsList from "./IngredientsList.jsx"

export default function MainContent() {

    const [myIngredients, setMyIngredients] = React.useState([]);
    const newMap = myIngredients.map((item) => {
        return <li key={item}>{item}</li>;
    });

    const [recipeShown, setRecipeShown] = React.useState(false);

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient");
        
        setMyIngredients(prevIngredients => 
            [...prevIngredients, newIngredient]);
    }

    function handleRecipeClick() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
    }


    return(
        <>
            <main>
                <form action={handleSubmit} className="ingredient-form">
                    <input aria-label="Add ingredient" type="text" placeholder="e.g. oregano" name="ingredient" />
                    <button>Add ingredient</button>
                </form>
                {myIngredients.length > 0 ? 
                    <IngredientsList ingredients={myIngredients} recipeClick={handleRecipeClick}/> : 
                    <p className="empty-list">
                    Your ingredient list is empty/small. Start adding some ingredients to craft an exquisite recipe!
                    </p>}
                    {recipeShown ? <GawdlieRecipe /> : null}
            </main>
        </>
    );
}