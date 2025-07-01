const CardWrapper = ({ children, ...restProps }) => {
  console.log("Children:", children);
  // return <article id={id} className={className}>{children}</article>;
  return <article {...restProps}>{children}</article>;
};

export default CardWrapper;
