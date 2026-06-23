import { useFlowStore } from '../store/useFlowStore'

function Layout() {
  const count = useFlowStore(s => s.count)
  const decreaseCount = useFlowStore(s => s.decreaseCount)
  const increaseCount = useFlowStore(s => s.increaseCount)

  const buttonClass = `
    transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed
    bg-violet-600 hover:bg-violet-500
    `
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <header className="border-b border-zinc-500 p-4 text-center">
        <div className="container mx-auto">App Header</div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="h-full flex flex-col md:flex-row">
          <aside className="w-full md:w-64 order-2 md:order-1 border-r border-zinc-500 p-4">
            <div className="flex flex-col gap-1">
              <button
                type="button"
                className={buttonClass}
                onClick={decreaseCount}
              >
                Decrease Count
              </button>
              <button
                type="button"
                className={buttonClass}
                onClick={increaseCount}
              >
                Increase Count
              </button>
            </div>
          </aside>

          <div className="w-full md:flex-1 order-1 md:order-2 p-4">
            Primary Content
            <h1>Count is {count}</h1>
          </div>

          <aside className="w-full md:w-72 order-3 md:order-3 border-l border-zinc-500 p-4">
            Secondary Column
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
