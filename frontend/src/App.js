import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';

export default class App extends Component {
  state = {
    nombre: '',
    apellido: '',
    edad: '',
    telefono: '',
    empresa: '',
    cliente: [],
    _id:'',
  }
  
  //this.sendClient= this.sendClient.bind(this);
  //this.handleChange= this.handleChange.bind(this);

componentDidMount(){
this.listClient();
}

async listClient(){
  const res= await axios.get("http://localhost:8000/api/list");
    this.setState({cliente:res.data.clients})  
    console.log(res.data.clients)
}


  saveClient = async () => {
//    e.preventDefault();
    if(this.state._id){
      axios.put("http://localhost:8000/api/edit/"+this.state._id,{
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        edad: this.state.edad,
        telefono: this.state.telefono,
        empresa: this.state.empresa
      })
      
      
    }else{
      await axios.post("http://localhost:8000/api/create", {
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        edad: this.state.edad,
        telefono: this.state.telefono,
        empresa: this.state.empresa
      });
      this.listClient();
    }
    

  }

  sendClient = async (e) => {
    this.saveClient();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  editClient= async (id)=>{
    const userdetalle= await axios.get("http://localhost:8000/api/detail/"+id);
    console.log(userdetalle.data.client);

     this.setState({
      nombre: userdetalle.data.client.nombre,
      apellido: userdetalle.data.client.apellido,
      edad: userdetalle.data.client.edad,
      telefono: userdetalle.data.client.telefono,
      empresa: userdetalle.data.client.empresa,
      _id:userdetalle.data.client._id
    })

    
   }

  deleteClient = async (id) =>{
    await axios.delete("http://localhost:8000/api/delete/"+id);
    this.listClient();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <a href="/" className="nav-link">Proyecto clientes</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Cliente</h5>
                  <form action="" onSubmit={this.sendClient}>
                    <div className="row">
                      <div className="form-group col-12">
                        <input type="text" name="nombre" className="form-control" placeholder="Nombre" value={this.state.nombre} onChange={this.handleChange} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-12">
                        <input type="text" name="apellido" className="form-control" placeholder="Apellido" value={this.state.apellido} onChange={this.handleChange} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-3">
                        <input type="text" name="edad" className="form-control" placeholder="Edad" value={this.state.edad} onChange={this.handleChange} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-12">
                        <input type="text" name="telefono" className="form-control" placeholder="Telefono" value={this.state.telefono} onChange={this.handleChange} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-12">
                        <input type="text" name="empresa" className="form-control" placeholder="Empresa" value={this.state.empresa} onChange={this.handleChange} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-12">
                        <button className="btn btn-primary" type="submit" >Guardar</button>

                      </div>

                    </div>

                  </form>
                </div>
              </div>
            </div>
          

          <div className="col-7">
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Edad</th>
                  <th>Teléfono</th>
                  <th>Empresa</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.cliente.map(user =>{
                    return(
                      <tr key={user._id} >
                        <td>{user.nombre}</td>
                        <td>{user.apellido}</td>
                        <td>{user.edad}</td>
                        <td>{user.telefono}</td>
                        <td>{user.empresa}</td>
                        <td className="row">
                          <button className="btb btn-primary" onClick={()=> this.editClient(user._id)}> Editar
                           
                          </button>
                          <button className="btn btn-primary ml-3" onClick={()=> this.deleteClient(user._id)}>Eliminar
                          
                          </button>                                            
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>

          </div>         
        </div>
      </div>
    );
  }
}


