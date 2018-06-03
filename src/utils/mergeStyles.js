export default (style1, style2) => {
  if (Array.isArray(style1) && Array.isArray(style2)) {
    return [...style1, ...style2];
  }

  if (Array.isArray(style1) && !Array.isArray(style2)) {
    return [...style1, style2];
  }

  if (!Array.isArray(style1) && Array.isArray(style2)) {
    return [style1, ...style2];
  }

  return [style1, style2];
}
