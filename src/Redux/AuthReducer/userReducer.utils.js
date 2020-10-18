export const getRefreshToken = (state, token, refreshtoken) => {
  if (!refreshtoken) {
    return {
      ...state,
      token,
    };
  }
  return {
    ...state,
    token,
    refreshtoken,
  };
};
