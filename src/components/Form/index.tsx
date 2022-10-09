import React, { useState } from 'react';
import ITask from '../../types/taks';
import Button from '../Button';
import { v4 as uuidv4 } from 'uuid';

import style from './Form.module.scss';
import MaterialIcon from '@material/react-material-icon';

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const Form = ({ setTasks }: Props) => {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('00:00');

  const cleanForm = () => {
    setTask('');
    setTime('00:00');
  };

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      {
        task,
        time,
        selected: false,
        completed: false,
        started: false,
        id: uuidv4()
      }
    ]);
    cleanForm();
  };
  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task"><span><MaterialIcon icon='book' /> Nova tarefa</span></label>
        <input
          type="text"
          id="task"
          name="task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          placeholder="O que você quer fazer?"
          required
        ></input>
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time"><span><MaterialIcon icon='timer' /> Tempo</span></label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          min="00:00:00"
          max="01:30:00"
          required
        ></input>
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
};

export default Form;
