import './App.css'

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <header className="bg-indigo-600 p-4 text-center text-white shadow-md">
        <div className="container mx-auto font-semibold">App Header</div>
      </header>

      <main className="flex-1 overflow-y-auto bg-gray-100">
        <div className="h-full flex flex-col md:flex-row">
          <aside className="w-full md:w-64 order-2 md:order-1 bg-gray-500 p-4">
            Left Sidebar Content
          </aside>

          <div className="w-full md:flex-1 order-1 md:order-2 bg-white p-4">
            Primary Content
          </div>

          <aside className="w-full md:w-72 order-3 md:order-3 bg-gray-500 p-4">
            Secondary Column
          </aside>
        </div>
      </main>

      <footer className="bg-indigo-700 p-4 text-center text-white shadow-inner">
        <div className="container mx-auto text-sm">App Footer</div>
      </footer>
    </div>
  )
}

export default App
