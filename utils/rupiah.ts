const duit = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export default function rupiah(n: number | undefined): string {
  return duit.format(n ?? 0);
}
