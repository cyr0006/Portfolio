import { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./SkillsGraph.css";

interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  label: string;
  kind: "category" | "skill";
}

interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  source: string;
  target: string;
  distance: number;
}

const categories: GraphNode[] = [
  { id: "cat-languages", label: "Languages & Frameworks", kind: "category" },
  { id: "cat-data", label: "Data & Analytics", kind: "category" },
  { id: "cat-devops", label: "DevOps & Infrastructure", kind: "category" },
  { id: "cat-os", label: "OS & Networks", kind: "category" },
  { id: "cat-other", label: "Other Skills", kind: "category" },
];

const skillLabels: Record<string, string> = {
  python: "Python",
  js: "JavaScript",
  ts: "TypeScript",
  java: "Java (OOP)",
  matlab: "MATLAB",
  sql: "SQL",
  nosql: "NoSQL",
  asm: "Assembly",
  swift: "Swift",
  vue: "Vue",
  react: "React",
  tailwind: "Tailwind",
  vite: "Vite",
  express: "Express.js",
  nextjs: "Next.js",
  dsa: "Data Structures & Algorithms",
  mongodb: "MongoDB",
  cassandra: "Cassandra",
  neo4j: "Neo4j",
  sqlite: "SQLite3",
  postgres: "Postgres",
  warehouse: "Data Warehousing",
  olap: "OLAP",
  cleaning: "Data Cleaning",
  git: "Git",
  docker: "Docker",
  cicd: "CI/CD",
  linux: "Linux",
  vmware: "VMware",
  pi: "Raspberry Pi Home Lab",
  netconfig: "Network Configuration",
  powerbi: "Power BI",
  cad: "CAD",
  crm: "Enterprise CRM",
  agenticai: "Agentic AI / LLMs",
  copilot: "GitHub Copilot",
  ios: "iOS Development",
};

const categorySkills: Record<string, string[]> = {
  "cat-languages": [
    "python",
    "js",
    "ts",
    "java",
    "matlab",
    "sql",
    "nosql",
    "asm",
    "swift",
    "vue",
    "react",
    "tailwind",
    "vite",
    "express",
    "nextjs",
    "dsa",
  ],
  "cat-data": [
    "sql",
    "nosql",
    "mongodb",
    "cassandra",
    "neo4j",
    "sqlite",
    "postgres",
    "warehouse",
    "olap",
    "cleaning",
  ],
  "cat-devops": ["git", "docker", "cicd", "linux", "vmware", "pi"],
  "cat-os": ["netconfig", "linux"],
  "cat-other": ["powerbi", "cad", "crm", "agenticai", "copilot", "ios"],
};

// Extra bridges so the languages/data, devops/os and other clusters form one
// connected graph instead of three islands, grounded in how these actually
// show up together across projects on the resume.
const bridgeLinks: [string, string][] = [
  ["skill-copilot", "cat-languages"],
  ["skill-pi", "skill-sqlite"],
  ["skill-agenticai", "cat-data"],
  ["skill-crm", "cat-devops"],
];

const skillNodes: GraphNode[] = Object.entries(skillLabels).map(
  ([id, label]) => ({ id: `skill-${id}`, label, kind: "skill" })
);

const nodes: GraphNode[] = [...categories, ...skillNodes];

const skillCategoryCount: Record<string, number> = {};
Object.values(categorySkills).forEach((skills) => {
  skills.forEach((skillId) => {
    skillCategoryCount[skillId] = (skillCategoryCount[skillId] ?? 0) + 1;
  });
});

const links: GraphLink[] = [
  ...Object.entries(categorySkills).flatMap(([catId, skills]) =>
    skills.map((skillId) => ({
      source: catId,
      target: `skill-${skillId}`,
      // skills shared across categories act as bridges, so give them room to stretch
      distance: skillCategoryCount[skillId] > 1 ? 170 : 85,
    }))
  ),
  ...bridgeLinks.map(([source, target]) => ({
    source,
    target,
    distance: 210,
  })),
];

const nodeRadius = (d: GraphNode) => (d.kind === "category" ? 10 : 5);

// Roughly account for label width so text doesn't overlap neighbouring nodes.
const collideRadius = (d: GraphNode) =>
  nodeRadius(d) + 10 + d.label.length * (d.kind === "category" ? 3.4 : 2.3);

const SkillsGraph = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const simulationRef = useRef<d3.Simulation<GraphNode, GraphLink> | null>(
    null
  );
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(
    null
  );

  useEffect(() => {
    const container = containerRef.current;
    const svgEl = svgRef.current;
    if (!container || !svgEl) return;

    const bounds = { width: 0, height: 0 };
    const pad = 16;

    const svg = d3.select(svgEl);
    const zoomLayer = svg.append("g");
    const root = zoomLayer.append("g");

    const linkSel = root
      .append("g")
      .attr("stroke", "rgb(255, 193, 77)")
      .attr("stroke-opacity", 0.25)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", 1.2);

    const nodeSel = root
      .append("g")
      .selectAll<SVGGElement, GraphNode>("g")
      .data(nodes)
      .join("g")
      .attr("class", "skills-node")
      .call(
        d3
          .drag<SVGGElement, GraphNode>()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.25).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            const halfW = bounds.width / 2;
            const halfH = bounds.height / 2;
            d.fx = Math.max(-halfW + pad, Math.min(halfW - pad, event.x));
            d.fy = Math.max(-halfH + pad, Math.min(halfH - pad, event.y));
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    nodeSel
      .append("circle")
      .attr("r", nodeRadius)
      .attr("fill", (d) => (d.kind === "category" ? "wheat" : "#ffffff"))
      .attr("fill-opacity", (d) => (d.kind === "category" ? 1 : 0.85));

    nodeSel
      .append("text")
      .text((d) => d.label)
      .attr("x", (d) => nodeRadius(d) + 6)
      .attr("y", 4)
      .attr("class", (d) =>
        d.kind === "category" ? "skills-label category" : "skills-label"
      );

    const adjacency = new Map<string, Set<string>>();
    nodes.forEach((n) => adjacency.set(n.id, new Set()));
    links.forEach((l) => {
      adjacency.get(l.source)?.add(l.target);
      adjacency.get(l.target)?.add(l.source);
    });

    nodeSel
      .on("mouseenter", (_event, d) => {
        const connected = adjacency.get(d.id) ?? new Set();
        nodeSel.classed("dim", (n) => n.id !== d.id && !connected.has(n.id));
        linkSel.classed(
          "dim",
          (l) =>
            (l.source as unknown as GraphNode).id !== d.id &&
            (l.target as unknown as GraphNode).id !== d.id
        );
      })
      .on("mouseleave", () => {
        nodeSel.classed("dim", false);
        linkSel.classed("dim", false);
      });

    const simulation = d3
      .forceSimulation<GraphNode>(nodes)
      .force(
        "link",
        d3
          .forceLink<GraphNode, GraphLink>(links)
          .id((d) => d.id)
          .distance((d) => d.distance)
      )
      .force("charge", d3.forceManyBody().strength(-260))
      .force("collide", d3.forceCollide<GraphNode>(collideRadius))
      .force("center", d3.forceCenter(0, 0));

    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.4, 3])
      .filter((event) => !event.target.closest(".skills-node"))
      .on("zoom", (event) => {
        zoomLayer.attr("transform", event.transform.toString());
      });

    svg.call(zoom);

    simulationRef.current = simulation;
    zoomRef.current = zoom;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      bounds.width = width;
      bounds.height = height;
      svg.attr("viewBox", `0 0 ${width} ${height}`);
      root.attr("transform", `translate(${width / 2}, ${height / 2})`);
      simulation.force("center", d3.forceCenter(0, 0));
      simulation.alpha(0.3).restart();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    simulation.on("tick", () => {
      const halfW = bounds.width / 2;
      const halfH = bounds.height / 2;
      nodes.forEach((d) => {
        d.x = Math.max(-halfW + pad, Math.min(halfW - pad, d.x ?? 0));
        d.y = Math.max(-halfH + pad, Math.min(halfH - pad, d.y ?? 0));
      });

      linkSel
        .attr("x1", (d) => (d.source as unknown as GraphNode).x ?? 0)
        .attr("y1", (d) => (d.source as unknown as GraphNode).y ?? 0)
        .attr("x2", (d) => (d.target as unknown as GraphNode).x ?? 0)
        .attr("y2", (d) => (d.target as unknown as GraphNode).y ?? 0);

      nodeSel.attr("transform", (d) => `translate(${d.x ?? 0}, ${d.y ?? 0})`);
    });

    return () => {
      resizeObserver.disconnect();
      simulation.stop();
      simulationRef.current = null;
      zoomRef.current = null;
      zoomLayer.remove();
    };
  }, []);

  const handleReset = () => {
    const simulation = simulationRef.current;
    const zoomBehavior = zoomRef.current;
    const svgEl = svgRef.current;
    if (!simulation || !zoomBehavior || !svgEl) return;

    nodes.forEach((d) => {
      d.fx = null;
      d.fy = null;
      d.x = (Math.random() - 0.5) * 20;
      d.y = (Math.random() - 0.5) * 20;
      d.vx = 0;
      d.vy = 0;
    });
    simulation.alpha(1).restart();

    d3.select(svgEl)
      .transition()
      .duration(400)
      .call(zoomBehavior.transform, d3.zoomIdentity);
  };

  return (
    <div className="skills-graph-container" ref={containerRef}>
      <button
        type="button"
        className="skills-graph-reset"
        onClick={handleReset}
      >
        Reset
      </button>
      <svg ref={svgRef} className="skills-graph-svg" />
    </div>
  );
};

export default SkillsGraph;
