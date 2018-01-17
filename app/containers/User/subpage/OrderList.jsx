import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getOrderListData} from '../../../fetch/user/orderlist.js'
import './style.less'
import OrderListComponent from '../../../components/OrderList'

class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            data:[]
        }
    }
    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                    ?<OrderListComponent data={this.state.data}></OrderListComponent>
                    :''
                }
            </div>
        )
    }
    componentDidMount(){
        const username = this.props.username

        if(username){
            this.loadOrderList(username)
            
        }
    }
    loadOrderList(username){
            var result=getOrderListData(username)
            result.then(res=>{
                return res.json()
            }).then(json=>{
                this.setState({
                    data:json
                })
            })
    }
}

export default OrderList