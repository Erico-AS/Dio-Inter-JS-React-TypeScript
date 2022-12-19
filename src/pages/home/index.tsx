import { Button } from '../../components/Button';
import { Header } from "../../components/Header";
import { Container, TextContent, Title, TitleHighlight } from "./styles"
import Banner from "../../assets/b.png"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    const handleClickSingIn = () => {
        navigate('/login')
    }
    
    return (<>
        <Header/>
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

                <Button title='Comece agora' variant='secondary' onClick={handleClickSingIn}/>
            </div>

            <div>
                <img src={Banner} alt='Imagem principal' />
            </div>
        </Container>
    </>)
}

export {Home}