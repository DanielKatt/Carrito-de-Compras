import {Component} from 'react'

const Styles={
    titulo:{
        marginTop: '0px',
        marginBottom: '0px',
        backgroundColor: '#fff'
    }
}

class Title extends Component{
    render(){
        return(
            <h1 style={Styles.titulo}>Productos</h1>
        )
    }
}

export default Title