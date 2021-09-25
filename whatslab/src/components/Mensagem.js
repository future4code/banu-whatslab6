import React from "react";
import styled from "styled-components";

const ContainerMensagem = styled.div `
 height: 25px;
 width: 200px;
 background-color: lightcoral;
 margin: 16px;
`


class Mensagem extends React.Component {
    render() {
        return <ContainerMensagem >Oi </ContainerMensagem>
    }
}

export default Mensagem