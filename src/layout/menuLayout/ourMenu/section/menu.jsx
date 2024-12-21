import React from 'react';

const Menu = ({ menuData }) => {
  // update the code on your own
  // const [state, setState] = useState([]);

  // useEffect(() => {
  //   const response = axios.get('http://yourapi.com/api');

  //   setState(response)
  // }, [])

  return (
    <div className="w-full h-auto flex flex-col gap-6">
      {menuData.map((item) => (
        <div className="w-full h-auto flex items-center gap-6" key={item.id}>
          <div className="min-w-fit h-auto overflow-hidden rounded-full">
            <img className="w-[4.25rem] h-16 object-cover" src={item.image} alt={item.title} />
          </div>
          <div className="w-full h-auto">
            <div className="w-full h-auto flex items-end gap-3 sm:gap-6">
              <h3 className="min-w-fit text-xl text-stone-800 font-medium">{item.title}</h3>
              <div className="w-full h-[2px] bg-beige -translate-y-1" />
            </div>
            <p className="h-6 overflow-y-hidden text-sm text-accent">Fresh brewed coffee and steamed milk</p>
          </div>
          <div className="w-auto h-auto">
            <div className="text-stone-600 text-xl">${item.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
