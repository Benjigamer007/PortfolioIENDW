import { NavLink } from 'react-router'

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'rounded-md bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-300'
      : 'rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-cyan-300'

  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <NavLink to="/" className="text-xl font-bold tracking-tight text-white">
          Mi portfolio
        </NavLink>

        <div className="flex flex-wrap gap-2">
          <NavLink to="/" className={linkClass}>
            Inicio
          </NavLink>
          <NavLink to="/proyectos" className={linkClass}>
            Proyectos
          </NavLink>
          <NavLink to="/contacto" className={linkClass}>
            Contacto
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
