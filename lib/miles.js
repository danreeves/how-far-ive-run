function metresToMiles(metres) {
    return metres / 1609.344;
}

export default function miles(metres) {
    return Math.round(metresToMiles(metres));
}
