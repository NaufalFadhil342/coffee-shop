import Hero from "../../components/hero";
import BlogDetails from "../../layout/blogLayout/blogDetails";

const BlogParams = () => {
    return (
        <div>
            <Hero heading="Blog Details" showButtons={false} />
            <BlogDetails />
        </div>
    );
};

export default BlogParams;