import {
  FaBookOpen,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

function Stats({ totalPosts }) {
  const stats = [
    {
      icon: <FaBookOpen />,
      value: totalPosts,
      label: "Published Articles",
    },
    {
      icon: <FaUsers />,
      value: "--",
      label: "Community Members",
    },
    {
      icon: <FaRocket />,
      value: "24/7",
      label: "Platform Availability",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl text-blue-600">
              {item.icon}
            </div>

            <h2 className="text-4xl font-bold text-slate-800">
              {item.value}
            </h2>

            <p className="mt-2 text-slate-500">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;