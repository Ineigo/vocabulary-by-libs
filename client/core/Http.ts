export function get<T>(url: string, data: any = {}): Promise<T> {
    const keys = Object.keys(data);
    const params = '?' + keys.map(key => `${key}=${data[key]}`).join('&');
    return fetch(url + (keys.length ? params : '')).then((res: any) => res.json());
}
