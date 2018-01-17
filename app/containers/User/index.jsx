import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import Header from '../../components/Header'
import Userinfo from '../../components/Userinfo'
import OrderList from './subpage/OrderList.jsx'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userinfo = this.props.userinfo
        console.log(userinfo.username);
        console.log(userinfo.cityName);
        return (
            <div>
                <Header title="用户中心" backRouter="/"></Header>
                <Userinfo username={userinfo.username} city={userinfo.cityName}></Userinfo>
                <OrderList username={userinfo.username}></OrderList>
            </div>
        )
    }
    componentDidMount(){
        //如果未登录,跳转到登录页面
        if(!this.props.userinfo.username){
            hashHistory.push('/login')
        }
    }
}

function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}
function mapDispatchToProps(dispatch){
    return{

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)