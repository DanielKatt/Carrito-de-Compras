import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Tittle from './components/Tittle'
import Navbar from './components/Navbar'

 class App extends Component {
   state = {
     productos: [
       {name: "Tomate", price: 1500, imagen: "./productos/tomate.jpg"},
       {name: "Arbejas", price: 2500, imagen: "./productos/arbejas.jpg"},
       {name: "Lechuga", price: 500, imagen: "./productos/lechuga.jpg"},
     ] ,
     carro: [
      
     ], 
   }

   agregarAlCarro = (producto) => {
     const {carro} = this.state
     if (carro.find(x => x.name === producto.name)) {
       const newCarro = carro.map(x => x.name === producto.name
         ? ({
          ...x,
          cantidad: x.cantidad + 1
         })
         : x)
        return  this.setState({ carro: newCarro})
     }
    console.log(producto);
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
   }

   render(){
     return(
       <div>
         <Navbar carro={this.state.carro} />
         <Layout>
           <Tittle />
          <Productos 
                agregarAlCarro = { this.agregarAlCarro}
                productos={this.state.productos}
         />
         </Layout>
         
       </div>
     )
   }
 }

export default App;
