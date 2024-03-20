// pages/cart.tsx

import Header from '../src/coponents/Header'
import { NextPage } from "next";
import Head from "next/head";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>

      <h1>
        Carrinho
        oiiiiiiiiiiiiiiiiiiiiiiiiiii
      </h1>
    </>
  )
}

export default Cart