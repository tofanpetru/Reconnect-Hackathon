import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps })
{
  React.useEffect(() =>
  {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles)
    {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return 
  <Layout>
    <Component {...pageProps} />
  </Layout>
}
