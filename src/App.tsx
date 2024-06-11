function App() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-center items-center bg-neutral-900 gap-8">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold text-white"> Simple React Calculator</h1>
      </div>
      <div className=" bg-neutral-800 flex flex-col gap-4 rounded-xl p-5">
        <div className="p-2 py-4 text-white text-xl text-right bg-neutral-900 rounded-xl">
          0
        </div>
        <div className="buttons grid grid-rows-4 grid-cols-4 gap-4">
        <input type="button" value="7" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />

          <input type="button" value="8" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />
          <input type="button" value="9" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />
          <input type="button" value="AC" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />
          <input type="button" value="4" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />
          <input type="button" value="5" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />
          <input type="button" value="6" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />
          <input type="button" value="-" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />
          <input type="button" value="1" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />
          <input type="button" value="2" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />
          <input type="button" value="3" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />
          <input type="button" value="+" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />
          <input type="button" value="/" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />
          <input type="button" value="0" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />
          <input type="button" value="*" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />
          <input type="button" value="=" className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95" />


        </div>
      </div>
    </div>
  )
}

export default App
