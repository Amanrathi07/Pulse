export function formatCurrency(value: number, currency: string = "USD"): string {
    try {
        const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        return formatter.format(value);
    } catch {
        return `$${Number(value).toFixed(2)}`;
    }
}

