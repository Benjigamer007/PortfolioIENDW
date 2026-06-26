function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Contacto
        </p>
        <h1 className="mt-4 text-4xl font-bold text-white">Hablemos de tu proximo proyecto</h1>
        <p className="mt-4 leading-7 text-slate-300">
          Podes escribirme para consultar disponibilidad, pedir una propuesta o compartir una idea
          de sitio web.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a
          href="mailto:mail@ejemplo.com"
          className="rounded-lg border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400"
        >
          <span className="text-sm font-semibold text-cyan-300">Email</span>
          <p className="mt-2 text-lg font-bold text-white">mail@ejemplo.com</p>
        </a>
        <a
          href="https://www.linkedin.com"
          className="rounded-lg border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400"
        >
          <span className="text-sm font-semibold text-cyan-300">LinkedIn</span>
          <p className="mt-2 text-lg font-bold text-white">linkedin.com/in/usuario</p>
        </a>
      </div>
    </section>
  )
}

export default Contact
