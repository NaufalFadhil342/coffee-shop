const FlowFilter = ({ instagram, twitter, tiktok }) => {
  return (
    <ul className="w-full flex justify-start items-center gap-2">
      <li className="text-stone-400 text-3xl hover:text-accent transition-colors duration-200">{instagram}</li>
      <li className="text-stone-400 text-3xl hover:text-accent transition-colors duration-200">{twitter}</li>
      <li className="text-stone-400 text-3xl hover:text-accent transition-colors duration-200">{tiktok}</li>
    </ul>
  );
};

export default FlowFilter;
