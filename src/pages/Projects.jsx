import CarddProject from '../components/CarddProject'

const projects = [
  {
    title: 'Landing interactiva',
    description:
      'Pagina responsive con componentes reutilizables, estilos con Tailwind y navegacion fluida.',
    tags: ['React', 'Tailwind', 'Responsive'],
  },
  {
    title: 'Panel de tareas',
    description:
      'Interfaz para organizar estados, prioridades y acciones frecuentes con una experiencia simple.',
    tags: ['Componentes', 'Estado', 'UI'],
  },
  {
    title: 'Portfolio personal',
    description:
      'Sitio con rutas, secciones claras y una base visual consistente para mostrar trabajos.',
    tags: ['Router', 'Vite', 'CSS'],
  },
]

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Proyectos
        </p>
        <h1 className="mt-4 text-4xl font-bold text-white">Trabajos destacados</h1>
        <p className="mt-4 leading-7 text-slate-300">
          Una seleccion de interfaces pensadas para practicar estructura, componentes y diseno
          responsive.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <CarddProject key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
