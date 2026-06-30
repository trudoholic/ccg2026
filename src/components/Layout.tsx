import MainControls from "./MainControls"
import MainView from "./MainView"
import AsideView from "./AsideView"

function Layout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <header className="border-b border-zinc-500 p-4 text-center">
        <div className="container mx-auto">App Header</div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="h-full flex flex-col md:flex-row">
          <aside className="w-full md:w-64 order-2 md:order-1 border-r border-zinc-500 p-4">
            <MainControls/>
          </aside>

          <div className="w-full md:flex-1 order-1 md:order-2 p-4">
            <MainView/>
          </div>

          <aside className="w-full md:w-72 order-3 md:order-3 border-l border-zinc-500 p-4">
            <AsideView/>
          </aside>
        </div>
      </main>

      <footer className="border-t border-zinc-500 p-4 text-center">
        <div className="container mx-auto">App Footer</div>
      </footer>
    </div>
  )
}

export default Layout
