import React from 'react';

const Article = (props) => {
    const { title, creator, category, date } = props;

    return (
        <section className='w-full h-full flex flex-col justify-between gap-8 items-start'>
            <div className="flex flex-col gap-2">
                {title && <h1 className="text-stone-800 font-semibold text-4xl uppercase">{title}</h1>}
                <div className="w-full flex items-center gap-2 text-[15px] text-accent font-medium">
                    <span className="italic">by {creator}</span>
                    <>/</>
                    <span className="italic">{category}</span>
                    <>/</>
                    <span className="italic">{date}</span>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col gap-8 text-stone-600 font-medium'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate blanditiis id hic dolor ab? Ea sunt eius, cupiditate ex quas quidem. Repellat maxime, placeat dolor qui quae itaque aperiam? Optio totam necessitatibus asperiores, veniam aperiam nostrum tempore. Libero exercitationem voluptas ratione quisquam, perspiciatis cum iure placeat, totam, recusandae corporis vel aliquam sed culpa reiciendis saepe aut quas necessitatibus aliquid Iusto rerum sit, magni dicta hic cum vero quo et facilis officia in illo, consequuntur labore.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate blanditiis id hic dolor ab? Ea sunt eius, cupiditate ex quas quidem. Repellat maxime, placeat dolor qui quae itaque aperiam? Optio totam necessitatibus asperiores, veniam aperiam nostrum tempore. Libero exercitationem voluptas ratione quisquam, perspiciatis cum iure placeat, totam, recusandae corporis vel aliquam sed culpa reiciendis saepe aut quas necessitatibus aliquid Iusto rerum sit, magni dicta hic cum vero quo et facilis officia in illo, consequuntur labore.
                </p>
                <div className='w-full h-auto flex flex-col md:flex-row gap-8'>
                    <div className='w-full h-[18rem] bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${'https://images.pexels.com/photos/4339475/pexels-photo-4339475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})` }} />
                    <div className='w-full h-[18rem] bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${'https://images.pexels.com/photos/8937487/pexels-photo-8937487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})` }} />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate blanditiis id hic dolor ab? Ea sunt eius, cupiditate ex quas quidem. Repellat maxime, placeat dolor qui quae itaque aperiam? Optio totam necessitatibus asperiores, veniam aperiam nostrum tempore. Libero exercitationem voluptas ratione quisquam, perspiciatis cum iure placeat, totam, recusandae corporis vel aliquam sed culpa reiciendis saepe aut quas necessitatibus aliquid Iusto rerum sit, magni dicta hic cum vero quo et facilis officia in illo, consequuntur labore.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate blanditiis id hic dolor ab? Ea sunt eius, cupiditate ex quas quidem. Repellat maxime, placeat dolor qui quae itaque aperiam? Optio totam necessitatibus asperiores, veniam aperiam nostrum tempore. Libero exercitationem voluptas ratione quisquam, perspiciatis cum iure placeat, totam, recusandae corporis vel aliquam sed culpa reiciendis saepe aut quas necessitatibus aliquid Iusto rerum sit, magni dicta hic cum vero quo et facilis officia in illo, consequuntur labore.
                </p>
            </div>
        </section>
    )
}

export default Article;