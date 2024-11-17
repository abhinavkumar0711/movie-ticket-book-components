const InputField = ({
  id = '',
  placeholderText = 'Enter',
  onChange,
  value,
  className,
  type
}) => {
  const defaultClass = 'bg-[rgba(77,77,77,0.4)] text-white p-4 rounded-2xl w-full max-w-md';

  return (
      <input
        type={type}
        id={id}
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
        className={className ?? defaultClass}
      />
  );
}

export default InputField;
