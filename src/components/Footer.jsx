export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 border-t border-gray-800 text-center">
      <p>
        © {new Date().getFullYear()} GitLab CI/CD Project — React + Express + AWS
      </p>
    </footer>
  );
}
