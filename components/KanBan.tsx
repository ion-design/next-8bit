
// A kanban board component with 3 columns, "backlog", "in progress", and "done". Each column should have task cards with a title of the task and other information. You should be able to drag and drop from one column to another.


import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = {
  backlog: [
    { id: 'task-1', title: 'Create login page', description: 'Implement user authentication' },
    { id: 'task-2', title: 'Design database schema', description: 'Plan out data structure' },
  ],
  inProgress: [
    { id: 'task-3', title: 'Develop API endpoints', description: 'Create RESTful API for the application' },
  ],
  done: [
    { id: 'task-4', title: 'Set up project repository', description: 'Initialize Git repo and invite team members' },
  ],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = tasks[source.droppableId];
    const destColumn = tasks[destination.droppableId];
    const [removed] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    });
  };

  return (
    <div className="nes-container with-title is-dark p-4 max-w-6xl mx-auto mt-10">
      <p className="title">Kanban Board</p>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex justify-between space-x-4">
          {Object.keys(tasks).map((columnId) => (
            <div key={columnId} className="flex-1">
              <h2 className="text-lg font-bold mb-2 capitalize">{columnId}</h2>
              <Droppable droppableId={columnId}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="nes-container is-rounded min-h-[300px]"
                  >
                    {tasks[columnId].map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="nes-container is-rounded mb-2 bg-white text-black"
                          >
                            <h3 className="font-bold">{task.title}</h3>
                            <p className="text-sm">{task.description}</p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
