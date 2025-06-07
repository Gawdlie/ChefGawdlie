import ChefHat from '../assets/chef-icon.png';

export default function Header() {
    return (
        <>
            <header className="header-container">
                <img className="chef-hat" src={ChefHat} alt="Chef Hat" />
                <h1 className="header-text">Chef Gawdlie</h1>
            </header>
        </>
    );
}