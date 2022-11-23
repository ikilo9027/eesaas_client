const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants")

module.exports = (phase, { defaultConfig }) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1"
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1"

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      reactStrictMode: false,
      images: {
        // domains: [`${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com`]
        domains: [
          "localhost",
          "aws.amazon.com",
          "test-saas.s3.ap-northeast-2.amazonaws.com",
        ],
      },
      experimental: {
        outputStandalone: true,
      },
      async redirects() {
        return [
          // {
          //   source: "/",
          //   destination: "/auth/signin",
          //   permanent: false,
          // },
          {
            source: "/auth",
            destination: "/auth/signin",
            permanent: false,
          },
        ]
      },
    }
  }

  return {
    /* config options for all phases except development here */
    /* development only config options here */
    reactStrictMode: false,
    images: {
      // domains: [`${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com`]
      loader: "akamai",
      path: "/",
      domains: [
        "localhost",
        "aws.amazon.com",
        "test-saas.s3.ap-northeast-2.amazonaws.com",
      ],
    },
    experimental: {
      outputStandalone: true,
    },
    async redirects() {
      return [
        // {
        //   source: "/",
        //   destination: "/auth/signin",
        //   permanent: false,
        // },
        {
          source: "/auth",
          destination: "/auth/signin",
          permanent: false,
        },
      ]
    },
  }
}
