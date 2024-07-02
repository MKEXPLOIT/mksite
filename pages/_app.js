import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application


function ImageComponent() {
  return (

      <h2>fundo.png</h2>
      <img src={exampleImage} alt="Fundo.png" />
