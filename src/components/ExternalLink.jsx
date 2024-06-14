import { forwardRef } from "react";

const ExternalLink = forwardRef(({to, children, ...rest}, ref) => {
    return (
      <a href={to} ref={ref} target='_blank' rel='noopener noreferrer' {...rest}>
        {children}
      </a>
    );
})
export default ExternalLink