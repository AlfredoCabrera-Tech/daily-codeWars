export const enough = (cap, on, wait) =>
  cap - on >= wait ? 0 : wait - (cap - on);
