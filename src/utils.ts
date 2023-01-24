export const cutStr = (str: string, n: number): string => {
    return str.length <= n ? str : str.slice(0, n) + '...';
}

export const leafAhead = (list: any, scroll: number) => {
    if (!list.current) return;
    list.current.scrollLeft += scroll;
}

export const leafBack = (list: any, scroll: number) => {
    if (!list.current) return;
    list.current.scrollLeft -= scroll;
}