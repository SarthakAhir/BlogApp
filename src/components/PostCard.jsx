import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredimage }) {

  const imageUrl = appwriteService.getFileView(featuredimage);

  return (
    <Link to={`/post/${$id}`}>
      <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-5">

          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            Article
          </span>

          <h2 className="mt-4 line-clamp-2 text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
            {title}
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            Click to read this article →
          </p>

        </div>

      </article>
    </Link>
  );
}

export default PostCard;