import Hero from '../../components/hero';
import LeftBar from '../../layout/blogLayout/leftBar';

const BlogLeftBar = () => {
    return (
        <div>
            <Hero heading="Blog Left Sidebar" showButtons={false} />
            <LeftBar />
        </div>
    );
};

export default BlogLeftBar