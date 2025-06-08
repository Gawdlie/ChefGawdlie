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
                <ul>
                    {newMap}
                </ul>
            </main>
        </>
    );
}