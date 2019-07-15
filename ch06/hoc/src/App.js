import React, { Component } from 'react';
import MyButton from './MyButton';
import List from './List';
import produce from 'immer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemlist : []
        }
        this.addItem = this.addItem.bind(this);
    }
    
    addItem() {
        if (!this.num) this.num = 0;
        this.num++;

        let newItemList = produce(this.state.itemlist, (draft)=> {
            draft.push({ no: new Date().getTime(), 
                item: "아이템 " + this.num});
        })
        this.setState({ itemlist : newItemList });
    }

    render() {
        return (
            <div className="container">
                <div className="well">
                    <MyButton addItem={this.addItem} />
                    <List itemlist={this.state.itemlist} />
                </div>
            </div>
        );
    }
}

export default App;