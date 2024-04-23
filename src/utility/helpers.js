export const findTokenValue = (token, theme) => {
  if (token.isAlias) {
    return findTokenValue(theme[token.varValue], theme);
  } else {
    return token.varValue;
  }
};
