import React, { Component } from 'react'
import './App.css'
import { AiOutlineCopy } from 'react-icons/ai'


class App extends Component {
  state = {
    Top_Left:{
      radius:0,
      css:'',
    },
    Top_Right:{
      radius:0,
      css:'',
      
    },
    Bottom_Left:{
    radius:0,
    css:'',
    },
    Bottom_Right:{
      radius:0,
      css:'',
    },
    buttonCopy: 'btn-copiar'
  }
  
      handleChange = (e) => {
        const { value, name } = e.target;
        const { Top_Left, Top_Right, Bottom_Left, Bottom_Right } = this.state
        const lower = name.toLowerCase().replace('_', '-') 
        console.log(lower);
        if(value > 100){
          const newValue = 100
          this.setState({
            [name]:{ radius:newValue, css: `border-${lower}-radius:${value};` },
          })
        }else{
          this.setState({
            [name]:{ radius:value, css: `border-${lower}-radius:${value};` },
          })
        }
      }

      handleCopy = () => {
        const { Top_Left, Top_Right, Bottom_Left, Bottom_Right } = this.state
        const texto = `${Top_Left.css} ${Top_Right.css} ${Bottom_Left.css} ${Bottom_Right.css}`.replace(/\s/g, "\n")
        if (navigator.clipboard.writeText(texto)){
          this.setState({buttonCopy: 'btn-copiado'}, () =>{
            setTimeout(() => {
              this.setState({buttonCopy:'btn-copiar'})
            }, 2000);
          })
        }
      }
      
  render(){
    const { Top_Left, Top_Right, Bottom_Left, Bottom_Right, buttonCopy } = this.state
    
    return (
      <main className="App">
        <header>
          <h1>Border Radius</h1>
          <p className='text-autor'><i>By</i> <span className='autor'> &lt;Diego Rogers/&gt; </span></p>
        </header>
        <div className ='container-inputs-1-2'>
          <input onChange={this.handleChange} type='number' name='Top_Left'  />
          <input onChange={this.handleChange} type='number' name='Top_Right'/>
        </div>
        <div
          className='container-border' 
          style={{
            overflow:'hidden', 
            backgroundColor: '#d1d1d1',
            borderTopLeftRadius:Number(Top_Left.radius),
            borderTopRightRadius:Number(Top_Right.radius),
            borderBottomLeftRadius:Number(Bottom_Left.radius),
            borderBottomRightRadius:Number(Bottom_Right.radius),
            
          }}>
            <fieldset >
            <legend>CSS</legend>
              <p>{Top_Left.css}</p>
              <p>{Top_Right.css}</p>
              <p>{Bottom_Left.css}</p>
              <p>{Bottom_Right.css}</p>
            </fieldset>
              <div className='div-button'><button className={buttonCopy}  onClick={this.handleCopy}><AiOutlineCopy/></button></div>
        </div> 
        <div className='container-inputs-3-4'>
          <input onChange={this.handleChange} type='number' name='Bottom_Left' />
          <input onChange={this.handleChange} type='number' name='Bottom_Right' />
        </div>
        
      </main>
    );
  }
}
export default App;