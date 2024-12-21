import Hero from '../../components/hero';
import FullWidth from '../../layout/blogLayout/fullWidth';

const BlogFullWidth = () => {
    return (
        <div>
            <Hero heading="Blog Without Bar" showButtons={false} />
            <FullWidth fullWidth={true} />
        </div>
    );
};

export default BlogFullWidth;