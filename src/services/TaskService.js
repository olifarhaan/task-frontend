import axios from "axios";

const TASK_BASE_REST_API_URL='http://localhost:8080/api/v1/tasks'

class TaskService{
    getAllTasks(){
        return axios.get(TASK_BASE_REST_API_URL)
    }
    createTask(task){
        return axios.post(TASK_BASE_REST_API_URL, task);
    }
    getTask(id){
        return axios.get(TASK_BASE_REST_API_URL+'/'+id);
    }
    updateTask(id, task){
        return axios.put(TASK_BASE_REST_API_URL+'/'+id, task);
    }
    deleteTask(id){
        return axios.delete(TASK_BASE_REST_API_URL+'/'+id);
    }
}
const taskService=new TaskService();
export default taskService;