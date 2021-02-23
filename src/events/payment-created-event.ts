import { Subjects } from './subjects';

// This would be the information that will be passed to the NATS server
export interface PaymentCreatedEvent {
    subject: Subjects.PaymentCreated;
    data: {
        id: string;
        orderId: string;
        stripeId: string;
    }
}