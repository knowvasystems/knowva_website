import { Linkedin, Twitter, Github, Award } from "lucide-react";
import { teamMembers } from "../lib/content";

export default function Team() {
  return (
    <section id="team" className="bg-slate-50/70 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600">
            Expert Team
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
            Our certified experts
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Meet the senior systems architects and security engineers who lead your technical strategy and implementation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-md shadow-slate-200/60 border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-300/60"
            >
              {/* Photo */}
              <div className="relative h-80 w-full overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

                {/* Floating Role Badge */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-xs font-medium text-indigo-200 mt-0.5">{member.role}</p>
                </div>
              </div>

              {/* Card Footer with Details & Socials */}
              <div className="p-6">
                <p className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                  <Award className="size-4 text-indigo-600 shrink-0" />
                  <span>{member.expertise}</span>
                </p>

                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-slate-100 text-slate-400">
                  <span className="text-xs font-semibold text-slate-400">Connect:</span>
                  <a href="#" className="hover:text-indigo-600 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="size-4" />
                  </a>
                  <a href="#" className="hover:text-indigo-600 transition-colors" aria-label="Twitter">
                    <Twitter className="size-4" />
                  </a>
                  <a href="#" className="hover:text-indigo-600 transition-colors" aria-label="GitHub">
                    <Github className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
