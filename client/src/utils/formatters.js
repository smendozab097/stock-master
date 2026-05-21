export const stockBadgeColor = (stock) => {
    if (stock <= 10) {
        return 'px-4 py-1.5 bg-rose-200 text-rose-600 rounded-xl text-[10px] font-black uppercase tracking-tight border border-rose-400';
    }

    if (stock <= 25) {
        return 'px-4 py-1.5 bg-amber-100 text-amber-600 rounded-xl text-[10px] font-black uppercase tracking-tight border border-amber-400';
    }

    return 'px-4 py-1.5 bg-emerald-100 text-emerald-600 rounded-xl text-[10px] font-black uppercase tracking-tight border border-emerald-400';
};

export const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        currencyDisplay: 'code',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(price);
}