// pages/cart.tsx

import { NextPage } from "next"
import Head from "next/head"


const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
      <p>Email</p>
      <p>Senha</p>
      </main>
    </>
  )
}

export default Login