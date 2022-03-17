import SidebarSugestoes from "./SidebarSugestoes";
import SidebarUser from "./SidebarUser";

const sugestoesInfo = [
    {
        imagem: "assets/img/gabriela.jpg",
        nome: "gabrielarochaofc",
        razao: "Segue você"
    },
    {
        imagem: "assets/img/tomoto.jpeg",
        nome: "matheustomoto",
        razao: "Segue você"
    },
    {
        imagem: "assets/img/adorable_animals.svg",
        nome: "adorable_animals",
        razao: "Novo no Instagram"
    },
    {
        imagem: "assets/img/adutakech.jpg",
        nome: "adutakech",
        razao: "Segue voê"
    },
    {
        imagem: "assets/img/coderstory.jpg",
        nome: "coderstory",
        razao: "Segue você"
    }
]

export default
    function Sidebar() {
    return (
        <div class="sidebar">
            <SidebarUser imagem="assets/img/kethlyn.jpg" username="kethlynsara" nome="Kethlyn"/>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestoesInfo.map(sugestao => <SidebarSugestoes imagem={sugestao.imagem} nome={sugestao.nome} razao={sugestao.razao} />)}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}



