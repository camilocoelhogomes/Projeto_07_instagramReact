import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";

const Corpo = () => {
    return (
        <div class="corpo">

            <div class="esquerda">
                <Stories />
                <Posts />
            </div>

            <SideBar />
        </div>
    );
}

export default Corpo;