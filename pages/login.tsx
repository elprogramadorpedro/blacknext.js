// pages/login.tsx

import { NextPage } from "next";
import Head from "next/head";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import React from "react";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Página de inicio de sesión" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-dark full-height d-flex align-items-center justify-content-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="login-container">
                <div className="inner-container">
                  <h2>Iniciar sesión</h2>
                  <Form>
                    <FormGroup>
                      <Label for="email">Correo electrónico</Label>
                      <Input type="email" name="email" id="email" placeholder="Ingrese su correo electrónico" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Contraseña</Label>
                      <Input type="password" name="password" id="password" placeholder="Ingrese su contraseña" />
                    </FormGroup>
                    <Button color="primary" block>Ingresar</Button>
                  </Form>
                </div>
                <p className="recover-password">¿Olvidaste tu contraseña?</p>
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      <style jsx>{`
        .login-container {
          background-color: white;
          padding: 20px;
          border-radius: 20px;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
        }
        
        .inner-container {
          margin-bottom: 20px;
        }
        
        .recover-password {
          text-align: center;
          margin-top: 20px;
        }

        .full-height {
          height: 100vh; /* 100% de la altura de la ventana */
          width: 100%; /* 100% del ancho de la ventana */
        }
      `}</style>
    </>
  );
};

export default Login;
