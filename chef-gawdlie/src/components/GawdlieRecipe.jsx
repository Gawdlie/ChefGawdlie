import ReactMarkdown from 'react-markdown'

export default function GawdlieRecipe(props) {
    const markdown = props.recipeText;

    return (
        <section className="suggested-recipe-container" aria-live="polite">
                <h2>Chef Gawdlie Recommends:</h2>
                 <ReactMarkdown>{markdown}</ReactMarkdown>  
        </section>
    );
}