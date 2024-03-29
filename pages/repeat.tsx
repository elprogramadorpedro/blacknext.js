// pages/login.tsx
import Link from "next/link";
import { NextPage } from "next";
import Head from "next/head";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import React from "react";
import Header from "@/coponents/Header";

const Repeat: NextPage = () => {
  return (
    <>
      <Head>
        <title>Repeat Password</title>
        <meta name="description" content="Página de inicio de sesión" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        
      </div>
     <Header></Header>
      <main className=" full-height d-flex align-items-center justify-content-center">
        
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="login-container">
                <div className="inner-container">
                  <h2>Recuperar senha</h2>
                  <Form>
                    <FormGroup>
                      <Label for="password">Senha</Label>
                      <Input type="email" name="email" id="email" placeholder="Coloque sua senha" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Repetir Senha</Label>
                      <Input type="password" name="password" id="password" placeholder="Repeta a senha" />
                    </FormGroup>
                    <Button color="primary" block>Entrar</Button>
                  </Form>
                </div>
              
              </div>
            </Col>
          </Row>

<div className="d-flex justify-content-center  mt-5">

 
</div>
         
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
          height: 94vh; /* 100% de la altura de la ventana */
          width: 100%; /* 100% del ancho de la ventana */
        }

        .regis-hover:hover{
            color:red;
        }
      `}</style>
    </>
  );
};

export default Repeat;
