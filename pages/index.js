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

    <style> 
              * {
                 margin:0;
                 padding: 0;
                 box-sizing: 0; 
                 }
                body {
                    width: 100xw;
                    heigh: 100vh;
                    background-image: url('./fundo.png');
                }
</style>


        
      <main>
        <Header title="VMK" />
        <p className="description">
        @prodvmk

  
        </p>
      </main>
         
        <a href="https://www.behance.net/mikeardanuy"> Behance </a>
        <a href="https://www.youtube.com/playlist?list=PLUhy-9f5jFc8x-lVorojTHwYKAmLLYDxN"> Clipes </a>
        <a href="https://wa.me/5544988391421?text=Ol%C3%A1%2C+Falo+com+o+Mk+%3F"> Contato </a>
      
      
      
        <a href="https://open.spotify.com/intl-pt/artist/0EnsJnUjdeUgSodjAEKJUJ"> Spotify </a> 
        <a href="https://www.youtube.com/channel/UC-5DZ2iBhLW6wgIGo2a0cGA"> Youtube </a>
        





      <Footer />
    </div>
  )
}
