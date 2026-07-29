import logo from "../assets/logo/logo.png";

function Logo({ width = "52px" }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="BlogApp Logo"
        className="rounded-xl"
        style={{ width }}
      />

      <div className="hidden sm:block">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          BlogApp
        </h1>

        <p className="text-xs text-slate-500 tracking-wide">
          Write • Share • Inspire
        </p>
      </div>
    </div>
  );
}

export default Logo;