import React, {Component} from 'react';
import '../../style.css';

class TodoItens extends Component{
    constructor(props){
        super(props);
        this.state = {};
        
        this.delete = this.delete.bind(this);
    }

    delete(key){
        this.props.delete(key);
    }

    render(){
        return(
            <div className="local-list">
                <ul>
                    {this.props.lista.map((item) => {
                        return(
                            <li className="lista" onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoItens;