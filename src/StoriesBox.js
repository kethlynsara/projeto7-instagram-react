import Story  from "./Story"

const storiesInfo = [
    {
        nome: "jordansmith",
        imagem: "assets/img/jordan.jpg"
    },
    {
        nome: "lionlulup",
        imagem: "assets/img/lion.jpeg"
    },
    {
        nome: "driven.education",
        imagem: "assets/img/driven.png"
    },
    {
        nome: "jonathanogden",
        imagem: "assets/img/ogden1.jpg"
    },
    {
        nome: "ninatalks",
        imagem: "assets/img/nina2.0.jpg"
    },
    {
        nome: "soueunavida",
        imagem: "assets/img/soueunavida.jpg"
    },
    {
        nome: "renatameins",
        imagem: "assets/img/renata.jpg"
    },
    {
        nome: "brenoperrucho",
        imagem: "assets/img/breno.jpg"
    }
]

export default function StoriesBox() {
    return (
        <div class="stories">
            {storiesInfo.map(story => <Story imagem={story.imagem} nome={story.nome} /> )} 
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

