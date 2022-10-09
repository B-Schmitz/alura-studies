import { useEffect, useState } from 'react';
import Button from '../Button';
import Watch from './Watch';
import style from './StopWatch.module.scss';
import ITask from '../../types/taks';
import { convertToSeconds } from '../../common/utils/date';

interface Props {
  selected: ITask | undefined
  finishTask: () => void,
  startTask: () => void;
}

export const StopWatch = ({ selected, finishTask, startTask }: Props) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(convertToSeconds(selected.time));
    }
  }, [selected]);

  const regressive = (counter: number = 0) => {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  };

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro.</p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button
        onClick={() => {
          startTask();
          regressive(time);
        }}
      >
        Começar
      </Button>
    </div>
  );
};

export default StopWatch;
