import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function IconWrapper({ children, size = 18, className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        {children}
      </svg>
    </span>
  );
}

function GithubIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3" />
      <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </IconWrapper>
  );
}

function LinkedinIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </IconWrapper>
  );
}

function MailIcon(props) {
  return (
    <IconWrapper {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </IconWrapper>
  );
}

function PhoneIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.61 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.3a2 2 0 0 1 2.11-.45c.84.28 1.72.49 2.62.61A2 2 0 0 1 22 16.92z" />
    </IconWrapper>
  );
}

function SparklesIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M12 3l1.9 4.1L18 9l-4.1 1.9L12 15l-1.9-4.1L6 9l4.1-1.9L12 3z" />
      <path d="M5 17l.9 2.1L8 20l-2.1.9L5 23l-.9-2.1L2 20l2.1-.9L5 17z" />
      <path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z" />
    </IconWrapper>
  );
}

function ArrowUpRightIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </IconWrapper>
  );
}

function BrainIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M9.5 2a3.5 3.5 0 0 0-3.5 3.5V6a3 3 0 0 0-2 2.83A3 3 0 0 0 5 11.5V12a3 3 0 0 0 3 3h1" />
      <path d="M14.5 2A3.5 3.5 0 0 1 18 5.5V6a3 3 0 0 1 2 2.83A3 3 0 0 1 19 11.5V12a3 3 0 0 1-3 3h-1" />
      <path d="M12 2v20" />
      <path d="M8 8h1" />
      <path d="M15 8h1" />
      <path d="M8 13h1" />
      <path d="M15 13h1" />
      <path d="M9 18h6" />
    </IconWrapper>
  );
}

function DatabaseIcon(props) {
  return (
    <IconWrapper {...props}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </IconWrapper>
  );
}

function CodeIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 4-4 16" />
    </IconWrapper>
  );
}

function BriefcaseIcon(props) {
  return (
    <IconWrapper {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M2 12h20" />
    </IconWrapper>
  );
}

function GraduationCapIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="m2 10 10-5 10 5-10 5-10-5z" />
      <path d="M6 12v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" />
    </IconWrapper>
  );
}

function AwardIcon(props) {
  return (
    <IconWrapper {...props}>
      <circle cx="12" cy="8" r="6" />
      <path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11" />
    </IconWrapper>
  );
}

