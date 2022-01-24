import {Component} from 'react'
import BubbleAlert from './BubbleAlert'


const styles={
    carro:{
        backgroundColor: '#FFC898',
        border: 'none',
        padding: '15px',
        borderRadius: '10%',
        cursor: 'pointer',
        boxShadow: '0 3px 4px rgba(0,0,0,0.2)'
    },
    bubble: {
        position: 'relative',
        left: 12, 
        top: 25
    }
}

class Carro extends Component{
    render(){
        const { carro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return(
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0
                    ? <BubbleAlert value={cantidad} />
                    : null}
                </span>
                <button style={styles.carro}>
                    Carro
                </button>
            </div>
        )
    }
}

export default Carro