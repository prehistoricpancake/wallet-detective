interface ButtonProps {
  text: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type="submit"
      className="bg-black h-12 px-3 text-white rounded-lg md:w-full search"
    >
      {props.text}
    </button>
  );
};

export default Button;
