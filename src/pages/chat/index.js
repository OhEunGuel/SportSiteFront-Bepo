import MainLayout from "../layout/MainLayout";
import ChatRoom from "../../components/ChatRoom";
import styled from "styled-components";


function Chat(){
    return(
        <MainLayout>
            <ChatContainer>
                <ChatRoom/>
            </ChatContainer>
        </MainLayout>
    )
}

const ChatContainer = styled.div`
  width: 30%;
  height: 50%;
  border: white 1px dashed;
  margin: 100px auto;
`


export default  Chat;