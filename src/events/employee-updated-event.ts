import { Subjects } from './subjects';

// This would be the information that will be passed to the NATS server
export interface EmployeeUpdatedEvent {
	subject: Subjects.EmployeeUpdated;
	data: {
		id: string;
		firstname: string;
		lastname: string;
		email: string;
		reportsTo: string;
		version: number;
	}
}