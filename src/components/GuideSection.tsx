import { motion } from "motion/react";
import {
  MousePointer2,
  Sparkles,
  FileType2,
  Globe2,
  Copy,
  BarChart3,
  Settings2,
} from "lucide-react";
import renmaLogo from "@/assets/renma-logo.png";
import shotBehavior from "@/assets/guide/behavior.png";
import shotTemplate from "@/assets/guide/template.png";
import shotMappings from "@/assets/guide/mappings.png";
import shotScope from "@/assets/guide/scope.png";
import shotDuplicates from "@/assets/guide/duplicates.png";
import shotStats from "@/assets/guide/stats.png";
import shotBackup from "@/assets/guide/backup.png";
import shotPopup from "@/assets/guide/popup.png";

/* ---------- Sketch primitives ---------- */

function ScribbleUnderline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 12" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="M4 7 C 40 2, 80 11, 120 5 S 200 10, 236 4" />
    </svg>
  );
}

/* ---------- Annotated screenshot ---------- */

type Note = { x: number; y: number; label: string };

function AnnotatedShot({ src, alt, notes = [] }: { src: string; alt: string; notes?: Note[] }) {
  return (
    <div className="relative rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-soft)] p-4 sm:p-6 shadow-[0_20px_60px_-30px_rgba(20,20,19,0.25)]">
      <div className="relative overflow-hidden rounded-[16px] border border-[color:var(--hairline)] bg-[color:var(--canvas)]">
        <img src={src} alt={alt} className="block w-full h-auto" />
        {notes.map((n, i) => (
          <div key={i} className="absolute" style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%,-50%)" }}>
            <div className="h-6 w-6 rounded-full border-2 border-[color:var(--coral)] bg-[color:var(--canvas)] grid place-items-center text-[11px] font-bold text-[color:var(--coral)] shadow-md">
              {i + 1}
            </div>
          </div>
        ))}
      </div>
      {notes.length > 0 && (
        <ol className="mt-4 grid gap-2 sm:grid-cols-2">
          {notes.map((n, i) => (
            <li key={i} className="flex gap-2 text-[13.5px] leading-snug text-[color:var(--body)]">
              <span className="mt-[2px] inline-grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[color:var(--coral)] text-[11px] font-bold text-white">
                {i + 1}
              </span>
              <span>{n.label}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

/* ---------- Step block ---------- */

function Step({
  num,
  icon: Icon,
  title,
  kicker,
  children,
  shot,
}: {
  num: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  kicker: string;
  children: React.ReactNode;
  shot: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14 items-start"
    >
      <div className="lg:sticky lg:top-28">
        <div className="flex items-center gap-3 text-[color:var(--muted)]">
          <span className="font-mono text-[12px] tracking-widest uppercase">Step {num}</span>
          <span className="h-px flex-1 bg-[color:var(--hairline)]" />
        </div>
        <div className="mt-4 flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[color:var(--coral)] text-white shadow-[0_10px_30px_-10px_rgba(204,120,92,0.6)]">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--coral)]">{kicker}</p>
            <h3 className="mt-1 font-[Fraunces] italic text-[30px] sm:text-[38px] leading-[1.05] text-[color:var(--ink)]">
              {title}
            </h3>
          </div>
        </div>
        <div className="mt-5 text-[15.5px] leading-[1.7] text-[color:var(--body)] space-y-3">{children}</div>
      </div>
      <div className="relative">{shot}</div>
    </motion.div>
  );
}

/* ---------- Public section ---------- */

export default function GuideSection() {
  return (
    <section id="guide" className="relative py-24 md:py-36 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--coral)]">
            User manual
          </p>
          <h2 className="mt-3 font-[Fraunces] italic text-[44px] sm:text-[64px] leading-[0.98] tracking-[-0.02em]">
            Every setting,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">sketched out</span>
              <ScribbleUnderline className="absolute left-0 right-0 -bottom-2 w-full text-[color:var(--coral)]" />
            </span>
            .
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.65] text-[color:var(--body)] max-w-xl">
            A hand-drawn walkthrough of the Renma options page — real screenshots,
            circled controls, one paragraph per setting.
          </p>
        </div>

        {/* Mini TOC */}
        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Open settings", "guide-1"],
            ["Behavior", "guide-2"],
            ["Template", "guide-3"],
            ["Domain rules", "guide-4"],
            ["Site scope", "guide-5"],
            ["Duplicates & stats", "guide-6"],
            ["Backup", "guide-7"],
            ["Popup", "guide-popup"],
          ].map(([label, id], i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="group flex items-center gap-3 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--canvas)] px-4 py-3 hover:border-[color:var(--coral)] transition"
              >
                <span className="font-mono text-[12px] text-[color:var(--muted)] w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] font-medium text-[color:var(--ink)] flex-1">{label}</span>
              </a>
            </li>
          ))}
        </ol>

        {/* Steps */}
        <div className="mt-24 space-y-28">
          <div id="guide-1" />
          <Step
            num="01"
            kicker="Open"
            icon={Settings2}
            title="Find the settings page"
            shot={
              <div className="relative rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--ink)] p-6 sm:p-10 text-[color:var(--canvas)]">
                <p className="font-mono text-[11px] uppercase tracking-widest text-white/60 mb-4">
                  chrome://extensions
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                    <img src={renmaLogo} alt="" className="h-8 w-8 rounded-md" />
                    <div className="flex-1 min-w-0">
                      <p className="font-[Fraunces] italic text-[18px]">renma.</p>
                      <p className="text-[12px] text-white/50">v1.3 · enabled</p>
                    </div>
                    <button className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider">
                      Details
                    </button>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-dashed border-[color:var(--coral)] bg-[color:var(--coral)]/10 p-3">
                    <div className="h-8 w-8 rounded-md bg-[color:var(--coral)] grid place-items-center">
                      <Settings2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-[13px] flex-1">Extension options</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--coral)]">
                      click →
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-[12px] text-white/50 leading-relaxed">
                  Or right-click the Renma toolbar icon → <b>Options</b>.
                </p>
              </div>
            }
          >
            <p>
              Go to{" "}
              <code className="rounded bg-[color:var(--surface-card)] px-1.5 py-0.5 font-mono text-[13px]">
                chrome://extensions
              </code>
              , click <b>Details</b> on Renma, then <b>Extension options</b>.
            </p>
            <p className="text-[color:var(--muted)]">
              Shortcut: right-click the toolbar icon and pick <i>Options</i>.
            </p>
          </Step>

          <div id="guide-2" />
          <Step
            num="02"
            kicker="Behavior"
            icon={MousePointer2}
            title="Flip the master switches"
            shot={
              <AnnotatedShot
                src={shotBehavior}
                alt="Behavior settings"
                notes={[
                  { x: 82, y: 32, label: "Master on/off — pause Renma without uninstalling." },
                  { x: 82, y: 55, label: "Only images — skip PDFs, ZIPs and other file types." },
                  { x: 82, y: 78, label: "Notifications — desktop toast on every rename." },
                ]}
              />
            }
          >
            <p>
              The <b>master toggle</b> pauses renaming globally. <b>Only images</b> restricts
              Renma to actual image MIME types. <b>Notifications</b> shows a small desktop
              toast for every rename.
            </p>
          </Step>

          <div id="guide-3" />
          <Step
            num="03"
            kicker="Template"
            icon={FileType2}
            title="Design the filename"
            shot={
              <AnnotatedShot
                src={shotTemplate}
                alt="Template editor"
                notes={[
                  { x: 50, y: 30, label: "Template input — mix any tokens with underscores, dashes, dots." },
                  { x: 50, y: 70, label: "Live preview — what a real Unsplash download would look like." },
                ]}
              />
            }
          >
            <p>Click any token chip to insert it at your cursor. Common combos:</p>
            <ul className="space-y-1.5 font-mono text-[13px] text-[color:var(--ink)]">
              <li>· {"{prefix}_{timestamp}.{ext}"}</li>
              <li>· {"{prefix}-{date}-{counter}.{ext}"}</li>
              <li>· {"{prefix}_{dimensions}.{ext}"}</li>
            </ul>
          </Step>

          <div id="guide-4" />
          <Step
            num="04"
            kicker="Rules"
            icon={Globe2}
            title="Teach it your domains"
            shot={
              <AnnotatedShot
                src={shotMappings}
                alt="Domain rules"
                notes={[
                  { x: 20, y: 62, label: "Domain — match on any part of the URL host." },
                  { x: 50, y: 62, label: "Prefix — becomes {prefix} in the template." },
                  { x: 80, y: 62, label: "Folder — optional subfolder inside Downloads/." },
                ]}
              />
            }
          >
            <p>
              Ships with defaults (OpenAI → <code>AI_Generated</code>). Add your own to route
              specific sites into named prefixes and folders.
            </p>
            <p className="text-[color:var(--muted)]">
              Example:{" "}
              <code className="font-mono text-[13px]">dribbble.com → Dribbble → refs/ui</code>.
            </p>
          </Step>

          <div id="guide-5" />
          <Step
            num="05"
            kicker="Scope"
            icon={Sparkles}
            title="Pick where Renma runs"
            shot={
              <AnnotatedShot
                src={shotScope}
                alt="Site scope"
                notes={[
                  { x: 50, y: 22, label: "Mode: run everywhere, only listed sites, or exclude listed sites." },
                  { x: 50, y: 65, label: "Site list — one domain per chip." },
                ]}
              />
            }
          >
            <p>
              <b>Whitelist</b> when you only want Renma on a handful of sources. <b>Blacklist</b>{" "}
              to keep sensitive downloads untouched. <b>All sites</b> is the default.
            </p>
          </Step>

          <div id="guide-6" />
          <Step
            num="06"
            kicker="Insights"
            icon={BarChart3}
            title="Duplicates & stats"
            shot={
              <div className="grid gap-5">
                <AnnotatedShot
                  src={shotDuplicates}
                  alt="Duplicate mode"
                  notes={[{ x: 50, y: 55, label: "Off / Tag / Skip — how to treat the same URL twice." }]}
                />
                <AnnotatedShot
                  src={shotStats}
                  alt="Stats dashboard"
                  notes={[
                    { x: 50, y: 30, label: "Totals: lifetime, today, unique sources." },
                    { x: 50, y: 75, label: "Top-domain bars — see where your images come from." },
                  ]}
                />
              </div>
            }
          >
            <p>
              <b>Tag</b> keeps duplicate downloads but marks them in the popup. <b>Skip</b>{" "}
              refuses to re-download the same URL entirely.
            </p>
            <p>The stats panel is fully local — nothing leaves your machine.</p>
          </Step>

          <div id="guide-7" />
          <Step
            num="07"
            kicker="Portable"
            icon={Copy}
            title="Backup & restore"
            shot={
              <AnnotatedShot
                src={shotBackup}
                alt="Backup panel"
                notes={[
                  { x: 30, y: 60, label: "Export — download your full config as JSON." },
                  { x: 70, y: 60, label: "Import — drop the same JSON on a new machine." },
                ]}
              />
            }
          >
            <p>
              Moving laptops? Export once, import on the other side. Templates, rules, scope,
              duplicate mode and toggles all travel together.
            </p>
          </Step>

          {/* Popup bonus */}
          <div id="guide-popup" />
          <section className="rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface-soft)] p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--coral)]">
                  Bonus
                </p>
                <h3 className="mt-2 font-[Fraunces] italic text-[34px] leading-[1.05]">
                  The toolbar popup
                </h3>
                <p className="mt-4 text-[15.5px] leading-[1.7] text-[color:var(--body)]">
                  Click the Renma icon to see the last 50 renames, search them, export as JSON,
                  or hit <b>Undo</b> to revert the most recent one.
                </p>
                <div className="mt-5 grid gap-2 text-[13.5px] text-[color:var(--body)]">
                  {[
                    ["Alt+Shift+P", "open popup"],
                    ["Alt+Shift+R", "toggle renaming on/off"],
                    ["Alt+Shift+Z", "undo last rename"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center gap-3">
                      <kbd className="rounded-md border border-[color:var(--hairline)] bg-[color:var(--canvas)] px-2 py-1 font-mono text-[12px] text-[color:var(--ink)]">
                        {k}
                      </kbd>
                      <span className="text-[color:var(--muted)]">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[20px] border border-[color:var(--hairline)] bg-[color:var(--canvas)] p-4 shadow-[0_20px_60px_-30px_rgba(20,20,19,0.3)]">
                <img src={shotPopup} alt="Renma popup" className="w-full h-auto rounded-[12px]" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
