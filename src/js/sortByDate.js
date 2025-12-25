export function sortByDate(data) {
    return data
        .map(item => ({
            ...item,
            date: new Date(item.date),
        }))
        .sort((a, b) => a.date - b.date);
}
