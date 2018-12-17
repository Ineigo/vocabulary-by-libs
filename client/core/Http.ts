export function get(url: string, data: any = {}): Promise<any> {
    const keys = Object.keys(data);
    const params = '?' + keys.map(key => `${key}=${data[key]}`).join('&');
    return fetch(url + (keys.length ? params : '')).then(res => res.json());
}
