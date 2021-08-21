const Sugestao = (props) => {

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                    <div class="nome">{props.user}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}

const Usuario = (props) => {

    return (
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <strong>{props.igName}</strong>
                {props.userName}
            </div>
        </div>
    );
}

const SideBar = () => {

    const usuario = {
        img: "assets/img/catanacomics.svg",
        igName: 'catanacomics',
        userName: 'Catana',
    }

    const sugestoes = [
        {
            img: "assets/img/bad.vibes.memes.svg",
            user: "bad.vibes.memes",
        },
        {
            img: "assets/img/chibirdart.svg",
            user: "chibirdart",
        },
        {
            img: "assets/img/razoesparaacreditar.svg",
            user: "razoesparaacreditar",
        },
        {
            img: "assets/img/adorable_animals.svg",
            user: "adorable_animals",
        },
        {
            img: "assets/img/smallcutecats.svg",
            user: "smallcutecats",
        },
    ]
    return (
        <div class="sidebar">

            <Usuario img={usuario.img}
                igName={usuario.igName}
                userName={usuario.userName}
            />
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestoes.map(sugestao =>
                    <Sugestao user={sugestao.user}
                        img={sugestao.img}
                    />)}

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