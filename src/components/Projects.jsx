import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../lib/content";

const categories = ["All", "Cloud Solutions", "Software Development", "Cyber Security", "IT Management"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="bg-slate-50/70 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="reveal-text inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600">
              Our Portfolio
            </span>
            <h2 className="reveal-text delay-100 mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
              The amazing project that has been completed
            </h2>
            <p className="reveal-text delay-200 mt-3 max-w-xl text-base text-slate-600">
              Explore recent digital platforms, security architectures, and mission-critical cloud deployments engineered by our teams.
            </p>
          </div>

          {/* Category Filters */}
          <div className="reveal-text delay-200 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md shadow-slate-200/60 border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-300/60"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-indigo-700 shadow-sm">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-400">View Case Study</span>
                  <div className="flex size-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition-all duration-200 group-hover:bg-indigo-600 group-hover:text-white">
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
