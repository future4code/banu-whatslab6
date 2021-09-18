import React from 'react'
import styled from 'styled-components'
import Mensagem from './Mensagem'


const MainConteiner = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column-reverse;
  /* justify-content: space-space-between; */
  background-color: lightgreen;
  margin-left: 25vw;
  border: 1px solid black;
  `

const ConteinerMensagem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: blue;
  justify-content: center;
  /* padding: 1%; */
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


class Inputs extends React.Component {
    state = {
      usuario: '',
      mensagem: '',
      // chat: []
    }

    onChangeUsuario = (e) => {
		// console.log(e.target.value)
		this.setState({usuario: e.target.value})

	}

    onChangeMensagem = (e) => {
		// console.log(e.target.value)
		this.setState({mensagem: e.target.value})

	}

  // onClickEnviar = (e) => {
  //    const listaMensagens = {nome:this.state.usuario , mensagem:this.state.mensagem}
  //   this.setState({...this.state.chat: listaMensagens})
  //   this.state.chat.push(listaMensagens)
  //   console.log(this.state.chat)
  // }
  

    render() {
      return (
      <MainConteiner> 
          <ConteinerMensagem>
            <TamanhoInputUsuario onChange={this.onChangeUsuario} type="text" placeholder="Usuário"  value={this.state.usuario} />
            <TamanhoInputMensagem onChange={this.onChangeMensagem} type="text" placeholder="Mensagem" value={this.state.mensagem} />
            <TamanhoButton onClick= {this.onClickEnviar}>Enviar</TamanhoButton>
          </ConteinerMensagem>
      </MainConteiner> 
        
       )
    }
}    


export default Inputs