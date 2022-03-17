export default function Post(props) {
    const { imgUser, nome, imgPost, imgCurtiu, userCurtiu, curtidas } = props;

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={imgUser} />
                    {nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={imgPost} />
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
                    <img src={imgCurtiu} />
                    <div class="texto">
                        Curtido por <strong>{userCurtiu}</strong> e <strong>outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

