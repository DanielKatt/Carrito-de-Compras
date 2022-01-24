import { Component } from 'react'

const style={
    Layout: {
        backgroundColor: '#BEFAC2',
        color: '#0A283E',
        alignitems: 'center',
        display:'flex',
        flexDirection: 'column',
    },
    container: {
        width: '1200px',

    }
}

class Layout extends Component{
    render(){
        return(
            <div styles={style.Layout}>
                <div styles={style.con}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout