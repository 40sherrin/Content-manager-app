import Layout from 'components/Layout'
import ResourceHighlight from 'components/ResourceHighlight'
import NewsLetter from 'components/NewsLetter'
import ResourceList from 'components/ResourceList'
import Footer from 'components/Footer'


export default function Home() {
  return (
    <Layout>
      <ResourceHighlight />
      <NewsLetter />
      <ResourceList />
      <Footer />
    </Layout>
  )
}
