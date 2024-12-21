import React from 'react';
import { menuData } from '../../../data/dummyCoffee';
import MenuItem from './section/menuItem';

const SimpleMenuSection = ({ mainPage }) => {
  // Update the code below
  // const [state, setState] = useState([])

  // useEffect(() => {
  //   const response = axios.get('http://yourapi.com/api')

  //   setState(response)
  // }, [])

  return (
    <div className={`w-full h-auto flex flex-col lg:flex-row justify-between gap-8 px-[8%] ${mainPage ? 'py-0' : 'py-28'}`}>
      <div className="w-full h-auto flex flex-col gap-10">
        {!mainPage && (
          <div className="w-full h-auto flex flex-col items-center lg:items-start gap-2">
            <h1 className="text-[2em] text-stone-800 uppercase font-semibold">Hot Beverages</h1>
            <div className="w-20 h-[2px] bg-accent" />
          </div>
        )}
        <div className="w-full h-auto flex flex-col gap-6">
          {menuData.map((item) => (
            <MenuItem key={item.id} menu={item} />
          ))}
        </div>
      </div>
      <div className={`w-full h-auto flex flex-col gap-10 ${mainPage && "hidden md:flex"}`}>
        {!mainPage && (
          <div className="w-full h-auto flex flex-col items-center lg:items-start gap-2">
            <h1 className="text-[2em] text-stone-800 uppercase font-semibold">Iced Beverages</h1>
            <div className="w-20 h-[2px] bg-accent" />
          </div>
        )}
        <div className="w-full h-auto flex flex-col gap-6">
          {menuData.map((item) => (
            <MenuItem key={item.id} menu={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleMenuSection;
