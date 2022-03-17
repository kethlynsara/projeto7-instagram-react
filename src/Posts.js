import Post from "./Post";

const postInfo = [
    {
        imgUser: "assets/img/lion.jpeg",
        nome: "lionlulup",
        imgPost: "assets/img/Lionn.jpg",
        imgCurtiu: "assets/img/karine.jpg",
        userCurtiu: "respondeai",
        curtidas: 9.423
    },
    {
        imgUser: "assets/img/forbes-logo.png",
        nome: "forbesbr",
        imgPost: "assets/img/forbes.jpg",
        imgCurtiu: "assets/img/anajords.jpg",
        userCurtiu: "anajords",
        curtidas: "426.590"
    },
    {
        imgUser: "assets/img/amarja-logo.jpg",
        nome: "amarja",
        imgPost: "assets/img/amarja.jpg",
        imgCurtiu: "assets/img/jaque.jpg",
        userCurtiu: "jaquelinebotelho_ ",
        curtidas: "2.362"
    }
]

export default function Posts() {
    return (
        <div class="posts">
            {postInfo.map(post => <Post imgUser={post.imgUser} nome={post.nome} imgPost={post.imgPost} imgCurtiu={post.imgCurtiu} userCurtiu={post.userCurtiu} curtidas={post.curtidas}/> )}                
        </div>
    );
}

