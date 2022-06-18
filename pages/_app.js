import Layout from '../components/UI/layout'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
