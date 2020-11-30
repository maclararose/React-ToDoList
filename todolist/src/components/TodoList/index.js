import React, {Component} from 'react';
import TodoItens from '../TodoItens/index.js';
import '../../style.css';

class TodoList extends Component{
    constructor(props){
        super(props);

        this.state = {
            tarefa: '',
            itens: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        let state = this.state;
        if(this._tarefaInput.value !== null){
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            };

            this.setState({itens: [...state.itens, newItem]});
        }

        this.setState({tarefa: ''});

        e.preventDefault();
    }

    deleteItem(key){
        console.log('item a ser deletado: '+key);
        let filtro = this.state.itens.filter((item) => {
            return(item.key !== key);
        });

        this.setState({itens: filtro});
    }

    render(){
        return(
            <div className="container">
                <form className="formulario" onSubmit= {this.addItem}>
                    <input className="input" type="text" placeholder="Nova Tarefa" name="tarefa" value={this.state.tarefa} 
                        onChange={(e) => this.setState({tarefa: e.target.value})}
                        ref={(e) => this._tarefaInput = e}/>
                        
                    <button className="btn" type="submit"><strong>+</strong></button>
                </form>

                <TodoItens lista={this.state.itens} delete={this.deleteItem}/>
            </div>
        );
    }
}

export default TodoList;