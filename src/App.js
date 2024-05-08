import styled from "styled-components";
import Tabs from "./Components/Tabs";

const BackgroundImage = styled.div`
  background-image: url(${require(`./images/Covid_19.jpg`)});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 20vh;
`;

const Container = styled.div`
  padding: 3rem 1.5rem;
`;

const TextContainer = styled.div`
  /* padding: 3rem 1.5rem; */
  margin: 0 15rem 0 15rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 48px;
  margin: 0%;
`;

const SubTitle = styled.h3`
  color: #dbdbdb;
  font-size: 24px;
  margin: 0%;
`;

const ContainerTheTabs = styled.div`
  padding: 3rem 1.5rem;
`;

function App() {
  return (
    <>
      <BackgroundImage>
        <Container>
          <TextContainer>
            <Title>disease.sh - Open Disease Data API</Title>
            <SubTitle>45,000,000,000 + Requests Serverd to Date</SubTitle>
          </TextContainer>
        </Container>
      </BackgroundImage>
      <ContainerTheTabs>
        <Tabs />
      </ContainerTheTabs>
    </>
  );
}

export default App;
