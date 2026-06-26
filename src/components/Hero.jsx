import { Link } from 'react-router'
import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Desarrollo Web Frontend
        </p>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Hola, soy Fulanito y construyo webs interactivas
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          Este portfolio esta construido usando React, Tailwind CSS y React Router.
          Incluye componentes reutilizables, rutas limpias y una interfaz responsive.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/proyectos"
            className="rounded-md bg-cyan-400 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Ver proyectos
          </Link>
          <Link
            to="/contacto"
            className="rounded-md border border-slate-700 px-5 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
          >
            Contacto
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 blur-3xl" />
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-cyan-950/30">
          <img
            src={heroImage}
            alt="Ilustracion de desarrollo web"
            className="mx-auto w-full max-w-sm object-contain"
          />
          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
            <span className="rounded-lg bg-slate-800 px-3 py-2 text-slate-200">React</span>
            <span className="rounded-lg bg-slate-800 px-3 py-2 text-slate-200">CSS</span>
            <span className="rounded-lg bg-slate-800 px-3 py-2 text-slate-200">Router</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
