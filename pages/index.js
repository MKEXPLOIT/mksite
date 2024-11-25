import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React from 'react';
import exampleImage from '../public/Fundo.png'; // Importa a imagem

export default function Home() {
  return (
    <div className="container">
      <Head>

        <title>rn the mage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


        
      <main>
        <Header title="rnthemage" />
        <p className="description">
        @prodrnk 

  
        </p>
      </main>
         
        <a href="0x11f3827f2475dd1a6cF8bd1ea0012C9E93CEdc5F"> Buy me a coffe, Wallet. <-- </a>
        <a href="pix=vmklink@gmail.com"> Buy me a coffe, Wallet. <-- </a>
        <a href="https://www.youtube.com/playlist?list=PLUhy-9f5jFc8x-lVorojTHwYKAmLLYDxN"> Clipes </a>
        <a href="https://x.com/vm_rnk"> Contato </a>
        <a href="https://www.youtube.com/@prodrnk3"> Music </a>
        


      <Footer />
    </div>
  )
}
