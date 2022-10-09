import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import StopWatch from '../components/StopWatch';
import ITask from '../types/taks';

import style from './App.module.scss';

const App = () => {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  const selectTask = (selectedTask: ITask) => {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false
      }))
    );
  };
  
  const startTask = () => {
    setTasks((oldTasks) =>
    oldTasks.map((task) => ({
      ...task,
      started: true
    }))
    );
  };

  const finishTask = () => {
    if (selected) {
      setTasks((oldTasks) =>
        oldTasks.map((task) => {
          task.started = false
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            };
          }
          return task;
        })
      );
    }
  };

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List selectTask={selectTask} tasks={tasks} />
      <StopWatch finishTask={finishTask} selected={selected} startTask={startTask} />
    </div>
  );
};

export default App;
