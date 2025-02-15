import { Task } from '../model/Task';

export function validateTask(data: Partial<Task>, isNew = true): void {
    if (isNew && !data.title) {
        throw new Error('Title is required');
    }
    if (data.status && !['pendente', 'em andamento', 'concluído'].includes(data.status)) {
        throw new Error('Invalid status');
    }
}