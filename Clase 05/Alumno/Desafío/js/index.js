console.log('Init app, Desafio Clase 5');

// array con datos

var students = [
    {
        firstName: 'Juan',
        lastName: 'Perez',
        dni: 45678987,
        email: 'juan@gmail.com'
    },
    {
        firstName: 'Ana',
        lastName: 'Fernandez',
        dni: 45678989,
        email: 'ana@gmail.com'
    },
    {
        firstName: 'Pedro',
        lastName: 'Marmol',
        dni: 45678956,
        email: 'pedro@gmail.com'
    },
    {
        firstName: 'Rick',
        lastName: 'Sanchez',
        dni: 10078013,
        email: 'rick@gmail.com'
    }
]

// function constructor

function Student(firstName, lastName, dni, email) {
    var id = dni;

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;

    this.getId = function () {
        return 'El id del estudiante es: ' + id;
    }

    // de esta manera valido si no 
    this.getFullName = function () {
        return (this.firstName || '') + ' ' + (this.lastName || '');
    }
}

// para convertir de array plano a array de objetos tipo Student

newStudents = [];

var student;
var newStudent;

for(var i = 0; i < students.length; i++){
    student = students[i];
    newStudent = new Student(student.firstName, student.lastName, student.dni, student.email);
    newStudents.push(newStudent);
}

console.log(newStudents[1].getId());
console.log(newStudents[1].getFullName());
