import React from "react";
import GawdlieRecipe from "./GawdlieRecipe.jsx"
import IngredientsList from "./IngredientsList.jsx"
import { getAnthropicRecipe } from "../ai.js";  

export default function MainContent() {

    const [myIngredients, setMyIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");
    const recipeSection = React.useRef(null);

    React.useEffect(() => {
        {recipe != "" ? (recipeSection.current != null ? recipeSection.current.scrollIntoView({behavior: "smooth"}) : null) : null}
    }, [recipe]);

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient");
        
        setMyIngredients(prevIngredients => 
            [...prevIngredients, newIngredient]);
    }

    async function getRecipe() {
        const recipeIdea = await getAnthropicRecipe(myIngredients);
        setRecipe(recipeIdea);
    }



    return(
        <>
            <main>
                <form action={handleSubmit} className="ingredient-form">
                    <input aria-label="Add ingredient" type="text" placeholder="e.g. oregano" name="ingredient" />
                    <button>Add ingredient</button>
                </form>
                {myIngredients.length > 0 ? 
                    <IngredientsList ingredients={myIngredients} getRecipe={getRecipe} ref={recipeSection}/> : 
                    <p className="empty-list">
                    Your ingredient list is empty/small. Start adding some ingredients to craft an exquisite recipe!
                    </p>}
                    {recipe ? <GawdlieRecipe recipeText={recipe}  /> : null}
            </main>
        </>
    );
}