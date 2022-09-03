

export const currency = (price) => {
  let naira = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    currencyDisplay: "narrowSymbol",
  });
  return naira.format(price);
};
