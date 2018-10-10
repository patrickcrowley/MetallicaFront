import {connect} from 'react-redux';
//want to expose the actions and store as props
import * as AllActions from '../actions/actions';
import MainComponent from './main.component';
import {bindActionCreators} from 'redux';


//stateToProps = store && DispatchToProps = actions

function mapStateToProps(storeData){
    return{
        mydata:storeData
    }
}

//disptacher is just a call to a function
function mapDispatchToProps(dispatcher){
    return bindActionCreators(AllActions,dispatcher); //a way call actions and reducers will be notified
}



var app = connect(mapStateToProps,mapDispatchToProps)(MainComponent);
export default app;