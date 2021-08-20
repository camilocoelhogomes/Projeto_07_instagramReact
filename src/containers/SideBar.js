const Sugestao = () => {
    const img = "assets/img/bad.vibes.memes.svg";
    const user = "bad.vibes.memes";

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={img} />
                <div class="texto">
                    <div class="nome">{user}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}

const Usuario = () => {

    const img = "assets/img/catanacomics.svg";
    const igName = 'catanacomics';
    const userName = 'Catana';

    return (
        <div class="usuario">
            <img src={img} />
            <div class="texto">
                <strong>{igName}</strong>
                {userName}
            </div>
        </div>
    );
}

const SideBar = () => {
    return (
        <div class="sidebar">

            <Usuario />
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <Sugestao />

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}

export default SideBar;