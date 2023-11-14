import "./style.css"

function toggleMenu() {
    var menu = document.getElementById("opcoes_menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function MenuMobile() {
    return (
        <div className="menuMobile" >
            <details>
                <summary>Menu</summary>
                <ul>
                    <li><a href="#">Academia</a></li>
                    <li><a href="#localizacao">Unidades</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="#horarios">Planos</a></li>
                    
                </ul>
            </details>

        </div>
    )
}

export default MenuMobile