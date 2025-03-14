// Destructuring object and Array:
const user = {
    firstName: "Pratik",
    lastName: "Majage",
    email: "pratik@example.com",
    phone: "+91XXXXXXXXXX",
    education: {
        degree: "B.Tech in Computer Engineering",
        university: "XYZ University",
        graduationYear: 2025,
        skills: ["JavaScript", "Python", "MongoDB", "SQL", "React", "Node"]
    },
    workExperience: [
        {
            company: "ABC Tech",
            role: "Software Developer Intern",
            duration: "Jan 2024 - Jun 2024"
        }
    ],
    preferences: {
        interests: ["Web Development", "AI", "Competitive Programming"]
    }
};


let { skills} = user.education
console.log(skills)


let [first, second] = user.education.skills
console.log(first, second)