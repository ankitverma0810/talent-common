import { Subjects } from './subjects';

// This would be the information that will be passed to the NATS server
export interface EmployeeCreatedEvent {
	subject: Subjects.EmployeeCreated;
	data: {
		id: string;
		firstname: string;
		lastname: string;
		email: string;
		version: number;
	}
}