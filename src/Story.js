export default function Story(props) {
    const {nome, imagem} = props;
    return (
        <div class="story">
                <div class="imagem">
                    <img src={imagem} />
                </div>
                <div class="usuario">
                    {nome}
                </div>
            </div>
    )
}