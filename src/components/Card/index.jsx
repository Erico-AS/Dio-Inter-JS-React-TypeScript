import React from "react";
import { FiThumbsUp } from "react-icons/fi"
import { CardContainer,
    Content,
    ImageBackground,
    UserInfo,
    PostInfo,
    HasInfo,
    UserPicture
} from "./styles";

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://img.r7.com/images/lionel-messi-argentina-x-croacia-copa-do-mundo-2022-13122022214556705?dimensions=771x420&&amp;&amp;&amp;&amp;&amp;&amp;resize=771x420&amp;crop=1080x588+0+0&amp;&amp;&amp;&amp;&amp;&amp;resize=771x420&amp;crop=1080x588+0+0"/>

            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/67467324?v=4'/>

                    <div>
                        <h4>Érico Augusto</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>

                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito do curso de HTML e CSS no bootcamp dio do Global avanade...<strong>Saiba mais</strong></p>
                </PostInfo>

                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>

                    <p>
                        <FiThumbsUp /> 15
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export {Card}