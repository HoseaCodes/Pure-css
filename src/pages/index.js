import * as React from "react"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Bcard from "../components/BCard/bcard"
import PietMondrain from "../components/PietMondrain/pietmondrain"
import Cat from "../components/Cat/cat"
import Planet from "../components/Planet/planet"
import Boo from "../components/Boo/boo"
import Switch from "../components/Switch/switch"
import DesignDesk from "../components/DesignDesk/DesignDesk"
import Gameboy from "../components/Gameboy/Gameboy"
import RockLee from "../components/RockLee/RockLee"
import AstrosBoxscore from "../components/AstrosBoxscore/astrosboxscore"
import "./index.css"

const works = [
  { name: "Business card", meta: "CSS on browser · 2023", Component: Bcard, scale: 0.55, offset: 0, modalScale: 1.2 },
  { name: "Piet Mondrian, study", meta: "Composition · 2023", Component: PietMondrain, scale: 0.45, offset: 40, modalScale: 1.1 },
  { name: "Quiet planet", meta: "Minimal series · 2024", Component: Planet, scale: 0.45, offset: 0, modalScale: 1.1 },
  { name: "Boo", meta: "Character study · 2024", Component: Boo, scale: 0.45, offset: 30, modalScale: 1.1 },
  { name: "Design desk", meta: "Interior · 2024", Component: DesignDesk, scale: 0.45, offset: 60, modalScale: 1.1 },
  { name: "Switch", meta: "Object study · 2024", Component: Switch, scale: 0.55, offset: 0, modalScale: 1.3 },
  { name: "Gameboy", meta: "Object study · 2024", Component: Gameboy, scale: 0.5, offset: 40, modalScale: 1.2 },
  { name: "Cat", meta: "Character study · 2024", Component: Cat, scale: 0.5, offset: 0, modalScale: 1.2 },
  { name: "Rock Lee", meta: "Character study · 2025", Component: RockLee, scale: 0.5, offset: 30, modalScale: 1.4, naturalSize: { width: 500, height: 357 } },
  { name: "Astro's Ticket", meta: "Object study · 2025", Component: AstrosBoxscore, scale: 0.5, offset: 60, modalScale: 1.2 },
]

