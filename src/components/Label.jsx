const Label = ({ text }) => {
  return (
    <>
      <span className="bg-sky-200 rounded px-3 py-1.5 text-sky-900 text-sm font-medium leading-none">
        {text}
      </span>
    </>
  );
};

export default Label;
