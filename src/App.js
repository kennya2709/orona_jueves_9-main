import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Example from './Example';
import Maps from './mapas';
import curri from './imagenes/curri.png'
import fotito from './imagenes/fotito.jpg'
import utd from './imagenes/utd.png'
import login from './imagenes/login.png'
import user from './imagenes/user.png'
import inv from './imagenes/inv.png'
import { UncontrolledTooltip } from 'reactstrap';
import Login from './Login';
import Logout from './LoginLogout';
import Registro from './Registro';
import Login_faceboock from './Login_faceboock';

function App() {
  

  return (

   
    <Container className="mt-3">
      <Router>

        <Switch>

          <Route path="/orona" exact>
            <center> <h1>Welcome you're in the homepage </h1>
            

            <div class="container">
              
      <div class="row">
        <div class="col-3"><h1>Metodo render</h1> <br></br>técnica para compartir código entre componentes en React utilizando una propiedad cuyo valor es una función.</div>
        <div class="col-3"><h1>Metodo strict mode</h1><br></br> simplifica el modo en que el nombre de una variable es asignado a un variable particular en el código.</div>
        <div class="col-3"><h1>Metodo return </h1><br></br>se emplea para salir de la secuencia de ejecución de las sentencias de un método y, opcionalmente, devolver un valor.</div>
      </div> 
  </div>
  <br></br><br></br><br></br>
              <Button variant="dark" as={Link} to='/Example'>Carrusel</Button>
              <Button variant="dark" as={Link} to='/curriculum'>Curriculum</Button>
              <Button variant="dark" as={Link} to='/maps'>Mapa</Button>
              <Button variant="dark" as={Link} to='/alumno'>Alumno</Button>
              <Button variant="dark" as={Link} to='/Carrera'>Carrera</Button>
              <Button variant="dark" as={Link} to='/universidad'>Universidad</Button>
              <Button variant="dark" as={Link} to='/logo'>Logo</Button>
              <Button variant="dark" as={Link} to='/foto'>Fotito</Button>
              <Button variant="dark" as={Link} to='/dibujitos'>Mokcup</Button>
              <Button variant="dark" as={Link} to='/Login'>Login</Button>
              <Button variant="dark" as={Link} to='/Logout'>Salir</Button>
              <Button variant="dark" as={Link} to='/Registro'>Registro</Button>
              <Button variant="dark" as={Link} to='/Login_faceboock'>Face</Button>
              <Button variant="dark" href="https://github.com/kennya2709/orona_jueves_9" >Github</Button>
            </center>
          </Route>

          <Route path="/alumno">
            <center> <h1 class="name">Kennya Cumplido 5 A </h1></center>
          </Route>

          <Route path="/Carrera">
            <center> <h1 class="carrera">Desarrollo de software multiplataforma </h1></center>
          </Route>

          <Route path="/universidad">
            <center><h1 class="uni">UTD</h1></center>
          </Route>

          <Route path="/logo">
            <center>
              <img
                src={utd}
                width="200"
                height="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </center>
          </Route>

          <Route path="/foto">
            <center>
              <img
                src={fotito}
                width="200"
                height="300"
                className="d-inline-block align-top"

              />
            </center>
          </Route>

          <Route path="/Example">
            <Example />
          </Route>
          <Route path="/Login_faceboock">
            <Login_faceboock />
          </Route>


          <Route path="/curriculum">
            <center>
              <img
                src={curri}
                width="700"
                height="750"
                className="d-inline-block align-top"

              />
            </center>
          </Route>

          <Route path="/maps">
            <Maps />
          </Route>

          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Registro">
            <Registro/>
          </Route>

          <Route path="/Logout">
            <Logout/>
          </Route>

          <Route path="/dibujitos">
            <center>
              <img
                src={login}
                
                width="700"
                height="750"
                className="d-inline-block align-top"

              />
              <img
                src={user}
                
                width="700"
                height="750"
                className="d-inline-block align-top"

              />
              <img
                src={inv}
                
                width="700"
                height="750"
                className="d-inline-block align-top"

              />
            </center>
          </Route>


        </Switch>
      </Router>
     
    </Container>
    
  );
}

export default App;
