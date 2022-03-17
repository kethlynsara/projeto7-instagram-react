export default function SidebarSugestoes(props) {
    const { imagem, nome, razao } = props;
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={imagem} />
                <div class="texto">
                    <div class="nome">{nome}</div>
                    <div class="razao">{razao}</div>
                </div>
            </div>
        </div>

    )
}