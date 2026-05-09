export const Nav = () => {
    const nav = document.createElement('nav');
    const lista_links = document.createElement("ul");

    const link_best_song = crear_link("https://youtu.be/GDnLHd2Ei3Y?si=YWu7D2A1CuNIbcmm", "Best Song");

    const link_best_anime_2025  = crear_link("https://youtu.be/nJd4IQKYwOQ?si=7ZFaaFxispJvZpPC", "Best Anime 2025");
    
    lista_links.appendChild(link_best_anime_2025);
    lista_links.appendChild(link_best_song);

    nav.appendChild(lista_links);
    return nav
}

function crear_link(http_link, name_link){
    const li = document.createElement("li");
    const a = document.createElement("a");
    
    a.setAttribute("href", http_link);
    li.appendChild(a);
    li.textContent = name_link;
    return li
}

export const NavReact = () => {
    return (
    <nav>
        <ul>
            <li>
                <a href="https://youtu.be/GDnLHd2Ei3Y?si=YWu7D2A1CuNIbcmm">
                    "Best Song"
                </a>
            </li>
            <li>
                <a href="https://youtu.be/nJd4IQKYwOQ?si=7ZFaaFxispJvZpPC">
                    "Best Anime 2025"
                </a>
            </li>
        </ul>       
    </nav>
    )
}