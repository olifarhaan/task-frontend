import React, { useEffect, useState } from 'react'
import taskService from '../services/TaskService';
import { useNavigate, useParams } from 'react-router-dom';

const AddTask = () => {

    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const saveOrUpdateTask = (e) => {
        e.preventDefault();
        const task = { title, description };

        if (id) {
            taskService.updateTask(id, task).then(response => {
                console.log(response.data);
                navigate('/tasks');
            }).catch(error => {
                console.log(error);
            })
        }
        else {
            taskService.createTask(task).then(response => {
                console.log(response.data);
                navigate('/tasks');
            }).catch(error => {
                console.log(error);
            })

        }

    }

    const headerTitle = () => {
        if (id) return 'Update Task'
        else return 'Add Task'
    }


    useEffect(() => {
        taskService.getTask(id).then((response) => {
            setTitle(response.data.title);
            setDescription(response.data.description);
        }).catch((error) => {
            console.log(error);
        });
    }, [id])

    

    

    return (
        <div className="container">
            <div className="card border-success m-3 mx-auto" style={{ "maxWidth": "30rem" }}>
                <div className="card-header bg-transparent border-success"> <h1>{headerTitle()}</h1></div>
                <div className="card-body">

                    <form>
                        <div className="form-group mb-3">
                            <label className='form-label'>Title</label>
                            <input
                                type="text"
                                placeholder='Enter a title'
                                name='title'
                                className='form-control'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            ></input>
                        </div>

                        <div className="form-group mb-3">
                            <label className='form-label'>Description</label>
                            <textarea
                                type="text"
                                rows="8"
                                placeholder='Enter a description'
                                name='title'
                                className='form-control'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <button className='btn btn-success btn-lg mt-3' onClick={(e) => saveOrUpdateTask(e)}>{headerTitle()}</button>
                        <button className='btn btn-danger btn-lg mx-2 mt-3' onClick={() => navigate('/tasks')}>Cancel</button>
                    </form>

                </div>
                <div className="card-footer bg-transparent text-muted">
                    Having an error? Contact Us
                </div>
            </div>

        </div>
    )
}

export default AddTask