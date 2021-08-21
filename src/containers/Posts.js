const Post = (props) => {

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.profileImg} />
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postContent} />
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
                    <img src={props.likeByImg} />
                    <div class="texto">
                        Curtido por <strong>{props.likeByUser}</strong> e <strong>outras {props.numberOfLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Posts = () => {
    const dados = [
        {
            userName: 'meowed',
            profileImg: 'assets/img/meowed.svg',
            postContent: 'assets/img/gato-telefone.svg',
            likeByUser: 'respondeai',
            likeByImg: "assets/img/respondeai.svg",
            numberOfLikes: 101.523,
        },
        {
            userName: 'barked',
            profileImg: 'assets/img/barked.svg',
            postContent: 'assets/img/dog.svg',
            likeByUser: 'adorable_animals',
            likeByImg: "assets/img/adorable_animals.svg",
            numberOfLikes: 99.159,
        }
    ];

    return (
        <div class="posts">
            {dados.map(item =>
                <Post userName={item.userName}
                    profileImg={item.profileImg}
                    postContent={item.postContent}
                    likeByImg={item.likeByImg}
                    likeByUser={item.likeByUser}
                    numberOfLikes={item.numberOfLikes}
                />
            )}
        </div>

    );
}


export default Posts;