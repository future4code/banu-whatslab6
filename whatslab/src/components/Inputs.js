import React from 'react'
import styled from 'styled-components'
import Mensagem from './Mensagem'


const MainConteiner = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column-reverse;
  background-color: lightgreen;
  margin-left: 25vw;
  border: 1px solid black;
  `

const ConteinerInputButton = styled.div`
  display: flex;
  flex-direction: row;
  background-color: blue;
  justify-content: center;
  `  

const TamanhoInputUsuario = styled.input`
  width: 15%;
`
const TamanhoInputMensagem = styled.input`
  width: 75%;
`
const TamanhoButton = styled.button`
  width: 10%;  
`
const MensagemContainer = styled.div`
  display: flex;
  flex-direction: row;
  `
const Texto = styled.div` `;

const NomeUsuario = styled.div`
  font-weight: bold;
`;



class Inputs extends React.Component {
    state = {
      usuario: '',
      mensagem: '',
      chat: [],
    }

    onChangeUsuario = (e) => {
		// console.log(e.target.value)
		this.setState({usuario: e.target.value})

	}

    onChangeMensagem = (e) => {
		// console.log(e.target.value)
		this.setState({mensagem: e.target.value})

	}

    /* Limpa o input ao enviar a mensagem digitada */
    onClickAdd = () => {
      this.setState({
        usuario: "",
        mensagem: "",
      });

    const NovasMensagens = [
      ...this.state.chat,
      {
        usuario: this.state.usuario,
        mensagem: this.state.mensagem,
      },
    ];

    this.setState({
      chat: NovasMensagens,
    });
  }


    render() {
    console.log(this.state.chat)

      return (
      <MainConteiner>
           <ConteinerInputButton>
            <TamanhoInputUsuario onChange={this.onChangeUsuario} type="text" placeholder="Usuário"  value={this.state.usuario} />
            <TamanhoInputMensagem onChange={this.onChangeMensagem} type="text" placeholder="Mensagem" value={this.state.mensagem} />
            <TamanhoButton onClick= {this.onClickAdd}>Enviar</TamanhoButton>
          </ConteinerInputButton>
          {this.state.chat.map((chat) => {
            return (
              <MensagemContainer>
                <NomeUsuario>{chat.usuario}:</NomeUsuario>
                <Texto>{chat.mensagem}</Texto>
              </MensagemContainer>
            );
          })}
      </MainConteiner> 
        
       )
    }
}    


export default Inputs