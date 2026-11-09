
const multiplyValue = (value: number, multiplier?: number):number => {
  if(multiplier===undefined){
    multiplier=2;
  }
  return value *multiplier;
}




const processInput=(input: string|number|boolean):string |number =>{

    if (typeof input=="string") 
       {return input.trim().toLowerCase();}

    else if (typeof input=="number")    
        {return input * 10;} 

    else {
        return input ? "Active":"Inactive";
         }
  }



const formatCoordinate = (
    coordinates: readonly [number, number, string]): string => {

    let latitude = 0;
    let longitude = 0;
    let locationName = "";

    for (let i = 0; i < coordinates.length; i++) {

        if (i === 0 && typeof coordinates[i] === "number") {
            latitude = coordinates[i];
        }

        else if (i === 1 && typeof coordinates[i] === "number") {
            longitude = coordinates[i];
        }

        else if (i === 2 && typeof coordinates[i] === "string") {
            locationName = coordinates[i];
        }
    }

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};



const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    let result: T[] = [];
    for (const arr of arrays) {
        result = result.concat(arr);
    }
    return result;
};



 interface Course {
       title: string ;
       students: number ;
       isPublished: boolean ;
   }

 const getPopularCourses = (courses: Course[],minStudents:number): Course[] => 
     {return courses.filter((course) => { 
      return course.isPublished === true && course.students >= minStudents; });
     };



const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    const result: T[K][] = [];
    for (const item of items)
    {
      result.push(item[key]);
    }
    return result;
};



class Employee {
      constructor(
      protected name: string,
      private baseSalary: number
   ) {}

   getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
  }

 class Manager extends Employee {
  constructor(
     name: string,
     baseSalary: number,
     private department: string
   )
   {super(name, baseSalary);}

    getRoleInfo(): string 
    {return `Manager of ${this.department}: ${this.name}`;}
 }



async function validateAgeAsync(age: number): Promise<string> {
 return new Promise<string>((accept, reject) => {
    if (age >= 18) {
        setTimeout(() => 
            {accept("Access Granted");}, 1000);
  }

    else {
            reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}

