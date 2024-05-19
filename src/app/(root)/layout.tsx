import Header from 'src/features/header'
import Footer from 'src/features/footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-grow w-full m-auto min-h-screen ">{children}</main>
      <Footer />
    </>
  )
}
