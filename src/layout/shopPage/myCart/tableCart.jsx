import React from 'react';

const TableCart = (props) => {
  const { cartData, setCartData, tableGroupData, quantities, increaseQuantity, decreaseQuantity, getSubtotal } = props;

  const deletedItems = (id) => {
    setCartData(cartData.filter((cart) => cart.id !== id));
  };

  return (
    <section className='w-full h-auto overflow-x-scroll md:overflow-x-hidden'>
      <table className="table-auto w-[768px] md:w-full h-auto">
        <thead className="w-full h-auto flex">
          {tableGroupData[0].tableHeader.map((table, index) => (
            <tr className="w-full h-12 border-b border-stone-300" key={index}>
              <th className="w-full h-full flex items-center justify-center text-stone-800 text-lg">{table.header}</th>
            </tr>
          ))}
        </thead>
        <tbody className="w-full h-auto">
          {cartData.map((item) => {
            const currentQuantity = quantities.find((q) => q.id === item.id)?.quantity || item.quantity;
            const subtotal = getSubtotal(item.price, currentQuantity);

            return (
              <tr key={item.id} className="w-full h-auto flex items-center px-2 py-6 border-b border-stone-300 relative">
                <td className="w-full h-full flex items-center justify-center gap-2">
                  <div className="w-auto h-16 overflow-hidden">
                    <img className="w-full h-full object-center object-cover" src={item.image} alt={item.label} />
                  </div>
                  <span className="text-stone-600 font-medium">{item.label}</span>
                </td>
                <td className="w-full h-full flex items-center justify-center text-stone-600">${item.price}</td>
                <td className="w-full h-full flex items-center justify-center text-stone-600">
                  <button onClick={() => decreaseQuantity(item.id)} className="px-2 border border-stone-400 rounded text-stone-600 hover:text-accent duration-200 transition-colors cursor-pointer">
                    -
                  </button>
                  <span className="px-4">{currentQuantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} className="px-2 border border-stone-400 rounded text-stone-600 hover:text-accent duration-200 transition-colors cursor-pointer">
                    +
                  </button>
                </td>
                <td className="w-full h-full flex items-center justify-center text-stone-600">${subtotal.toFixed(2)}</td>
                <td className="w-auto h-auto flex items-center justify-end text-stone-600 absolute right-5">
                  <button className='text-xl text-stone-600 font-medium hover:text-red-500 duration-200 transition-colors' onClick={() => deletedItems(item.id)}>x</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default TableCart;
