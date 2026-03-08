import { forwardRef } from "react";
 
const ExternalLink = forwardRef(function ExternalLink({ to, children, ...rest }, ref) {
    return (
      <a href={to} ref={ref} target='_blank' rel='noopener noreferrer' {...rest}>
        {children}
      </a>
    );
});

ExternalLink.displayName = 'ExternalLink';

export default ExternalLink;