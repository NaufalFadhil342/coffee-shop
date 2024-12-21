import Hero from "../../components/hero";
import RightBar from "../../layout/blogLayout/rightBar";

const BlogRightBar = () => {
    return (
        <div>
            <Hero heading="Blog Right Sidebar" showButtons={false} />
            <RightBar />
        </div>
    );
};

export default BlogRightBar;