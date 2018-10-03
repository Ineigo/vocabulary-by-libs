export function get(url, data = {}) {
    const keys = Object.keys(data);
    const params = '?' + keys.map(key => `${key}=${data[key]}`).join('&');
    return fetch(url + (keys.length ? params : '')).then(res => res.json());
}
