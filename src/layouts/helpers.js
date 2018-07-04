export const transformToHtml = (content) => content
  .replace(/_(((?![\_*]).)*)_/g, (...matches) => '<b>' + matches[1] + '</b>' )
  .replace(/\*(((?![\_*]).)*)\*/g, (...matches) => '<i>' + matches[1] + '</i>' )
  .replace(/\n/g, '<br />');
