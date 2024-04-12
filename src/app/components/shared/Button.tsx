import className from 'classnames';

type ButtonProps = {
  children: string;
  className: string;
  onClick?: () => void;
  redOutline?: boolean;
  blueOutline?: boolean;
  red?: boolean;
  blue?: boolean;
  roundedBlack?: boolean;
  black?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  redOutline,
  blueOutline,
  red,
  blue,
  roundedBlack,
  black,
  ...rest
}) => {
  const classes = className(rest.className, 'text-center', {
    'sm:uppercase font-medium text-17 text-brand-red border border-brand-red rounded-10 hover:bg-brand-red hover:text-white transition-all duration-200 px-9':
      redOutline,
    'sm:uppercase font-medium text-17 text-brand-blue-3 border border-brand-blue-3 rounded-10 hover:bg-brand-blue-3 hover:text-white transition-all duration-200 px-9':
      blueOutline,
    'uppercase font-medium text-17 bg-brand-red-1 text-white border border-transparent hover:border-brand-red-1 rounded-10 hover:bg-white hover:text-brand-red-1 transition-all duration-200 px-9':
      red,
    'uppercase font-medium text-17 bg-brand-blue-1 text-white border border-transparent hover:border-brand-blue-1 rounded-10 hover:bg-white hover:text-brand-blue-1 transition-all duration-200 px-9':
      blue,
  });

  return (
    <button {...rest} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
