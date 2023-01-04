import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext, useEffect } from "react";
import { FlatList, Keyboard } from "react-native";
import AddTask from "../../components/add-task-container/add-task-container-index";
import { Container } from "../../components/container/container";
import ContentModal from "../../components/content-modal/content-modal-index";
import DashboardHeader from "../../components/dashboard-header/dashboard-header-index";
import EditTaskModal from "../../components/edit-task-modal/edit-task-modal-index";
import TaskList from "../../components/task-list/task-list-index";

import AuthContext from "../../contexts/auth";
import firebase from '../../services/firebase/connection';

export default function Dashboard(){
    const [tasks, setTasks] = useState<any[]>([]);
    const [newTask, setNewTask] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editValue, setEditValue] = useState('');
    const [taskKey, setTaskKey] = useState('');

    const {userId, setUserId, setIsSigned} = useContext(AuthContext);
    const navigation = useNavigation<any>();

    function handleAddTask(){
        if(newTask === ''){
          return;
        };
        const tasks = firebase.database().ref('tarefas').child(userId);
        const key = tasks.push().key;

        tasks.child(key as string).set({
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

    function handleDelete(key: string){
        firebase.database().ref('tarefas').child(userId).child(key).remove()
        .then(()=>{
          const filterTaks = tasks.filter(item => item.key !== key);
          setTasks(filterTaks);
        })
    }

    function handleEdit(data: any){
        setTaskKey(data.key)
        setIsModalVisible(true);
        setEditValue(data.descricao);
    }

    function handleEditModalButton(){
        firebase.database().ref('tarefas').child(userId).child(taskKey).update({
            descricao: editValue
        }).then(()=>{
            const taskIndex = tasks.findIndex((item) => item.key === taskKey);
            let taskClone = tasks;
            taskClone[taskIndex].descricao = editValue;
            setTasks([...taskClone])
        });
        setIsModalVisible(false);
    };

    function exit(){
      setUserId(null);
      setIsSigned(false);
    };

    useEffect(()=>{
        console.log(userId, 'oi');
    },[])

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
            <DashboardHeader
              logout={exit}
            />
            <ContentModal>
                <AddTask 
                onPress={handleAddTask}
                value={newTask}
                onChangeText={(text) => setNewTask(text)}/>
                <FlatList
                    data={tasks}
                    keyExtractor={(item: any)=> item.key}
                    renderItem={({item})=>(
                    <TaskList 
                        data={item} 
                        deleteTask={handleDelete}
                        editTask={handleEdit}/>
                    )}
                />
                {isModalVisible && (
                  <EditTaskModal
                    value={editValue}
                    onChangeText={(text) => setEditValue(text)}
                    editTaskModal={handleEditModalButton}
                    closeModal={()=> setIsModalVisible(false)}/>
                )}
            </ContentModal>
        </Container>
    );
};