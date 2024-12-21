import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BlogItem = (props) => {
  const { image, title, creator, category, date, id, fullWidth } = props;
  const navigate = useNavigate()

  const handleBlogDetails = (path) => {
    window.scrollTo(0, 0)
    navigate(path)
  }

  const titleParams = title.replace(/ /g, '-');

  return (
    <div className="w-full h-full block md:flex" id={id}>
      <div className="w-full md:w-[35rem] h-[15rem] md:h-auto bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="w-full h-full md:px-8 py-6 flex flex-col justify-between gap-4 items-start">
        <div className="flex flex-col">
          <h1 className="text-stone-800 font-semibold text-2xl hover:text-accent duration-200 transition-colors hover:cursor-pointer uppercase">
            <Link
              to={`/blog/${titleParams}`}
              state={{ image, title, creator, category, date }}
              onClick={() => handleBlogDetails(`/blog/${titleParams}`)}
            >
              {title}
            </Link>
          </h1>
          <div className="w-full flex items-center gap-2 text-sm text-accent">
            <span className="italic">{creator}</span>
            <>/</>
            <span className="italic">{category}</span>
            <>/</>
            <span className="italic">{date}</span>
          </div>
        </div>
        <p className={`w-full text-stone-500 ${fullWidth ? 'h-auto' : 'h-[4.5rem] overflow-hidden'}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque aliquid iusto fugiat labore molestiae rerum asperiores inventore corporis optio eius accusamus reprehenderit, dolores ducimus ex maxime voluptas
          molestias atque.
        </p>
        <Link
          to={`/blog/${titleParams}`}
          state={{ image, title, creator, category, date }}
          onClick={() => handleBlogDetails(`/blog/${titleParams}`)}
          className="text-stone-800 hover:text-accent duration-200 transition-colors">
          Read More...
        </Link>
      </div>
    </div>
  );
};


export default BlogItem;
