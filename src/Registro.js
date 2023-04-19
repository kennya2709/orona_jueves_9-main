import React from 'react';
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { gapi } from "gapi-script";
import FacebookLogin from 'react-facebook-login';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function Login() {

   const key_login = "889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com";

   const [user, setUser] = useState({});

   useEffect(() => {
      const start = () => {
         gapi.Auth2.init({
            clientId: key_login,
         });
      }
      gapi.load("client:auth2", start)
   }, [])


   const logeado_exito = (respuesta_exitosa) => {
      console.log("LOGUEADO CON ÉXITO:", respuesta_exitosa.profileObj);
      setUser(respuesta_exitosa.profileObj);
      Swal.fire({
         icon: 'success',
         title: 'BIENVENIDO APP UTD',
      })
   }


   const fallo_login = (res) => {
      console.log("FALLO EN EL ACCESO:", res.profileObj);
      Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'LAS CREDENCIALES SON ERRONEAS',
      })
   }

   const responseFacebook = (response) => {
      console.log(response);
      Swal.fire({
         icon: 'success',
         title: 'BIENVENIDO APP UTD',
      })
   }
   const responseFacebook2 = (response) => {
      console.log(response);
      Swal.fire({
         icon: 'success',
         title: 'BIENVENIDO APP UTD',
      })
   }
   return (

      <>
       
         <header className="App-header">
            <h1>Login</h1>
         <MDBContainer className="p-3 my-5 d-flex flex-column w-20">
            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
            <div className="d-flex justify-content-between mx-3 mb-4">
              
            </div>
            <MDBBtn className="mb-4">Sign in</MDBBtn>
            <div className="text-center">
               <p>or sign up with:</p>

               <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                  <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                     <MDBIcon fab icon='facebook-f' size="sm" />
                     <FacebookLogin
                        appId="721476199692477"
                        autoLoad={false}
                        callback={responseFacebook}
                        onSuccess={responseFacebook}
                        onFailure={responseFacebook2}
                        isSignedIn={false}
                     />
                  </MDBBtn>
                  <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                     <MDBIcon fab icon='google' size="sm" />
                     <div>
                     <GoogleLogin
                        clientId={key_login}
                        autoLoad={false}
                        onSuccess={logeado_exito}
                        onFailure={fallo_login}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false}
                     />
                     </div>
                     <br></br>
                     <div class={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} alt=""/>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
        <h3>{user.googleId}</h3>
        <h3><img  src={user.imgeUrl}
        /></h3>
      </div>
                  </MDBBtn>

               </div>
            </div>

         </MDBContainer>
         </header>
      </>

   )
}



export default Login;