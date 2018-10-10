import axios from 'axios';


export function FetchMarketData(){
    axios.post('http://localhost:8080/marketdata/data');
    var request = axios.get('http://localhost:8080/marketdata/data');
    console.log('Running fetch');
    return (dispatch)=>
        request.then(
            (response)=>{
                dispatch({
                type:'FETCH_MARKET_DATA',
                response:response.data 
                })
            }
        )
}
