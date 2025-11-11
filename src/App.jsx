import React from "react";
import { Link } from "react-scroll";

function SectionShell({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={
        "relative overflow-hidden " +
        className
      }
    >
      {/* Subtle dotted grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          color: "#ffffff",
        }}
      />
      {/* Radial glow from the center */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 inset-0"
        style={{
          background:
            "radial-gradient(60rem 60rem at 50% -10%, rgba(168,85,247,0.25), transparent 60%), radial-gradient(36rem 36rem at 90% 10%, rgba(99,102,241,0.18), transparent 60%)",
        }}
      />
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* NAVBAR (with scrollspy + CTA) */}
      <nav className="fixed w-full top-0 left-0 z-50 border-b border-white/10 bg-gray-950/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-lg md:text-xl font-bold tracking-wide">
            <span className="text-purple-400">GitLab CI/CD</span>{" "}
            · React + Express · AWS
          </h1>

          <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
            {[
              ["home", "Home"],
              ["about", "About"],
              ["features", "Features"],
              ["docs", "Docs"],
              ["contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  activeClass="text-purple-400 border-b-2 border-purple-400"
                  className="cursor-pointer hover:text-purple-300 transition pb-1"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="https://gitlab.com/your-namespace/your-project/-/pipelines"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 hidden sm:inline-flex bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-purple-500/30 transition"
          >
            View Pipeline
          </a>
        </div>
      </nav>

      <main className="pt-20">
        {/* ------------------- HERO ------------------- */}
        <SectionShell
          id="home"
          className="min-h-[92vh] flex items-center justify-center text-center px-6"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Decorative blurred blobs */}
            <div className="absolute -top-24 -left-24 h-56 w-56 bg-purple-600/30 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -right-24 h-56 w-56 bg-indigo-500/30 blur-3xl rounded-full" />

            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Automate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400">
                React + Express
              </span>{" "}
              Deployments
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              GitLab CI/CD pipeline builds, tests, and deploys your stack.{" "}
              <span className="text-purple-300">React</span> ships to{" "}
              <span className="text-purple-300">Amazon S3</span> (optionally via
              CloudFront), and <span className="text-purple-300">Express</span>{" "}
              runs on <span className="text-purple-300">EC2</span> with PM2 +
              Nginx. Push → Pipeline → Live. 🚀
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="features"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-base md:text-lg font-semibold shadow-lg shadow-purple-500/30 transition"
              >
                Explore Features
              </Link>
              <a
                href="https://gitlab.com/your-namespace/your-project/-/pipelines"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-400 text-purple-200 hover:bg-purple-900/40 px-6 py-3 rounded-lg text-base md:text-lg font-semibold transition"
              >
                View Pipeline
              </a>
            </div>

            {/* Quick badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
              {[
                "Cache: node_modules",
                "Artifacts: build/ dist/",
                "Zero-downtime: PM2",
                "CDN ready: CloudFront",
                "Env Vars: GitLab CI",
              ].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-gray-300"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </SectionShell>

        {/* ------------------- ABOUT ------------------- */}
        <SectionShell
          id="about"
          className="py-24 px-6 bg-gradient-to-b from-gray-950 to-gray-900"
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              What this project solves
            </h3>
            <p className="text-gray-300 max-w-3xl">
              A production-ready CI/CD flow that continuously integrates and
              deploys a React frontend and an Express backend to AWS. Each push
              to <span className="text-purple-300">main</span> triggers a
              pipeline with caching, artifacts, and deployment jobs.
            </p>

            {/* Two-column overview */}
            <div className="mt-10 grid lg:grid-cols-2 gap-8">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-xl font-semibold mb-3">
                  Architecture Overview
                </h4>
                <pre className="text-sm overflow-x-auto bg-black/40 p-4 rounded-lg leading-6">
{`[ Client ]  React (Vite/CRA)
     | build → S3 (+CloudFront)
     |
[ API ]     Express (Node.js)
     | PM2 + Nginx reverse proxy
     v
   AWS EC2 (Ubuntu)
`}
                </pre>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-xl font-semibold mb-3">
                  Pipeline at a glance
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li>• Install deps with caching</li>
                  <li>• Run tests (optional)</li>
                  <li>• Build frontend → artifacts → deploy to S3</li>
                  <li>• Build backend → rsync/ssh to EC2 → PM2 reload</li>
                  <li>• Versioned releases & environment variables</li>
                </ul>
              </div>
            </div>
          </div>
        </SectionShell>

        {/* ------------------- FEATURES ------------------- */}
        <SectionShell
          id="features"
          className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-950"
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-12">
              Features you’ll actually use
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ["GitLab CI/CD", "Pipeline per push/merge with stages."],
                ["S3 Hosting", "Serve React statics from S3 (CDN ready)."],
                ["EC2 + PM2", "Zero-downtime Node process manager."],
                ["Nginx", "Reverse proxy + gzip + TLS ready."],
                ["Caching", "node_modules cache speeds up builds."],
                ["Artifacts", "Persist /dist and share between jobs."],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-purple-400/60 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)] transition"
                >
                  <div className="text-2xl mb-3">
                    <span className="inline-block rounded-md bg-purple-500/20 px-2 py-1 text-purple-300">
                      {title}
                    </span>
                  </div>
                  <p className="text-gray-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        {/* ------------------- DOCS ------------------- */}
        <SectionShell
          id="docs"
          className="py-24 px-6 bg-gradient-to-b from-gray-950 to-gray-900"
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Quick Start · .gitlab-ci.yml
            </h3>
            <p className="text-gray-300 mb-6">
              Set the following CI/CD variables in GitLab:{" "}
              <code className="text-purple-300">
                AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET,
                EC2_HOST, EC2_USER, SSH_PRIVATE_KEY
              </code>
              .
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Frontend */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-xl font-semibold mb-3">Frontend → S3</h4>
                <pre className="text-[12.5px] leading-6 overflow-x-auto bg-black/40 p-4 rounded-lg">
{`stages: [install, build, deploy]

cache:
  paths:
    - node_modules/

install:
  stage: install
  script:
    - npm ci

build_frontend:
  stage: build
  script:
    - npm run build --prefix client
  artifacts:
    paths:
      - client/dist

deploy_s3:
  stage: deploy
  image: amazon/aws-cli
  script:
    - aws s3 sync client/dist s3://$S3_BUCKET --delete
  only: [main]`}
                </pre>
              </div>

              {/* Backend */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-xl font-semibold mb-3">Backend → EC2</h4>
                <pre className="text-[12.5px] leading-6 overflow-x-auto bg-black/40 p-4 rounded-lg">
{`deploy_ec2:
  stage: deploy
  before_script:
    - 'which ssh-agent || ( apk add --no-cache openssh )'
    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
    - mkdir -p ~/.ssh && chmod 700 ~/.ssh
    - ssh-keyscan -H $EC2_HOST >> ~/.ssh/known_hosts
  script:
    - scp -r server $EC2_USER@$EC2_HOST:~/app
    - ssh $EC2_USER@$EC2_HOST '
        cd ~/app/server &&
        npm ci &&
        pm2 startOrReload ecosystem.config.js || npm i -g pm2 &&
        pm2 startOrReload ecosystem.config.js &&
        sudo systemctl reload nginx
      '
  only: [main]`}
                </pre>
              </div>
            </div>

            {/* Nginx/PM2 tips */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold mb-3">Nginx snippet</h4>
                <pre className="text-[12.5px] leading-6 overflow-x-auto bg-black/40 p-4 rounded-lg">
{`server {
  listen 80;
  server_name _;
  location / {
    proxy_pass http://127.0.0.1:5000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}`}
                </pre>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold mb-3">PM2 ecosystem</h4>
                <pre className="text-[12.5px] leading-6 overflow-x-auto bg-black/40 p-4 rounded-lg">
{`module.exports = {
  apps: [{
    name: "api",
    script: "index.js",
    instances: "max",
    exec_mode: "cluster",
    env: { NODE_ENV: "production" }
  }]
};`}
                </pre>
              </div>
            </div>
          </div>
        </SectionShell>

        {/* ------------------- CONTACT ------------------- */}
        <SectionShell
          id="contact"
          className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-950"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-8">
              Questions or feedback? Reach out or open an issue in the repo.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <a
                href="https://gitlab.com/your-namespace/your-project"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-purple-400/60 transition text-left"
              >
                <h4 className="font-semibold">View Repository</h4>
                <p className="text-gray-300 text-sm mt-1">
                  Explore code, pipelines, and issues on GitLab.
                </p>
              </a>
              <a
                href="mailto:you@example.com"
                className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-purple-400/60 transition text-left"
              >
                <h4 className="font-semibold">Email the Team</h4>
                <p className="text-gray-300 text-sm mt-1">
                  you@example.com
                </p>
              </a>
            </div>

            <form className="mt-10 w-full max-w-xl mx-auto grid gap-4 text-left">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="p-3 rounded bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold shadow-lg shadow-purple-500/30 transition">
                Send Message
              </button>
            </form>
          </div>
        </SectionShell>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-gray-950/70 backdrop-blur-md py-6 text-center text-gray-400">
        © {new Date().getFullYear()} GitLab CI/CD · React + Express · AWS
      </footer>
    </div>
  );
}
