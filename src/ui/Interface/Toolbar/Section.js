import React from 'react';

const Section = ({children, caption, ...props}) => (
  <div className="toolbar-section" {...props}>
    <div className="toolbar-section-caption">
      {caption}
    </div>
    <div className="toolbar-section-content">
      {children}
    </div>
  </div>
);

export default Section;
