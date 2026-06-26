function CarddProject({ title, description, tags = [] }) {
  return (
    <article className="rounded-lg border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/60 hover:bg-slate-900">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="mt-3 leading-7 text-slate-300">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-800 px-3 py-1 text-xs font-semibold text-cyan-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export default CarddProject
