import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighlight} from "./styles"
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
    return (<>
        <Header>Home</Header>
        <Container >
            <Column flex={3}> 
                <Title>Feed</Title>

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>

            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>

                <UserInfo nome="Érico Augusto" percentual={47} imagem="https://avatars.githubusercontent.com/u/67467324?v=4"></UserInfo>
                <UserInfo nome="Érico Augusto" percentual={96} imagem="https://avatars.githubusercontent.com/u/67467324?v=4"></UserInfo>
                <UserInfo nome="Érico Augusto" percentual={17} imagem="https://avatars.githubusercontent.com/u/67467324?v=4"></UserInfo>
            </Column>
            
        </Container>
    </>)
}

export { Feed }