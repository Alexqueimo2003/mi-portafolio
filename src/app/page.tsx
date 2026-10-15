import Link from "next/link";

export default function Home() {
  const technicalSkills = [
    { name: "HTML", category: "Frontend", level: "Avanzado" },
    { name: "CSS", category: "Frontend", level: "Avanzado" },
    { name: "JavaScript", category: "Lenguaje", level: "Avanzado" },
    { name: "React", category: "Frontend", level: "Avanzado" },
    { name: "Next.js", category: "Full-Stack", level: "Intermedio - Avanzado" },
    { name: "Node.js", category: "Backend", level: "Intermedio" },
    { name: "Git", category: "Herramientas", level: "Avanzado" },
    { name: "TypeScript", category: "Lenguaje", level: "Intermedio" },
    { name: "Tailwind CSS", category: "Frontend", level: "Avanzado" },
  ];

  const projects = [
    {
      id: "proyecto-uno",
      title: "Clon Pagina Star Link",
      description:
        "Página elaborada con HTML  y Css puro",
      tech: ["HTML", "CSS", "Github"],
      demoUrl: "https://alexqueimo2003.github.io/proyecto-uno",
      color: "from-blue-600/20 to-cyan-500/20",
    },
    {
      id: "proyecto-dos",
      title: "Sistema de autenticacion",
      description:
        "Sistema para validar usuarios y permitir ingresar a una pagina central con los personajes de Rick y Morty,ademas de Crearse como usuario ",
      tech: ["HTML", "Tailwind CSS", "Github", "JavaScript"],
      demoUrl: "https://alexqueimo2003.github.io/proyecto-dos",
      color: "from-violet-600/20 to-purple-500/20",
    },
    {
      id: "proyecto-tres",
      title: "Gestor de Tareas Ágiles",
      description:
        "Sistema de organización colaborativa tipo Kanban para flujos de trabajo en equipo, etiquetas personalizadas y control con Git.",
      tech: ["HTML", "CSS", "JavaScript", "Git"],
      demoUrl: "https://alexqueimo.github.io/proyecto-tres",
      color: "from-emerald-600/20 to-teal-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased transition-colors duration-200 dark:bg-zinc-950 dark:text-zinc-100">
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Alexqueimo
            </span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              ● Programador Web Full-Stack
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex dark:text-zinc-400">
            <a href="#intro" className="transition-colors hover:text-slate-900 dark:hover:text-white">
              sobre mi 
            </a>
            <a href="#habilidades" className="transition-colors hover:text-slate-900 dark:hover:text-white">
              Habilidades
            </a>
            <a href="#proyectos" className="transition-colors hover:text-slate-900 dark:hover:text-white">
              Proyectos
            </a>
            <a
              href="#contacto"
              className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-slate-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-12 md:py-16">
        {/* 2. INTRO SOBRE MI PERSONA */}
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 text-justify">
          Me dedico a crear soluciones web a la medida. Combino el poder y la flexibilidad del desarrollo a código puro con JavaScript y Tailwind CSS para proyectos dinámicos, junto con la velocidad de despliegue que ofrece WordPress para sitios autogestionables y corporativos. Me enfoco en entregar páginas web atractivas, optimizadas para motores de búsqueda (SEO) y completamente responsivas. Busco integrarme a equipos de desarrollo donde pueda seguir expandiendo mis conocimientos técnicos y resolver problemas reales a través del código.
        </p>
        <section id="intro" className="flex flex-col items-start gap-6 pt-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Disponible para colaborar en nuevos proyectos
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-300">
              Alexander Paraqueimo Garcia
            </span>
          </h1>

          <p className="text-lg font-medium text-emerald-600 sm:text-xl dark:text-emerald-400">
            Programador Web Full-Stack
          </p>

          <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-zinc-400 text-justify">
            Desarrollador apasionado por crear experiencias digitales intuitivas, dinámicas y de alto rendimiento.
            Especializado en la arquitectura e implementación de aplicaciones web modernas, abarcando desde interfaces
            de usuario reactivas y accesibles en el frontend hasta arquitecturas de datos y lógica sólida en el backend.
            Enfocado en buenas prácticas de ingeniería, código limpio y soluciones centradas en el usuario.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              Explorar Proyectos
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Contactar
            </a>
          </div>
        </section>

        {/* 3. CONOCIMIENTOS TÉCNICOS */}
        <section id="habilidades" className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Conocimientos Técnicos
            </h2>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              Herramientas, lenguajes y tecnologías con las que construyo soluciones web robustas:
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {technicalSkills.map((tech) => (
              <div
                key={tech.name}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-emerald-500/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-slate-800 group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400">
                    {tech.name}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500/60"></span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
                  <span>{tech.category}</span>
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {tech.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PROYECTOS */}
        <section id="proyectos" className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Proyectos Destacados
            </h2>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              Selección de entregas y aplicaciones desarrolladas. Cada proyecto cuenta con su enlace demo desplegado en GitHub Pages:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700"
              >
                {/* Espacio reservado para miniatura / Thumbnail Placeholder */}
                <div
                  className={`relative flex aspect-video w-full items-center justify-center border-b border-slate-200 bg-gradient-to-br ${project.color} p-4 dark:border-zinc-800`}
                >
                  {/* Mockup superior tipo ventana de navegador */}
                  <div className="absolute left-3 top-3 flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
                  </div>

                  {/* Icono central de miniatura */}
                  <div className="flex flex-col items-center gap-2 text-center">
                    <svg
                      className="h-10 w-10 text-slate-700/60 dark:text-zinc-300/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span className="text-xs font-semibold tracking-wider uppercase text-slate-600 dark:text-zinc-400">
                      Vista previa miniatura
                    </span>
                  </div>
                </div>

                {/* Contenido de la tarjeta */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                      {project.description}
                    </p>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Botón Ver Demo con enlace de GitHub Pages */}
                  <div className="pt-5">
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white dark:focus:ring-zinc-300"
                    >
                      <span>Ver Demo</span>
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. SECCIÓN DE CONTACTO */}
        <section id="contacto" className="flex flex-col items-center gap-6 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 md:p-12">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Contacto
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base dark:text-zinc-400">
              ¿Tienes una propuesta o quieres colaborar en un proyecto? Puedes contactarme a través de cualquiera de mis canales oficiales:
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Correo Electrónico */}
            <a
              href="mailto:alexqueimo@ejemplo.com"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-700/80"
            >
              <svg className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>Correo electrónico</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/alexqueimo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-700/80"
            >
              <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/alexqueimo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-700/80"
            >
              <svg className="h-4 w-4 text-slate-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer minimalista */}
      <footer className="border-t border-slate-200/80 py-8 text-center text-xs text-slate-500 dark:border-zinc-800/80 dark:text-zinc-500">
        <p>© 2026 Alex Queimo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
