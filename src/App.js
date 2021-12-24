import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput'

export default class App extends Component {
  constructor(){
    super() 
    this.state = {
      todos:[],
      editTask:false
    }}
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


