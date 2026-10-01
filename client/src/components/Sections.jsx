import { useState } from 'react';
import { site, process as steps } from '../data/site';
import { projects } from '../data/projects';
import { rings, groups } from '../data/toolkit';

const Head = ({ title, sub }) => <div className="head"><h2>{title}</h2>{sub && <p className="muted">{sub}</p>}</div>;

export const Stats = () => (
  <section className="wrap stats">{site.stats.map(([n, l]) => <div key={l}><b>{n}</b><span className="muted">{l}</span></div>)}</section>
);


export const Photo = () => (
  <figure className="portrait lift">
    <div className="portrait__img">
<img
  src="/dipuu.jpeg"
  alt="Dipendra Bhatta - Full-Stack Web Developer"
  width="420"
  height="420"
  fetchPriority="high"
/>
    </div>
    <figcaption><b>Dipendra Bhatta</b><span className="muted">Full-Stack Developer · Nepal</span></figcaption>
  </figure>
);

export const About = () => (
  <section id="about" className="wrap sec two">
    <div>
      <Head title="About Me" />
      <p className="about-text">I’m a BCA student from Nepal with a strong interest in technology and web development. I have a good foundation in the MERN stack and enjoy building modern and user-friendly web applications. Along with web development, I have a basic understanding of digital marketing, I’m learning graphic designing, and I also enjoy teaching and sharing my knowledge with others. I’m a curious and self-motivated learner who believes in continuously improving my skills through learning, practice, and real-world projects. My goal is to grow as a versatile developer and use my technical and creative skills to build useful digital solutions.</p>
    </div>
    <div className="facts">
      <Photo />
      {[['Location', 'Nepal'], ['Education', 'BCA'], ['Focus', 'Full-stack development'], ['Backend', 'Node.js + Express.js'], ['Database', 'MongoDB + Mongoose']].map(([k, v]) => (
        <div className="card" key={k}><span className="muted">{k}</span><b>{v}</b></div>))}
    </div>
  </section>
);

export const Skills = () => (
  <section id="skills" className="wrap sec">
    <Head title="Technologies I work with" />
    {Object.entries(site.stack).map(([cat, items]) => (
      <div key={cat} className="cat"><h3>{cat}</h3>
        <div className="grid">{items.map(([n, d]) => <div className="card lift" key={n}><b>{n}</b><span className="muted">{d}</span></div>)}</div>
      </div>))}
  </section>
);

export const Backend = () => (
  <section className="wrap sec">
    <Head title="Behind the interface" sub="My applications are more than UI. Each request travels through an API to the database and back. I test every endpoint in Postman." />
    <div className="flow" aria-label="Architecture: React to REST API to Express to Mongoose to MongoDB">
      {['React.js', 'REST API', 'Node.js + Express.js', 'Mongoose', 'MongoDB'].map((s, i) => <div className="flow__n" key={s}><span className="card">{s}</span>{i < 4 && <em aria-hidden="true" />}</div>)}
    </div>
    <div className="row methods">{['GET', 'POST', 'PUT', 'DELETE'].map((m) => <code key={m} className="m">{m}</code>)}<span className="muted">Example: POST /api/contact powers the form below.</span></div>
  </section>
);

export const Projects = () => {
  const [f, ...rest] = projects;
  const links = (p) => <div className="row">{p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>}{p.liveDemo && <a href={p.liveDemo} target="_blank" rel="noreferrer">Live demo</a>}</div>;
  const tags = (p) => <div className="row tags">{p.technologies.map((t) => <span key={t}>{t}</span>)}</div>;
  return (
    <section id="projects" className="wrap sec">
      <Head title="Things I've built" />
      <article className="card feat">
        <div className="shot">{f.image ? <img src={f.image} alt={f.title} loading="lazy" /> : <span className="muted">Screenshot placeholder</span>}</div>
        <div><h3>{f.title}</h3><p>{f.description}</p>{tags(f)}
          <ul>{f.features.map((x) => <li key={x}>{x}</li>)}</ul>
          <p className="muted">Role: {f.role} · Challenge: {f.challenge} · Solution: {f.solution}</p>{links(f)}</div>
      </article>
      <div className="grid">{rest.map((p, i) => <article className="card lift" key={i}><h3>{p.title}</h3><p className="muted">{p.description}</p>{tags(p)}{links(p)}</article>)}</div>
    </section>
  );
};

export const Process = () => (
  <section className="wrap sec">
    <Head title="How I build" />
    <ol className="steps">{steps.map(([t, d], i) => <li className="card" key={t}><b>{i + 1}. {t}</b><span className="muted">{d}</span></li>)}</ol>
  </section>
);

export const Journey = () => (
  <section id="journey" className="wrap sec two">
    <div><Head title="Development journey" />
      <ol className="tl">{site.journey.map(([y, t]) => <li key={y}><b>{y}</b><span>{t}</span></li>)}</ol></div>
    <div><Head title="Currently learning" />
      {site.learning.map(([n, s]) => <div className="card row between" key={n}><b>{n}</b><span className="muted">{s}</span></div>)}
      <div className="card"><b>{site.education.degree}</b><span className="muted">{site.education.institution} · {site.education.duration}</span></div></div>
  </section>
);

export const Experience = () => (
  <section className="wrap sec">
    <Head title="Experience & expertise" sub="My professional areas. Formal work history will be added here when relevant." />
    <div className="grid grid--2">
      {[['01', 'Full-Stack Web Developer', 'Building complete web applications from interface to database.', ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs']],
        ['02', 'Hardware & Software Engineer', 'Working with both hardware and software concepts, troubleshooting technical issues, and developing practical technology solutions.', ['Hardware troubleshooting', 'Software troubleshooting', 'Technical problem solving', 'Technology solutions']]].map(([n, t, d, tg]) => (
        <article className="card lift" key={n}><span className="muted">{n}</span><h3>{t}</h3><p className="muted">{d}</p><div className="row tags">{tg.map((x) => <span key={x}>{x}</span>)}</div></article>))}
    </div>
  </section>
);

export const Toolkit = () => (
  <section id="toolkit" className="wrap sec">
    <Head title="My Digital Toolkit" sub="A mix of development, creative, and digital tools I use to build, design, promote, and create." />
    <div className="orbit" role="img" aria-label="Tools orbiting around My Digital Toolkit">
      <div className="orbit__core"><b>My Digital Toolkit</b><span className="muted">Web · Marketing · Design · Video</span></div>
      {rings.map((r, i) => (
        <div key={i} className="ring" style={{ '--d': r.dur, '--dir': r.dir, '--rr': `calc(var(--s) * ${r.r})` }}>
          {r.tools.map(([n, m], j) => (
            <div key={n} className="orb" style={{ '--a': `${(360 / r.tools.length) * j}deg` }}>
              <div className="tool" tabIndex="0" aria-label={n}><i>{m}</i><span>{n}</span></div>
            </div>))}
        </div>))}
    </div>
    <div className="scroller" aria-hidden="true">{rings.flatMap((r) => r.tools).map(([n, m]) => <div key={n} className="card"><i>{m}</i>{n}</div>)}</div>
    <div className="grid grid--2 groups">
      {Object.entries(groups).map(([g, ts]) => (<div className="card" key={g}><h3>{g}</h3><div className="row tags">{ts.map((t) => <span className="lift" key={t}>{t}</span>)}</div></div>))}
    </div>
  </section>
);
