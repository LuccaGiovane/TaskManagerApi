export interface Task {
    id?: number;
    title: string;
    description?: string;
    status: 'pendente' | 'em andamento' | 'concluído';
    created_at?: Date;
}