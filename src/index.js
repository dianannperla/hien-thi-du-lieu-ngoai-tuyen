class HienThiDuLieu {
    static async fetchAndDisplay(apiUrl) {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            this.storeData(data);
            this.renderData(data);
        } catch (error) {
            console.error('Có lỗi xảy ra:', error);
        }
    }

    static storeData(data) {
        localStorage.setItem('offlineData', JSON.stringify(data));
    }

    static renderData(data) {
        // Mã để hiển thị dữ liệu lên giao diện
        const displayElement = document.getElementById('data-display');
        displayElement.innerHTML = JSON.stringify(data, null, 2);
    }

    static syncData(apiUrl) {
        window.addEventListener('online', () => {
            this.fetchAndDisplay(apiUrl);
        });
    }
}

export default HienThiDuLieu;