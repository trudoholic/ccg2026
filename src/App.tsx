import './App.css'

function App() {
  return (
    <div
      className="grid grid-cols-1 md:grid-rows-[auto_1fr_auto] md:grid-cols-[250px_1fr] min-h-screen bg-gray-50 text-gray-800">
      <header className="md:col-span-2 bg-indigo-600 text-white p-4 shadow">
        <h1 className="text-xl font-bold">Grid Header</h1>
      </header>

      <aside className="bg-white p-4 border-r border-gray-200">
        <p className="font-semibold mb-2">Navigation</p>
        <ul className="space-y-1 text-sm text-gray-600">
          <li><a href="#" className="hover:text-indigo-600">Link 1</a></li>
          <li><a href="#" className="hover:text-indigo-600">Link 2</a></li>
        </ul>
      </aside>

      <main className="p-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1 border-r border-gray-200">
          <h1 className="text-2xl font-bold mb-4">Primary Content</h1>
          <p>This is your main work area. It expands to fill most of the screen width.</p>
        </div>

        <div className="w-full lg:w-80">
          <h2 className="text-xl font-semibold mb-4">Secondary Column</h2>
          <p>This sidebar houses secondary links, widgets, metadata, or actions.</p>
        </div>
      </main>

      <footer className="md:col-span-2 bg-gray-900 text-gray-400 p-4 text-center text-xs">
        Grid Layout Footer
      </footer>
    </div>
  )
}

export default App
