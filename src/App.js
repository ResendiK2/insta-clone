import './App.css';
import Footer from "./footer";
import PostList from "./postList";
import Header from './header';

const posts = [
    {
        userName: "Tiago Gouvêa",
        imageUserUrl: "https://tiagogouvea.com.br/Imagens/tiago_gouvea.jpg",
        imageUrl: "https://media-exp1.licdn.com/dms/image/C4E1BAQHL_wUxS-bCKg/company-background_10000/0?e=2159024400&v=beta&t=3HdnPDimuYPZ9cG_6luD380mbXO9u0dih1J4xY6JRA0",
        imageDescription: "Galera da App Masters programando"
    },
    {
        userName: "Igor Sasaoka",
        imageUserUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQHl4Nw0ESXmAA/profile-displayphoto-shrink_800_800/0?e=1612396800&v=beta&t=oCRHXfEjNLrIDz2BZBvDEREmcv3gjjPAdar02VgdprA",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXUG_m00N9MO2n29txza4EKbi9bRk3DXcMdMa-bZ4M7Ydtkf4jZLy_Vv_e3ONnZgQp6P5cRyanh_bnJljD3Y46hI-KAt2vJWxfg&usqp=CAU&ec=45732301",
        imageDescription: "Salve quase todos"
    },
    {
        userName: "Code Júnior",
        imageUserUrl: "https://pbs.twimg.com/profile_images/562705517559029760/F2tXC4T-.png",
        imageUrl: "https://codejr.com.br/wp-content/uploads/2020/09/quem-somos.jpg",
        imageDescription: "Time da gestão 2020.1"
    }
];

// const posts = [];

function App() {

    // Check if have posts now
    const hasPosts = posts && posts.length > 0;

    return (
        <div className="App">

            <Header />

            {hasPosts ?
                <PostList posts={posts} />
                :
                <p>Carregando...</p>
            }

            <Footer />
        </div>
    );
}

export default App;
