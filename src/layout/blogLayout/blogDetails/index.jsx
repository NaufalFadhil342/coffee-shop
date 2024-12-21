import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Article from './article';
import Features from './features';
import Writer from './writer';
import Comments from './comments';
import CommentForm from './commentForm';
import { reviewsData } from '../../../data/dummyCoffee';
import Bar from '../bar';

const BlogDetails = () => {
    const { title: rawTitle } = useParams();
    const location = useLocation();
    const { image, title, creator, category, date } = location.state || {};
    const [comments, setComments] = useState(reviewsData);

    const addComment = (newComment) => {
        setComments((prevComment) => [...prevComment, newComment]);
    }

    return (
        <div className="w-full h-auto flex flex-col-reverse lg:flex-row-reverse gap-12 px-[8%] py-28">
            <div className='w-full lg:w-[25rem] h-auto'>
                <Bar />
            </div>
            <div className='w-full h-auto flex flex-col gap-12'>
                {image && <div className="w-full h-[30rem] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})` }} />}
                <div className="w-full h-auto">
                    <Article title={title || rawTitle} creator={creator} category={category} date={date} />
                </div>
                <div className='w-full h-auto'>
                    <Features />
                </div>
                <div className='w-full h-auto'>
                    <Writer creator={creator} />
                </div>
                <div className='w-full h-auto'>
                    <Comments comments={comments} />
                </div>
                <div className='w-full h-auto'>
                    <CommentForm addComment={addComment} />
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;