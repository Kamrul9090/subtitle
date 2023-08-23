import Layout from "./main/layout";
import Main from "./main/page";

export default function Home({ children }) {
  return (
    <main>
      <Layout>
        <Main></Main>
      </Layout>
    </main>
  )
}
