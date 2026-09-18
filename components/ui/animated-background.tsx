/**
 * Decorative only — aria-hidden, no interactive content. A faint node network
 * (nodes + connecting edges, slow drift, staggered pulse) stands in for the
 * automation/systems subject matter instead of the generic gradient-blob
 * treatment. Motion is intentionally subtle: this is the section's ambient
 * layer, not its centrepiece. Respects prefers-reduced-motion via the global
 * rule in globals.css, which zeroes all animation durations.
 */

const NODES = [
  { x: 80, y: 120, delay: 0 },
  { x: 230, y: 55, delay: 0.6 },
  { x: 390, y: 150, delay: 1.2 },
  { x: 560, y: 85, delay: 0.3 },
  { x: 710, y: 175, delay: 1.6 },
  { x: 140, y: 320, delay: 0.9 },
  { x: 340, y: 385, delay: 0.2 },
  { x: 525, y: 340, delay: 1.4 },
  { x: 690, y: 420, delay: 0.5 },
  { x: 60, y: 480, delay: 1.1 },
  { x: 265, y: 525, delay: 0.8 },
  { x: 465, y: 500, delay: 1.9 },
] as const;

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [5, 9], [9, 10], [10, 11], [6, 10],
  [2, 7], [1, 6],
];

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Faint engineering-grid texture, fading toward the edges. */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 90%)",
        }}
      />

      {/* Node network — slow group drift, per-node pulse on staggered delay. */}
      <svg
        className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 animate-network-drift opacity-40"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.15">
          {EDGES.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
            />
          ))}
        </g>
        {NODES.map((node, i) => (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="4"
            fill="hsl(var(--accent))"
            className="origin-center animate-node-pulse"
            style={{ animationDelay: `${node.delay}s`, transformBox: "fill-box" }}
          />
        ))}
      </svg>

      {/* Vignette so the content stays readable and the section blends
          into whatever follows it. */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>
  );
}
