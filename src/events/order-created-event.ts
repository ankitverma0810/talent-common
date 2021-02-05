import { Subjects } from './subjects';
import { OrderStatus } from './types/order-status';

// This would be the information that will be passed to the NATS server
export interface OrderCreatedEvent {
    subject: Subjects.OrderCreated;
    data: {
        id: string;
        status: OrderStatus;
        userId: string;
        expiresAt: string;
        version: number;
        ticket: {
            id: string;
            price: number;
        }
    }
}