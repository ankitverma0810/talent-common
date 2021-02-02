import { Subjects } from './subjects';

// This would be the information that will be passed to the NATS server
export interface OrderCancelledEvent {
    subject: Subjects.OrderCancelled;
    data: {
        id: string;
        ticket: {
            id: string;
        }
    }
}