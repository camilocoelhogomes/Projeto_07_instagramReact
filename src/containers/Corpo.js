import Story from "./Story";
import Post from "./Post";
import Sugestao from "./Sugestao";
const Stories = () => {
    return (
        <div class="stories">
            <Story />

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    );
}

const Posts = () => {
    return (
        <div class="posts">
            <Post />
        </div>

    );
}

const Esquerda = () => {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    );
}


const SideBar = () => {
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

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

const Corpo = () => {
    return (
        <div class="corpo">
            <Esquerda />
            <SideBar />
        </div>
    );
}

export default Corpo;