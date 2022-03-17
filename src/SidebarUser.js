export default function SidebarUser(props) {
    const {imagem:img, username, nome:user} = props;
    return (
        <div class="usuario">
            <img src={img} />
            <div class="texto">
                <strong>{username}</strong>
                {user}
            </div>
        </div>
    )
}
