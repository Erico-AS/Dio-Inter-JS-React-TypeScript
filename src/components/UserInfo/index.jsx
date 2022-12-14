import React from 'react'
import { Container, NameText, Progress, UserPicture } from './styles'


const UserInfo = ({nome, percentual, imagem}) => {
  
  return (
    <Container>
        <UserPicture src={imagem} />

        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
}

export { UserInfo }
