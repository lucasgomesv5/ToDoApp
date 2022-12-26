import React, { useState, useContext, useEffect } from "react";
import { FlatList, Keyboard } from "react-native";
import AddTask from "../../components/add-task-container/add-task-container-index";
import { Container } from "../../components/container/container";
import ContentModal from "../../components/content-modal/content-modal-index";
import DashboardHeader from "../../components/dashboard-header/dashboard-header-index";
import TaskList from "../../components/task-list/task-list-index";

import AuthContext from "../../contexts/auth";
import firebase from '../../services/firebase/connection';

export default function Dashboard(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const {userId} = useContext(AuthContext);

    function handleAddTask(){
        if(newTask === ''){
          return;
        };
        const tasks = firebase.database().ref('tarefas').child(userId);
        const key = tasks.push().key;

        tasks.child(key).set({
            descricao: newTask
        })
        .then(()=>{
            const data = {
                key: key,
                descricao: newTask,
            };
            setTasks(oldTasks => [...oldTasks, data]);
        })
        Keyboard.dismiss();
        setNewTask('');
    };

    function handleDelete(key: any){
        console.log(key)
    }

    function handleEdit(data: any){
        console.log(data)
    }

    useEffect(()=>{
        if(!userId){
          return;
        };
        function getUserData(){
            firebase.database().ref('tarefas').child(userId).once('value', (snapshot)=>{
                setTasks([]);
                snapshot?.forEach((childItem)=>{
                    const data = {
                        key: childItem.key,
                        descricao: childItem.val().descricao
                    };
                    setTasks(oldTasks => [...oldTasks, data]);
                });
            });
        };
        getUserData();
    },[userId])

    return(
        <Container>
            <DashboardHeader/>
            <ContentModal>
                <AddTask 
                onPress={handleAddTask}
                value={newTask}
                onChangeText={(text) => setNewTask(text)}/>
                <FlatList
                    data={tasks}
                    keyExtractor={(item)=> item.key}
                    renderItem={({item})=>(
                    <TaskList data={item} 
                        deleteTask={handleDelete}
                        editTask={handleEdit}/>
                    )}
                />
            </ContentModal>
        </Container>
    )
}