import { Component } from 'react'
import Button from './Button'


const Styles = {
    producto: {
      border: 'solid 3px #eee',
      boxShadow: '0 5px 5px rgb(0, 0, 0, 0.3)',
      width: '20%',
      padding: '10px 15px',
      borderRadius: '15px',
      margin: 'auto'
    },
    img: {
        width: '100%'
    }
}

class Producto extends Component{
    render(){
        const { producto, agregarAlCarro } = this.props
        return (
            <div style={Styles.producto}>
                <img style={Styles.img} alt={producto.name} src={producto.imagen} />
                <h3>{producto.name} </h3>
                <h3>{producto.price} </h3>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto