import { Card, Cards } from "fumadocs-ui/components/card";
import {
  Activity,
  Container,
  GitBranch,
  Lock,
  Moon,
  Shield,
} from "lucide-react";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

const features = [
  {
    icon: Container,
    title: "Docker-aware",
    description:
      "Automatically detect and configure routes from Docker containers and route files",
    href: "/docs/godoxy/getting-started/Configuring-Routes",
  },
  {
    icon: Moon,
    title: "Idle-Sleep",
    description: "Put containers to sleep on idle, wake them up when needed",
    href: "/docs/godoxy/advanced-topics/Idle-Sleep",
  },
  {
    icon: Shield,
    title: "Access Control",
    description: "Connection/Request level access control. IP/CIDR/GeoIP based",
    href: "/docs/godoxy/advanced-topics/Access-Control",
  },
  {
    icon: Activity,
    title: "Server Monitoring",
    description: "Monitor your CPU, disk usage, memory usage, Docker logs, etc",
    href: "/docs/godoxy/getting-started/Multi-Docker-Nodes",
  },
  {
    icon: Lock,
    title: "Certificates",
    description: "Automatic HTTPS with Let's Encrypt and local certificates",
    href: "/docs/godoxy/advanced-topics/Certificates",
  },
  {
    icon: GitBranch,
    title: "Load Balancing",
    description: "Distribute traffic across containers",
    href: "/docs/godoxy/advanced-topics/Load-Balancing",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 justify-center">
      <div className="container px-4 py-16 space-y-8 max-w-5xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Beyond a reverse proxy
          </h1>
          <p
            className={`text-lg text-fd-muted-foreground max-w-2xl mx-auto ${geistMono.className}`}
          >
            A smart reverse proxy for Docker, Podman, and self-hosted services
            that automatically manages routes, saves resources, and keeps your
            apps secure.
          </p>
        </div>

        <Cards className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              href={feature.href}
              icon={<feature.icon className="text-fd-primary" />}
              title={
                <span className="text-fd-foreground">{feature.title}</span>
              }
              description={feature.description}
              className="bg-fd-card border-fd-border hover:border-fd-primary/50 hover:bg-fd-accent transition-all duration-300"
            />
          ))}
        </Cards>

        <div className="flex justify-center">
          <Link
            href="/docs/godoxy/Setup"
            className={`px-6 py-3 rounded-full bg-fd-accent text-fd-accent-foreground font-medium hover:bg-fd-accent/90 transition-colors ${geistMono.className} cursor-pointer`}
          >
            {">"} Explore Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}
