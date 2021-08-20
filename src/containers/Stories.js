const Story = () => {

    const img = "assets/img/9gag.svg";
    const usuario = '9gag'

    return (
        <div class="story">
            <div class="imagem">
                <img src={img} />
            </div>
            <div class="usuario">
                {usuario}
            </div>
        </div>
    );
}

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

export default Stories;