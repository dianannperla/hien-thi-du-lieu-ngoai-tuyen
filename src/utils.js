export function getStoredData() {
    const data = localStorage.getItem('offlineData');
    return data ? JSON.parse(data) : null;
}

export function clearStoredData() {
    localStorage.removeItem('offlineData');
}