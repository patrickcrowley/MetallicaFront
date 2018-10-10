import React ,{Component} from 'react';
import DisplayTradeComponent from './displaytrade.component';


export default class TradeComponent extends Component{
    // display(){
    //     <DisplayTradeComponent/>
    // }
    constructor(props) {
        super(props);
        
        this._onButtonClick = this._onButtonClick.bind(this);
      }
    _onButtonClick() {
        this.props.handleCallback(true,this.props.postData);
       
      
      }
    

render(){
return( 
   
    
<tr onClick={this._onButtonClick.bind(this)} >

<td scope="col"> {this.props.postData.Tradedate}</td>
<td>{this.props.postData.Commodity}</td>
<td>{this.props.postData.Side}</td>
<td>{this.props.postData.Qty}</td>
<td>{this.props.postData.price}</td>
<td>{this.props.postData.Counterparty}</td>
<td>{this.props.postData.Location}</td>


</tr>

 
 
 
)

}
}  