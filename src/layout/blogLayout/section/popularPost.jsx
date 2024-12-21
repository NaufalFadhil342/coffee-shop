import React from 'react';
import { blogMainData } from '../../../data/dummyCoffee';
import { Link, useNavigate } from 'react-router-dom';

const PopularPost = () => {
  const splitBlogData = blogMainData.slice(3, 7);
  const navigate = useNavigate();

  const popularPostHandler = (path) => {
    window.scrollTo(0, 0)
    navigate(path);
  }

  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <h3 className="text-xl text-stone-800 font-medium">Popular Posts</h3>
      <div className="w-full h-auto grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-6 lg:gap-4">
        {splitBlogData.map((post) => (
          <div className="w-full h-full flex flex-col xl:flex-row xl:gap-2" key={post.id}>
            <div className="w-full xl:w-36 h-[10rem] lg:h-28 xl:h-full overflow-hidden">
              <div className="w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${post.image})` }} />
            </div>
            <div className="w-full h-auto xl:h-full block py-4 lg:py-2 lg:flex flex-col items-start xl:justify-center">
              <h4 className="text-stone-800 font-medium hover:text-accent duration-200 transition-colors hover:cursor-pointer">
                <Link
                  to={`/blog/${post.id}`}
                  state={{ image: post.image, title: post.title, creator: post.creator, category: post.category, date: post.date }}
                  onClick={() => popularPostHandler(`/blog/${post.id}`)}
                >
                  {post.title}
                </Link>
              </h4>
              <div className="text-sm text-accent italic">By {post.creator}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPost;
