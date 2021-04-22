const moneyFormatter = (money) => {
  return `Rp. ${money.toLocaleString("id-ID")},00`;
};

module.exports = moneyFormatter;
