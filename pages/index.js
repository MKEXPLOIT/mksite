import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React from 'react';
import exampleImage from '../public/fundo.png'; // Importa a imagem

export default function Home() {
  return (
    <div className="container">
      <Head>

        <title>Vmk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

  function ImageComponent() {
  return (
    <div>
      <h2>fundo.png</h2>
      <img src={exampleImage} alt="fundo.png" />
     

        
      <main>
        <Header title="VMK" />
        <p className="description">
        @prodvmk

  
        </p>
      </main>
         
        <a href="https://www.behance.net/mikeardanuy"> Behance </a>
        <a href="https://www.youtube.com/playlist?list=PLUhy-9f5jFc8x-lVorojTHwYKAmLLYDxN"> Clipes </a>
        <a href="https://wa.me/5544991001421?text=Ol%C3%A1%2C+Falo+com+o+Mk+%3F"> Contato </a>
        <a href="https://www.youtube.com/channel/UC-5DZ2iBhLW6wgIGo2a0cGA"> EP Sansara </a>
        


      <Footer />
    </div>
  )
}
