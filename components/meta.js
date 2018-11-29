import Head from 'next/head'
export default ({ props = { title, description } }) => (
  <div>
    <Head>
      <title>{ props.title || "Nuxt Test" }</title>
      <meta name="description" content={ props.description || "Next.js project"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
  </div>
)