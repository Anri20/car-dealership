import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

function getRandomItems<T>(arr: T[], x: number): T[] {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, x);
}

function formatNumber(value: number | string): string {
    const [integer, decimal] = String(value).split(".");
    const formatted = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return decimal !== undefined ? `${formatted},${decimal}` : formatted;
}

function formatRupiah(value: number): string {
    return "Rp " + formatNumber(value);
}

export {
    cn,
    getRandomItems,
    formatNumber,
    formatRupiah,
}