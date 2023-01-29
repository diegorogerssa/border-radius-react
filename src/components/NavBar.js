import React, { Component } from 'react'
import '../styles/NavBar.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'

class NavBar extends Component{
  constructor(props){
    super()
      this.state = {
        menu: 'nav-close',
      }
  }
mudarClasseOpen = () => {
  const { menu } = this.state
    menu === 'nav-close'? this.setState({ menu:'nav-container' }):this.setState({ menu:'nav-close' })
}

mudarClasseClose = () => {
  const { menu } = this.state
    menu === 'nav-close'? this.setState({ menu:'nav-container' }):this.setState({ menu:'nav-close' })
}

  render(){
    const { menu } = this.state
    return(
      <header className='header-container'>
        
          <h1>&lt; Diego Rogers /&gt;</h1>
          <button onClick={this.mudarClasseOpen} className='icon-button'><AiOutlineMenu className='icon-menu' /></button>
        
        <nav id='nav-container' className = { menu }>
          <ul>
            <li><a className='nav-bar-link' href='#'>&lt; Home /&gt;</a></li>
            <li><a className='nav-bar-link'href='#'>&lt; Projetos /&gt;</a></li>
            <li><a className='nav-bar-link'href='#'>&lt; Sobre mim /&gt;</a></li>
            <button onClick={this.mudarClasseClose} className='icon-btn-close' ><GrClose/></button>
          </ul>
      </nav>
      </header>
    )
  }
}
export default NavBar;