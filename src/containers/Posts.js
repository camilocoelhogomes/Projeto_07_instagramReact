const Post = () => {

    const userName = 'meowed';;
    const profileImg = 'assets/img/meowed.svg';
    const postContent = 'assets/img/gato-telefone.svg';
    const likeByUser = 'respondeai';
    const likeByImg = "assets/img/respondeai.svg";
    const numberOfLikes = 101.523;

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={profileImg} />
                    {userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={postContent} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={likeByImg} />
                    <div class="texto">
                        Curtido por <strong>{likeByUser}</strong> e <strong>outras {numberOfLikes} pessoas</strong>
                    </div>
                </div>
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


export default Posts;