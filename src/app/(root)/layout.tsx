import Header from 'src/features/header'
import Footer from 'src/features/footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full m-auto">{children}</main>
      <Footer />
    </>
  )
}
