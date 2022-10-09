import ITask from '../../../types/taks';
import style from './Item.module.scss';

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

const Item = ({ task, time, selected, completed, started, id, selectTask }: Props) => {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`}
      onClick={() => {
        !started && !completed && selectTask({
          task,
          time,
          selected,
          completed,
          started,
          id
        });
      }}
    >
      <h3> {task} </h3>
      <span> {time} </span>
      {completed && <span className={style.concluido} aria-label='Tarefa concluída'></span>}
    </li>
  );
};

export default Item;
