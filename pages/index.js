import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Vmk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="VMK" />
        <p className="description">
          Eternizando quadros.
          @prodvmk @vmkvisuals

<a> https://i.pinimg.com/originals/52/ee/db/52eedbd99898f136f9b7b7b9d4395dcc.gif </a>

        </p>
      </main>

<script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1P6NPdF6QS4xmb6iPnPi1Qxi"
  publishable-key="pk_live_51P4ZOKF6QS4xmb6iZ1cDygZCrYDJeuh0zeyRzwvg4M8JySB7Nv1nghsa8vD3BtvS1iYUFcrQtWKo8OTEq9k0YaDq00zZGdFi8L"
>
</stripe-buy-button>



      <Footer />
    </div>
  )
}
