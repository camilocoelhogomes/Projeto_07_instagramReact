const Story = () => {
    return (
        <div class="story">
            <div class="imagem">
                <img src="assets/img/9gag.svg" />
            </div>
            <div class="usuario">
                9gag
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