import ClassStudent from "./ClassStudent.model";
import Room from "./Room.model";
import Teacher from "./Teacher.model";


interface Schedule {
    _id?: string;
    dayOfWeek: string;
	startTime: string;
	endTime: string;
	room: Room;
	teacher: Teacher;
	class: ClassStudent;
}

export default Schedule;