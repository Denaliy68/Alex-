import { motion } from "motion/react";
import { useState } from "react";
import { Play } from "lucide-react";
import { SectionHeader } from "./Section";
import { TiltCard } from "./TiltCard";

const categories = [
  "All",
  "Video Editing",
  "Motion Graphics",
  "Podcasts",
  "Explainer Videos",
  "Reels",
  "Social Media",
];

const projects = [
  { title: "CyberPeace Foundation", sub: "YouTube Content · Awareness", cat: "Video Editing", gradient: "from-[#3B82F6] via-[#6366F1] to-[#8B5CF6]", tag: "Featured" },
  { title: "Cybersecurity Awareness", sub: "Explainer · Motion Graphics", cat: "Explainer Videos", gradient: "from-[#8B5CF6] via-[#A855F7] to-[#EC4899]", tag: "Series" },
  { title: "Digicrow Podcast", sub: "Multi-cam · Post-production", cat: "Podcasts", gradient: "from-[#0EA5E9] via-[#3B82F6] to-[#1E40AF]", tag: "Podcast" },
  { title: "Brand Reels", sub: "Short-form · Social Media", cat: "Reels", gradient: "from-[#F472B6] via-[#8B5CF6] to-[#3B82F6]", tag: "Reels" },
  { title: "Motion ID Pack", sub: "Logo Animation · Idents", cat: "Motion Graphics", gradient: "from-[#22D3EE] via-[#3B82F6] to-[#8B5CF6]", tag: "Branding" },
  { title: "Campaign Cuts", sub: "Social Spots · Awareness", cat: "Social Media", gradient: "from-[#F59E0B] via-[#EF4444] to-[#8B5CF6]", tag: "Campaign" },
];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_right,oklch(0.62_0.24_300/0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Selected Work"
            title={<>Frames from the <span className="text-gradient">cutting room</span></>}
            description="A handful of recent projects across editing, motion design and podcasts."
          />
          <TiltCard intensity={5} glare={0.12} depth={8}>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <TiltCard key={c} intensity={10} glare={0} depth={8}>
                  <button
                    onClick={() => setActive(c)}
                    className={`text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors ${
                      active === c
                        ? "bg-[image:var(--gradient-primary)] text-primary-foreground border-transparent"
                        : "border-border/60 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {c}
                  </button>
                </TiltCard>
              ))}
            </div>
          </TiltCard>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <TiltCard intensity={9} depth={8}>
                <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden glass cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-90`} />
                  <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest">{p.tag}</div>
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="size-16 rounded-full glass grid place-items-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      <Play className="size-7 fill-white text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <div className="text-xs uppercase tracking-widest text-white/70">{p.cat}</div>
                    <h3 className="mt-1 text-xl font-display font-semibold text-white">{p.title}</h3>
                    <div className="text-sm text-white/80">{p.sub}</div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}