function IntroScreen({ onFinish }) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      onFinish();
    }, 2600);

    return () => window.clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_22%),radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.14),transparent_28%)]" />

      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative px-6 text-center"
      >
        <motion.div
          initial={{ width: 0, opacity: 0.5 }}
          animate={{ width: 220, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mx-auto mb-8 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
        />

        <motion.p
          initial={{ letterSpacing: "0.6em", opacity: 0 }}
          animate={{ letterSpacing: "0.28em", opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-cyan-300"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-4xl font-bold tracking-tight text-white md:text-7xl"
        >
          Megha Rajeev
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-4 text-sm text-slate-300 md:text-base"
        >
          AI-focused Software Engineering Student
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mx-auto mt-8 h-1 w-40 origin-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.7, 1] }}
          transition={{ duration: 1.4, delay: 1.5 }}
          className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-400"
        >
          Opening portfolio...
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

function MainPortfolioContent() {
  const skills = {
    Languages: ["Python", "Java", "C++", "JavaScript"],
    "Backend & APIs": ["FastAPI", "Spring Boot", "REST APIs", "API Integration"],
    Databases: ["SQL", "MongoDB", "PostgreSQL"],
    "AI / ML": [
      "Machine Learning",
      "NLP",
      "Computer Vision",
      "Deep Learning Fundamentals",
      "LLM-based Systems",
      "Data Preprocessing",
      "Model Evaluation",
      "Prompt Engineering",
    ],
    Frontend: ["React.js", "HTML", "CSS", "JavaScript"],
    Tools: ["Git", "Version Control", "Agile/Scrum", "AWS Fundamentals"],
  };

  const projects = [
    {
      title: "Smart City Platform",
      period: "Ongoing",
      stack: "Java, Spring Boot, React, PostgreSQL",
      points: [
        "Designed a city-scale platform to help newcomers with jobs, housing, emergency services, and utilities.",
        "Built RESTful APIs with location-based filtering for nearby hospitals, transport, groceries, and public services.",
        "Applied modular architecture and OOP principles to improve scalability and maintainability.",
      ],
      tag: "Full-Stack",
    },
    {
      title: "Sensi-Talk",
      period: "2025",
      stack: "Python, MediaPipe, FastAPI",
      points: [
        "Developed a real-time assistive system that converts gestures and speech into readable and audible outputs.",
        "Implemented efficient processing pipelines to reduce latency and improve reliability.",
        "Shortlisted for the Prototype Round of Triwizardathon 1.0 by MLSI.",
      ],
      tag: "Assistive AI",
    },
    {
      title: "TrendMoni",
      period: "2025",
      stack: "Python, FastAPI, NLP",
      points: [
        "Built backend components for real-time data collection, analysis, and summarization.",
        "Transformed raw data into actionable insights using NLP-driven workflows.",
        "Received appreciation from the Product Space founder for technical execution.",
      ],
      tag: "Analytics",
    },
    {
      title: "EnviroScan",
      period: "AI Internship Project",
      stack: "Python, ML, XGBoost, Geospatial Data, FastAPI",
      points: [
        "Built an AI-based system to identify pollution sources using machine learning and geospatial data.",
        "Processed environmental datasets including pollution, weather, and location data for model training.",
        "Engineered distance-based geospatial features and rule-based labels for source classification.",
      ],
      tag: "AI + Geo",
    },
  ];

  const experience = [
    {
      title: "Infosys Springboard Virtual Internship – AI Intern",
      period: "Present",
      points: [
        "Working on applied AI concepts and real-world problem solving.",
        "Developed EnviroScan, an AI-based pollution source identification system using machine learning and geospatial analytics.",
      ],
    },
    {
      title: "Darzi AI – Resume Tailor Suite | Open Source Contributor",
      period: "2025",
      points: [
        "Built an AI-driven resume optimization system using NLP to match resumes with job descriptions.",
        "Applied text preprocessing, keyword extraction, and similarity analysis to improve ATS alignment.",
      ],
    },
    {
      title: "Data Science Club (DSOC) – Contributor",
      period: "Present",
      points: [
        "Contributing to AI-based projects involving machine learning, data analysis, and intelligent systems.",
      ],
    },
  ];

  const certificates = [
    "Python",
    "Natural Language Processing",
    "Prompt Engineering",
    "Agile Scrum",
    "Generative AI",
    "Computer Vision",
    "CSS3",
    "MATLAB",
    "Artificial Intelligence",
    "Data Science",
    "HTML5",
    "AWS",
    "Deep Learning",
    "JavaScript",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950"
    >
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_24%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_24%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300">MEGHA RAJEEV</p>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <SparklesIcon size={16} /> AI-focused Software Engineering Student
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl md:leading-[1.1]">
              Building intelligent software, backend systems, and AI-powered products.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I’m Megha Rajeev, an AI-focused software engineering student passionate about machine learning,
              backend engineering, full-stack development, and solving practical problems through thoughtful systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {["Python", "Java", "FastAPI", "React", "Machine Learning", "APIs"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="mailto:megharajeev.official@gmail.com" className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]">
                <MailIcon size={18} /> Contact Me
              </a>
              <a href="https://github.com/megharajeev28" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-semibold transition hover:bg-white/5">
                <GithubIcon size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/megha-rajeev-bb5559277" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-semibold transition hover:bg-white/5">
                <LinkedinIcon size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-fuchsia-500/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                  <div className="flex items-center gap-3">
                    <GraduationCapIcon className="text-cyan-300" size={20} />
                    <p className="text-sm text-slate-400">Education</p>
                  </div>
                  <p className="mt-3 font-semibold">Integrated M.Tech in Artificial Intelligence</p>
                  <p className="text-slate-300">VIT Bhopal University</p>
                  <p className="text-slate-400">CGPA: 8.74</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                  <div className="flex items-center gap-3">
                    <BrainIcon className="text-cyan-300" size={20} />
                    <p className="text-sm text-slate-400">Focus Areas</p>
                  </div>
                  <p className="mt-3 text-slate-200">AI Systems, Backend Development, APIs, NLP, Intelligent Applications</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                  <div className="flex items-center gap-3">
                    <BriefcaseIcon className="text-cyan-300" size={20} />
                    <p className="text-sm text-slate-400">Current Role</p>
                  </div>
                  <p className="mt-3 text-slate-200">Infosys Springboard Virtual Internship – AI Intern</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl space-y-8 px-6 pb-20">
        <motion.section id="about" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }} className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="mt-4 leading-8 text-slate-300">
              I have strong foundations in data structures, algorithms, object-oriented programming, backend development,
              and web application design. I enjoy building project-driven solutions that combine machine learning with
              practical engineering, especially in areas like intelligent systems, data processing, and assistive technology.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold">Highlights</h2>
            <div className="mt-5 space-y-4 text-slate-300">
              <div className="rounded-2xl bg-slate-900/70 p-4">AI Intern at Infosys Springboard</div>
              <div className="rounded-2xl bg-slate-900/70 p-4">Open-source contributor in AI and software projects</div>
              <div className="rounded-2xl bg-slate-900/70 p-4">Experience with FastAPI, Spring Boot, React, SQL, and ML workflows</div>
              <div className="rounded-2xl bg-slate-900/70 p-4">Built AI systems in environmental intelligence and assistive communication</div>
            </div>
          </div>
        </motion.section>

        <motion.section id="projects" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ duration: 0.5 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Portfolio</p>
              <h2 className="mt-2 text-3xl font-semibold">Featured Projects</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400">A selection of AI, backend, and full-stack projects focused on real-world usability, scalable design, and intelligent features.</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="group rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 shadow-lg transition hover:-translate-y-1 hover:border-cyan-400/30">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="mb-3 inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">{project.tag}</div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{project.period}</span>
                </div>
                <p className="mt-3 text-sm text-cyan-200">{project.stack}</p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                  {project.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                  Project Overview <ArrowUpRightIcon size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="experience" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-3xl font-semibold">Experience</h2>
          <div className="mt-8 space-y-6">
            {experience.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-sm text-slate-400">{item.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="skills" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }} className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="flex items-center gap-3">
              <CodeIcon className="text-cyan-300" size={22} />
              <h2 className="text-3xl font-semibold">Skills</h2>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <h3 className="font-semibold text-cyan-200">{group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex items-center gap-3">
                <AwardIcon className="text-cyan-300" size={22} />
                <h2 className="text-3xl font-semibold">Certificates</h2>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {certificates.map((item) => (
                  <span key={item} className="rounded-full bg-cyan-400/10 px-3 py-2 text-sm text-cyan-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex items-center gap-3">
                <DatabaseIcon className="text-cyan-300" size={22} />
                <h2 className="text-2xl font-semibold">What I Enjoy Building</h2>
              </div>
              <ul className="mt-5 space-y-3 leading-7 text-slate-300">
                <li>• AI-powered software products</li>
                <li>• Backend APIs and scalable systems</li>
                <li>• Human-centered intelligent applications</li>
                <li>• Full-stack solutions with practical impact</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section id="contact" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.5 }} className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-fuchsia-500/10 p-8 text-center">
          <h2 className="text-3xl font-semibold">Let’s Build Something Meaningful</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            I’m interested in AI engineering, backend development, and building software systems that solve practical problems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:megharajeev.official@gmail.com" className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]">
              <MailIcon size={18} /> Email Me
            </a>
            <a href="tel:+919244504631" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-semibold transition hover:bg-white/5">
              <PhoneIcon size={18} /> Call
            </a>
            <a href="https://github.com/megharajeev28" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-semibold transition hover:bg-white/5">
              <GithubIcon size={18} /> GitHub
            </a>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
}

export default function Portfolio() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroScreen key="intro" onFinish={() => setShowIntro(false)} />
        ) : (
          <MainPortfolioContent key="main" />
        )}
      </AnimatePresence>
    </>
  );
}
