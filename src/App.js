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
    toggleComplete=(id)=>{
      this.setState({
          todos: this.state.todos.map(todo=>{
            if(todo.id === id){
             //suppose to update
             return{
               //keep the id the same and the text just change the complete (inverse it)
               //or we can get rid of the id and the text cause it's the same and write ...todo, and the complete
               id : todo.id,
               text: todo.text,
               complete: !todo.complete

             }
            }
            else{
              //we didn't change any thing
              return todo;
            }
          })
      })}
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
        <ListTask handleDelete={this.handleDelete} clearList={this.clearList} todos={this.state.todos} toggleComplete={this.toggleComplete}/>
          </div>
    </div>
  );
}}


