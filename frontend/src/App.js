import React,{Component} from 'react';
import axios from 'axios';
import './css/App.css';

export default class App extends Component{
    state={
      nombre:'',
      apellido:'',
      edad: '',
      telefono: '',
      empresa:''
    }
      //this.sendClient= this.sendClient.bind(this);
      //this.handleChange= this.handleChange.bind(this);
  

  saveClient=async()=>{
    try{
    const pos=await axios.post('http://localhost:8000/api/create',{
      nombre:this.state.nombre,
      apellido:this.state.apellido,
      edad:this.state.edad,
      telefono:this.state.telefono,
      empresa:this.state.empresa
    });
    
  }catch(err){
    console.error(err);
  }
    
  }

   sendClient=async(e)=>{
  //consumo api método POST para crear un cliente y le envió los datos que se guardan en la bd
    
    await axios.post("http://localhost:8000/api/create",{
      nombre:this.state.nombre,
      apellido:this.state.apellido,
      edad:this.state.edad,
      telefono:this.state.telefono,
      empresa:this.state.empresa
        });
  }

  handleChange=(e)=>{
    const {name,value}=e.target;
    this.setState({
      [name]: value
    })
    
  }

  render(){
    return(
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
                      <input type="text" name="nombre" className="form-control" placeholder="Nombre" value={this.state.nombre} onChange={this.handleChange}/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-12">
                      <input type="text" name="apellido" className="form-control" placeholder="Apellido" value={this.state.apellido} onChange={this.handleChange}/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-3">
                      <input type="text" name="edad" className="form-control" placeholder="Edad" value={this.state.edad} onChange={this.handleChange}/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-12">
                      <input type="text" name="telefono" className="form-control" placeholder="Telefono" value={this.state.telefono} onChange={this.handleChange}/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-12">
                      <input type="text" name="empresa" className="form-control" placeholder="Empresa" value={this.state.empresa} onChange={this.handleChange}/>
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
          </div>
        </div>
      </div>
    );
  }
}


