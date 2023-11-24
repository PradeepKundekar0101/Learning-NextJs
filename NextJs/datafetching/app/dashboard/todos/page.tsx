import Counter from "@/components/Counter";

const fetchTodos = async ()=>{
    const todos = await fetch("https://jsonplaceholder.typicode.com/todos",{
    cache:"force-cache"
    });
    return await todos.json();
}
async function Todos  (){
    const todos = await fetchTodos();
    return<>
        <Counter/>
        <div className="grid grid-cols-3 gap-2">
        {/* THE Todos are rendered on the server side and sent to the clients. */}
        {todos && Array.isArray(todos) && todos.map((todo:any)=>{ return <div className="p-2 border shadow-lg text-lg" key={todo.id}>
            {todo.title}
        </div> })}
        </div>
    </>
}
export default Todos;

// NEXTJS gives you the choice which component should be rendered on server and which components needs to rendered on the client