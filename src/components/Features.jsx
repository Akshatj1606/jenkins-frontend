const features = [
  {
    title: "CI/CD Pipelines",
    desc: "Automate build, test, and deployment with GitLab pipelines.",
    icon: "⚡",
  },
  {
    title: "AWS EC2",
    desc: "Run your Node.js backend on scalable Amazon EC2 instances.",
    icon: "💻",
  },
  {
    title: "S3 Hosting",
    desc: "Serve your React app with blazing-fast static hosting on S3.",
    icon: "☁️",
  },
  {
    title: "Seamless Integration",
    desc: "Push code to GitLab → automatically deployed to AWS.",
    icon: "🔗",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          🔧 Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-purple-500 shadow-lg hover:shadow-purple-500/30 transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
