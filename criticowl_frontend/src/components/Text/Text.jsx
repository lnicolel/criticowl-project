import PropTypes from 'prop-types';

const sizes = {
    xs: "text-xs font-normal",
    lg: "text-4xl font-normal md:text-[34px] sm:text-[32px]",
    s: "text-2xl font-normal md:text-[22px]",
    "2xl": "text-[64px] font-normal md:text-5xl",
    xl: "text-[40px] font-normal md:text-[38px] sm:text-4xl",
    md: "text-[32px] font-normal md:text-3xl sm:text-[28px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
    const Component = as || "p";
    return (
        <Component className={`text-gray-900 font-roboto ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

Text.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    as: PropTypes.elementType,
    size: PropTypes.oneOf(['xs', 's', 'md', 'lg', 'xl', '2xl']),
};

export { Text };
