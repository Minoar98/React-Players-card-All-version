const CardWrapper = ({ children, ...restProps }) => {
  // return <article id={id} className={className}>{children}</article>;
  return <article {...restProps}>{children}</article>;
};

export default CardWrapper;
