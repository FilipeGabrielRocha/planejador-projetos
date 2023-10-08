import styled from "styled-components";

function Company(){
    return(
        <Container>
            <h1>Empresa</h1>
        </Container>
    )
}

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  min-height: 75vh;
`;


export default Company