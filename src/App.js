import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput'

export default class App extends Component {
  constructor(){
    super() 
    this.state = {
      todos:[],
      editTask:false
    }}
    addTodo = (todo)=>{
      //a new todo array that we can add a todo at the beginning
      const newTodos =[todo,...this.state.todos];
      //update the state
      this.setState({
         todos: newTodos
      })
    }
    
      clearList = ()=>{
        this.setState({
          todos:[]
        })
      }
     handleDelete = (id)=>{
       //filter method is always return a new array 
       //remove the item from the list
        const filteredItems = this.state.todos.filter(todo =>
          todo.id !== id)
          this.setState({
            todos:filteredItems
          })

     } 
    render() {
  return (
    <div className="container">
      <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4"></div>
          <h3 className="text-capitalize text-center">Todo Input</h3>
        <TodoInput addTodo ={this.addTodo}/>
          </div>
    </div>
  );
}}


