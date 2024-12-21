import React, { useState } from 'react';

const initialComment = {
    name: '',
    email: '',
    message: ''
}

const CommentForm = ({ addComment }) => {
    const [commentState, setCommentState] = useState(initialComment);

    const commentSubmit = (event) => {
        event.preventDefault();

        try {
            const date = new Date().toLocaleDateString().replace(/\//g, '-');
            const formData = new FormData();
            formData.append('name', commentState.name)
            formData.append('email', commentState.email)
            formData.append('message', commentState.message)
            formData.append('date', date)

            const commentData = Object.fromEntries(formData);

            addComment(commentData);
            setCommentState(initialComment);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCommentChange = (event) => {
        const { name, value } = event.target;

        setCommentState({
            ...commentState,
            [name]: value
        })
    }

    return (
        <div className='w-full h-auto flex flex-col gap-4'>
            <h1 className='text-3xl font-semibold text-stone-800 uppercase'>Post a Comment</h1>
            <form className='w-full h-auto flex flex-col gap-4' onSubmit={commentSubmit}>
                <div className='w-full h-auto flex flex-col gap-4'>
                    <div className='w-full h-auto'>
                        <textarea className='w-full h-32 px-4 py-3 border border-stone-400 rounded placeholder:text-accent placeholder:font-medium text-stone-600 outline-accent' type="text" placeholder='Comment' name='message' value={commentState.message} onChange={handleCommentChange} />
                    </div>
                    <div className='w-full h-auto flex flex-col sm:flex-row gap-4'>
                        <input className='w-full h-auto py-2 px-4 border border-stone-400 rounded placeholder:text-accent placeholder:font-medium text-stone-600 outline-accent' type="text" placeholder='Name' name='name' value={commentState.name} onChange={handleCommentChange} />
                        <input className='w-full h-auto py-2 px-4 border border-stone-400 rounded placeholder:text-accent placeholder:font-medium text-stone-600 outline-accent' type="email" placeholder='Email' name='email' value={commentState.email} onChange={handleCommentChange} />
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-2'>
                    <div className='flex items-center gap-1 text-stone-600'>
                        <input type="checkbox" />
                        <p>Save my name and email for next time I comment.</p>
                    </div>
                    <div className='w-auto h-auto'>
                        <button className='button w-auto h-12 bg-accent text-white hover:bg-[#9D6842]' type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CommentForm;