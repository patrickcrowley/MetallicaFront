export default function market(defStore = [], action) {
    switch (action.type) {
        case 'FETCH_MARKET_DATA':
            defStore = action.response;
            return defStore;
        default:
            return defStore;
    }
}