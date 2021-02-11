import { Subjects } from './subjects';

// This would be the information that will be passed to the NATS server
export interface ExpirationCompleteEvent {
	subject: Subjects.ExpirationComplete;
	data: {
		orderId: string;
	}
}