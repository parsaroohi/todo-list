import { Todo } from './Model';
export interface ITodoService {
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearComplete(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
}
export default class TodoService implements ITodoService {
    private static _lastId;
    private todos;
    constructor(todos: string[]);
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearComplete(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    private _find;
    toggle(todoId: any): void;
}
