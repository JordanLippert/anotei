import { Editor } from "./components/Editor";

export function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-800 bg-gradient-to-t from-red-800 via-red-600 to-amber-300">
      <div className="bg-white w-[1350px] mx-auto rounded-xl min-h-[625px] shadow-md border border-black/25 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
        <div className="flex gap-2 group">
          <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-600"/>
          <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400"/>
          <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-500"/>
        </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  )
}