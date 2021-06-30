export function randomDate(startDate: Date, endDate: Date) {
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
}
