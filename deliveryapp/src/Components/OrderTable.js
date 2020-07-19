import React from 'react';
import Axios from "axios";
import logo from '../logo.jpg';

class OrderTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          orderItems: []
        };
      }
    
      componentDidMount() {
        Axios.get(
          `https://platr-staging.herokuapp.com/logistics/orders`
        ).then((res) => {
          const orderItem = res.data;
         
          this.setState({ orderItems: orderItem.data});
          console.log(this.state.orderItems);
        });
       
      }


    render(){
        return(
<div class="row">
        <div class="col">
          <div class="card bg-default shadow">
            <div class="card-header bg-transparent border-0">
              <h3 class="text-white mb-0">Orders</h3>
            </div>
            <div class="table-responsive">
              <table class="table align-items-center table-dark table-flush">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Order</th>
                    <th scope="col" class="sort" data-sort="budget">Restaurant</th>
                    <th scope="col" class="sort" data-sort="status">Status</th>
                    <th scope="col">Delivery address</th>
                    <th scope="col" class="sort" data-sort="completion">Time</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
               {
                 this.state.orderItems.map((item, index)=>(
                  <tbody class="list">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href=".Orders" class="avatar rounded-circle mr-3">
                          <img alt="Platr" src={logo}/>
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">{item.customerName}</span>
                        </div>
                      </div>
                    </th>
                    <td>
                     {item.restaurant.businessName}
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-warning"></i>
                        <span class="status">{item.status}</span>
                      </span>
                    </td>
                    <td>
                      {item.deliveryAddress}
                    </td>
                    <td>
                     {item.createdAt}
                    </td>
                    <td class="text-right">
                      <div class="dropdown">
                        <a class="btn btn-sm btn-icon-only text-light" href=".Orders" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fas fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a class="dropdown-item" href=".Orders">Out for delivery</a>
                          <a class="dropdown-item" href=".Orders">Ready for delivery</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
                 ))
               }
              </table>
            </div>
          </div>
        </div>
      </div>
        )
    }
}


export default OrderTable;
