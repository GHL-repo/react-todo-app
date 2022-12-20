import TaskItem from './TaskItem';

import styles from './TaskList.module.css';

const TaskList = ({tasks, removeTask}) => {
  return (
    <ul className={styles.tasks}>
        {tasks.sort((a, b) => b.id - a.id).map(task => (
            <TaskItem
                key={task.id}
                task={task}
                removeTask={removeTask}
            />
        ))
        }
    </ul>
  )
}

export default TaskList