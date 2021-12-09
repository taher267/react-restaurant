import React, { Component } from 'react';
import DISHES from '../../data/dishes';
import MenuItem from './MenuItem';
import DishDetails from './DishDetails';

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }

    onDishSelect = dish => this.setState({ selectedDish: dish });

    render() {
        const menu = this.state.dishes.map((item) =>
            <MenuItem
                dish={item}
                key={item.id}
                DishSelect={() => this.onDishSelect(item)}
            />);
        let dishDetails = null;
        if (this.state.selectedDish) {
            dishDetails = <DishDetails dish={this.state.selectedDish} />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        {menu}
                    </div>
                    <div className="col-lg-6">
                        {dishDetails}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;