import {Component} from 'react'
import Logo from './Logo'
import Carro from './Carro'

const Styles = {
    navbar: {
        backgroundColor: '#E4C1F9',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0px 60px',
        boxShadow: '0 3px 4px rgba(0,0,0,0.4)'
    }
} 

class Navbar extends Component{
    render(){
        const { carro } = this.props
        return(
            <nav style={Styles.navbar}>
                <Logo />
                <Carro carro={carro} />
            </nav>
        )
    }
}

export default Navbar