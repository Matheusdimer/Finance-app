export default function formatNumber(number) {
  return number.toFixed(2).toString().replace('.', ',');
}