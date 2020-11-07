import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";

class Orders extends Component {
  state = {
    orders: [],
    spinnerLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ spinnerLoading: true });
      const response = await axios.get("/orders.json");
      this.setState({ spinnerLoading: false });
      const orders = [];

      for (let key in response.data) {
        orders.push({
          ...response.data[key],
          id: key,
        });
      }
      this.setState({ orders });
    } catch (error) {
      console.log("error fetching orders", error);
      this.setState({ spinnerLoading: false });
    }
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order key={order.id} {...order} />
        ))}
      </div>
    );
  }
}

export default Orders;
