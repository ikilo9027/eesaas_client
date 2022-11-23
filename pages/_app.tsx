import { useEffect, useState } from "react"
import "../styles/global.css"
import PropTypes from "prop-types"
import Head from "next/head"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import Router from "next/router"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider, EmotionCache } from "@emotion/react"
import theme from "../src/theme"
import createEmotionCache from "../src/createEmotionCache"
import MainHome from "@components/MainHome"
import "../styles/nprogress.css"
import { Box } from "@mui/material"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"
// Client-side cache, shared for the whole session of the user in the browser.

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const router = useRouter()

  const path = (/#!(\/.*)$/.exec(router.asPath) || [] || router.route !== '/_error')[1]
  if (path) {
    router.replace(path)
  }

  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const start = () => {
      // NProgress.start()
      setLoading(true)
      setOpen(!open)
    }
    const end = () => {
      // NProgress.done()
      setLoading(false)
      setOpen(false)
    }

    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)

    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>EESaaS</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, user-scalable=no"
        />
        <meta
          name="google-signin-client_id"
          content="180404248034-1605phlgrof7j3kbj6b5ltam27ke7oud.apps.googleusercontent.com"
        ></meta>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {loading && (
          <Box>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <CircularProgress color="inherit" size={80} />
            </Backdrop>
          </Box>
        )}
        <MainHome />
        <Component {...pageProps} />
        {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}
      </ThemeProvider>
    </CacheProvider>
  )
}
export default MyApp;
// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   emotionCache: PropTypes.object,
//   pageProps: PropTypes.object.isRequired,
// }
