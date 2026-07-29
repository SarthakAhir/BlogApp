function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    gradient:
      "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",

    outline:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",

    secondary:
      "bg-slate-700 hover:bg-slate-800 text-white",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;