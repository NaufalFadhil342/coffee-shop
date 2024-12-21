import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BlogItem = (props) => {
  const { title, category, creator, image, date, id } = props;
  const navigate = useNavigate();

  const handleBlogLink = (path) => {
    window.scrollTo(0, 0)
    navigate(path)
  }

  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <div className="w-full h-60 overflow-hidden">
        <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }} />
      </div>
      <div className="w-full h-auto flex flex-col gap-3">
        <h3 className="text-stone-800 text-xl uppercase font-medium hover:cursor-pointer hover:text-accent duration-200 transition-colors">
          <Link
            to={`/blog/${id}`}
            state={{ image, title, creator, category, date }}
            onClick={() => handleBlogLink(`/blog/${id}`)}
          >
            {title}
          </Link>
        </h3>
        <div className="w-full h-auto flex items-center gap-1 text-sm text-accent font-medium">
          <span className="italic">{creator}</span>
          <>/</>
          <span className="italic">{category}</span>
          <>/</>
          <span className="italic">{date}</span>
        </div>
        <p className=" text-stone-600 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit deleniti totam non rerum officia eius cupiditate ipsam nostrum illum Reprehenderit.</p>
        <Link
          to={`/blog/${id}`}
          state={{ image, title, creator, category, date }}
          onClick={() => handleBlogLink(`/blog/${id}`)}
          className="text-accent font-medium hover:text-stone-800 hover:cursor-pointer duration-200 transition-colors">Read More...</Link>
      </div>
    </div>
  );
};

export default BlogItem;
