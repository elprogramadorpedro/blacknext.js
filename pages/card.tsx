// pages/cart.tsx
import Link from "next/link";
import { NextPage } from "next"
import Head from "next/head"
import { Container } from "reactstrap"
import Header from "../src/coponents/Header"
import CartTable from "../src/coponents/CartTable"
import CartTotal from "../src/coponents/CartTotal"

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container className="mb-5">
          <h1 className="my-5">
            Carrinho
          </h1>
          <CartTable/>
          <CartTotal/>

<div className="row">
  <div className="d-flex justify-content-end pt-3">
<Link href="/login " passHref legacyBehavior >
          <button type="button" className="btn btn-primary">Pagar</button>
          </Link>

  </div>
          
 </div>         
          
        </Container>
      </main>
    </>
  )
}

export default Cart