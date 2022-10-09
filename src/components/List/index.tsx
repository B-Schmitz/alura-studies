import style from './List.module.scss';
import Item from './Item';
import ITask from '../../types/taks';
import MaterialIcon from '@material/react-material-icon';

interface Props {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

const List = ({ tasks, selectTask }: Props) => {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia <MaterialIcon icon='list' /></h2>
      {tasks.map(item => (
        <Item selectTask={selectTask} key={item.id} {...item} />
      ))}
    </aside>
  );
};

export default List;
