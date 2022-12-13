import { Button } from '../../components/Button';
import { Header } from "../../components/Header";
import { Container, TextContent, Title, TitleHighlight } from "./styles"
import Banner from "../../assets/b.png"

const Home = () => {
    return (<>
        <Header>Home</Header>
        <Container>
            <div>
                <Title>
                    <TitleHighlight> 
                        Implemente <br />
                    </TitleHighlight>
                    o seu futuro global agora!
                </Title>

                <TextContent>
                    Domine as tecnologias ultilizadas pelas empresas mais inovadoras do mundo e
                    encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
            </div>

            <div>
                <img src={Banner} alt='Imagem principal' />
            </div>
        </Container>
    </>)
}

export {Home}