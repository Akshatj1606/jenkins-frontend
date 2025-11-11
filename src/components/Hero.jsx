export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-28 px-6 text-center flex flex-col justify-center">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
        🚀 Automating <span className="text-purple-400">React + Express</span>  
        <br /> with GitLab CI/CD
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-12">
        Build, test, and deploy automatically using GitLab pipelines.  
        Deploy your Node.js backend on AWS EC2 and host your React frontend on S3 —  
        all seamlessly integrated.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="#features"
          className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white font-semibold shadow-lg shadow-purple-500/40 transition"
        >
          Explore Features
        </a>
        <a
          href="https://gitlab.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-purple-400 hover:bg-purple-900 px-8 py-4 rounded-lg text-purple-300 font-semibold transition"
        >
          View Pipeline
        </a>
      </div>
    </section>
  );
}