const IndexPage = () => {
  const [activeIndex, setActiveIndex] = React.useState(null)
  const [sessionOpen, setSessionOpen] = React.useState(false)
  const [form, setForm] = React.useState({ name: "", email: "", topic: "Commission", message: "" })
  const active = activeIndex !== null ? works[activeIndex] : null
  const anyModalOpen = active !== null || sessionOpen

  React.useEffect(() => {
    if (!anyModalOpen) return
    const onKey = (e) => {
      if (e.key === "Escape") {
        setActiveIndex(null)
        setSessionOpen(false)
      }
    }
    document.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [anyModalOpen])

  const submitSession = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`${form.topic} inquiry — ${form.name || "Gallery visitor"}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`
    )
    window.location.href = `mailto:mr.dhosea@gmail.com?subject=${subject}&body=${body}`
    setSessionOpen(false)
  }

  return (
    <Layout>
      <div className="gal-root">

        <section className="gal-hero">
          <p className="gal-eyebrow">Hosea — digital art gallery</p>
          <h1 className="gal-title">
            Studies in <em>pure CSS</em>,<br />composed in the browser.
          </h1>
          <p className="gal-lede">
            A working archive of generative compositions, geometric studies, and animated
            experiments, built without images, frameworks, or shortcuts. Just markup, math,
            and a long quiet relationship with the cascade.
          </p>
          <div className="gal-meta">
            <span><i className="gal-dot"></i> Studio open</span>
            <span>Est. 2021</span>
            <span>Houston · remote</span>
          </div>
        </section>

        <section className="gal-section">
          <div className="gal-section-head">
            <h2 className="gal-section-title">Selected works</h2>
            <span className="gal-section-num">01 / On view</span>
          </div>

          <div className="wall">
            {works.map(({ name, meta, Component, scale, offset, naturalSize }, i) => (
              <button
                key={name}
                type="button"
                className="piece"
                style={{ marginBottom: `${offset}px` }}
                onClick={() => setActiveIndex(i)}
                aria-label={`View ${name} larger`}
              >
                <div className="frame">
                  <div className="canvas">
                    <div
                      className="art-fit"
                      style={{
                        transform: `scale(${scale})`,
                        ...(naturalSize && {
                          width: `${naturalSize.width}px`,
                          height: `${naturalSize.height}px`,
                        }),
                      }}
                    >
                      <Component />
                    </div>
                  </div>
                </div>
                <div className="plaque">
                  <p className="plaque-name">{name}</p>
                  <p className="plaque-meta">{meta}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="gal-section">
          <div className="gal-section-head">
            <h2 className="gal-section-title">The artist</h2>
            <span className="gal-section-num">02 / Statement</span>
          </div>
          <div className="gal-artist">
            <div className="gal-avatar">DH</div>
            <div>
              <h3 className="gal-artist-name">D. Hosea</h3>
              <p className="gal-artist-role">Software engineer · Digital artist</p>
              <p className="gal-bio">
                I make small, careful things in the browser. Most of what's here started as
                a curiosity about what a single stylesheet could carry on its own — no
                images, no canvas, no scripts pretending to be paint. The work sits somewhere
                between engineering practice and visual notebook.
              </p>
              <div className="gal-stack">
                <span className="gal-tag">CSS</span>
                <span className="gal-tag">SVG</span>
                <span className="gal-tag">JavaScript</span>
                <span className="gal-tag">React</span>
                <span className="gal-tag">Python</span>
                <span className="gal-tag">Django</span>
              </div>
            </div>
          </div>
        </section>

        <section className="gal-section">
          <div className="gal-section-head">
            <h2 className="gal-section-title">Inquiries</h2>
            <span className="gal-section-num">03 / Contact</span>
          </div>
          <p className="gal-lede">
            Available for commissioned work, gallery features, and engineering consultation.
            First 5 minutes of a discovery call are on the house.
          </p>
          <div className="gal-cta-row">
            <a
              className="gal-cta gal-cta-primary"
              href="http://www.hoseacodes.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit the studio
            </a>
            <button
              type="button"
              className="gal-cta"
              onClick={() => setSessionOpen(true)}
            >
              Request a session
            </button>
          </div>
        </section>

        <footer className="gal-footer">
          <span>© Hosea Studio</span>
          <span>Pure CSS · MMXXV</span>
        </footer>

      </div>

      {active && (
        <div
          className="gal-modal-backdrop"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
        >
          <div className="gal-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="gal-modal-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="gal-modal-stage">
              <div
                className="art-fit"
                style={{
                  transform: `scale(${active.modalScale ?? 1})`,
                  ...(active.naturalSize && {
                    width: `${active.naturalSize.width}px`,
                    height: `${active.naturalSize.height}px`,
                  }),
                }}
              >
                <active.Component />
              </div>
            </div>
            <div className="gal-modal-plaque">
              <p className="plaque-name">{active.name}</p>
              <p className="plaque-meta">{active.meta}</p>
            </div>
          </div>
        </div>
      )}

      {sessionOpen && (
        <div
          className="gal-modal-backdrop"
          onClick={() => setSessionOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Request a session"
        >
          <div className="gal-modal gal-session-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="gal-modal-close"
              onClick={() => setSessionOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="gal-session-head">
              <p className="gal-eyebrow">03 / Contact</p>
              <h3 className="gal-session-title">Request a session</h3>
              <p className="gal-session-sub">
                Tell me a little about what you have in mind. I'll reply within a day or two.
              </p>
            </div>
            <form className="gal-form" onSubmit={submitSession}>
              <label className="gal-field">
                <span>Name</span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <label className="gal-field">
                <span>Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>
              <label className="gal-field">
                <span>Topic</span>
                <select
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                >
                  <option>Commission</option>
                  <option>Gallery feature</option>
                  <option>Engineering consultation</option>
                  <option>Discovery call</option>
                </select>
              </label>
              <label className="gal-field">
                <span>Message</span>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </label>
              <div className="gal-form-actions">
                <button
                  type="button"
                  className="gal-cta"
                  onClick={() => setSessionOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="gal-cta gal-cta-primary">
                  Send inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo />
