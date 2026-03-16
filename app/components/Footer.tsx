export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-[#E8E3DC]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-[#6b6b6b]">
          © {new Date().getFullYear()} Shubhangi Singh. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:shubhangisingh10@gmail.com"
            className="text-[13px] text-[#6b6b6b] hover:text-[#C17A5E] transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/shubhangisingh10/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#6b6b6b] hover:text-[#C17A5E] transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://shubhangisingh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#6b6b6b] hover:text-[#C17A5E] transition-colors duration-200"
          >
            Website
          </a>
        </div>
      </div>
    </footer>
  );
}
