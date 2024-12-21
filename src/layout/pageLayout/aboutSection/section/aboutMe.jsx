import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok } from 'react-icons/fa6';

const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis amet neque expedita ullam adipisci ea cupiditate fuga quaerat. Id ipsum dolorum sunt facere hic tenetur necessitatibus odit nisi mollitia.';

const aboutMeImage = 'https://images.pexels.com/photos/5192027/pexels-photo-5192027.jpeg?auto=compress&cs=tinysrgb&w=600';

const AboutMe = () => {
  return (
    <div className="w-full h-auto flex gap-2 mt-20 px-[8%]">
      <div className="flex-50 hidden lg:flex w-full h-auto py-10 pr-10">
        <div className="w-full h-full rounded-full overflow-hidden">
          <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${aboutMeImage})` }} />
        </div>
      </div>
      <div className="flex-100 lg:flex-50 w-full h-auto flex flex-col gap-8 text-stone-800">
        <div className="flex flex-col gap-4">
          <div className="text-accent font-medium">About Us</div>
          <h1 className="uppercase text-4xl font-semibold">Dutchs Meneer</h1>
          <div className="w-10 h-[2px] bg-accent" />
        </div>
        <div>
          <p className="text-stone-600 text-[15px] mb-2">{paragraph}</p>
          <p className="text-stone-600 text-[15px]">{paragraph}</p>
        </div>
        <div className="w-full h-auto pl-6 py-2 text-2xl font-medium border-l-4 border-accent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, soluta.</div>
        <div>
          <p className="text-stone-600 text-[15px] mb-2">{paragraph}</p>
          <p className="text-stone-600 text-[15px]">{paragraph}</p>
        </div>
        <div className="w-full flex items-center gap-4">
          <>
            <FaInstagram className="text-xl text-stone-400 hover:text-accent hover:cursor-pointer transition-colors duration-200" />
          </>
          <>
            <FaFacebookF className="text-xl text-stone-400 hover:text-accent hover:cursor-pointer transition-colors duration-200" />
          </>
          <>
            <FaTwitter className="text-xl text-stone-400 hover:text-accent hover:cursor-pointer transition-colors duration-200" />
          </>
          <>
            <FaTiktok className="text-xl text-stone-400 hover:text-accent hover:cursor-pointer transition-colors duration-200" />
          </>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
