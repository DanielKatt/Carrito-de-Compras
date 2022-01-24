import { Component } from 'react'

const styles = {
    button: {
        backgroundColor: '#FFBBBF',
        color: '#4F4350',
        padding: '35px 15px',
        borderRadius: '10%',
        cursor: 'pointer',
    }
}

class Button extends Component{
    render(){
        return(
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button