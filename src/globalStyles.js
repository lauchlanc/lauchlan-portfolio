const breakpoints = [576, 768, 992, 1200, 1440, 2185];

export const queries = breakpoints.map(bp => `(min-width: ${bp}px)`);

export const mq = queries.map(q => `@media ${q}`);
