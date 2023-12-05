const e2p = (s: string): string =>
  s.toString().replace(/\d/g, (d: string) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d, 10)]);

const p2e = (s: string): string =>
  s
    .toString()
    .replace(/[۰-۹]/g, (d: string) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());

const sp = (number: number): string => {
  const separatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  if (separatedNumber) {
    const joinedNumber = separatedNumber.join(",");
    return e2p(joinedNumber);
  }
  return e2p(number.toString());
};

export { e2p, p2e, sp };
