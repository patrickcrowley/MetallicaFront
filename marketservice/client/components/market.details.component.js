import React, { Component } from 'react';
import StockDetails from './stock.details.components';
import Marquee from 'react-smooth-marquee';

export default class MarketDetails extends Component {

    render() {
        var marketDataList = this.props.mydata.map(
            (p, i) => {
                return <StockDetails
                    key={i}
                    index={i}
                    stockData={p}
                    {...this.props} />
            }
        )

        console.log(marketDataList);

        return <div className='simple-marquee-container'>
        
        <div className='marquee'>
                <Marquee>
                    <ul className='marquee-content-items'>
                    {marketDataList}
                        </ul>
                    </Marquee>
                    
                    </div>
        </div>
    }


}