
function Navbar() {
  return (
    <>
        <nav className=" bg-slate-900 text-neutral-100 h-14 ">
            <div>
                <ul className="flex gap-10  text-lg text-center justify-start mr-5 p-3">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contac">Contac</a></li>
                    <li><a href="/login">LogIn</a></li>
                </ul>
            </div>
            
            
        </nav>
    </>
  )
}

export default Navbar