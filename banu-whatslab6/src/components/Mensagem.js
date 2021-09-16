import React from 'react'
import styled from 'styled-components'


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
  padding: 1%;
  
  
`  

class Mensagem extends React.Component {
    state = {
      usuario: '',
      mensagem: '',
    }

    render() {
      return (
      <MainConteiner>  
          <ConteinerMensagem>
           <input type="text" placeholder="Usuário"  value="" />
           <input type="text" placeholder="Mensagem" value="" />
           <button>Enviar</button>
          </ConteinerMensagem>
        </MainConteiner> 
        
       )
    }
}    


export default Mensagem    