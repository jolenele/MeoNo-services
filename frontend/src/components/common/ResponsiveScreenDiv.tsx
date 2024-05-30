type TProps = {
  children: React.ReactNode;
  className?: string;
};

const ResponsiveScreenDiv = (props: TProps) => {
  const { children, className } = props;

  const _className = className
    ? `2xl:w-8/12 xl:w-8/12 lg:w-8/12 w-full ${className}`
    : `2xl:w-8/12 xl:w-8/12 lg:w-8/12 w-full`;
  return <div className={_className}>{children}</div>;
};

export default ResponsiveScreenDiv;
