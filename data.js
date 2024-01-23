export const sidebar = [
    {
        iconUrl : '/assets/home-com.svg',
        label:'Home',
        routeUrl:'/'
    },
    {
        iconUrl : '/assets/bug.svg',
        label:'All Bugs',
        routeUrl:'/bugs'
    },
    {
        iconUrl : '/assets/assign-user-com.svg',
        label:'Assigned to me',
        routeUrl:'/me'
    },
    {
        iconUrl : '/assets/archive-com.svg',
        label:'Archive',
        routeUrl:'/archive'
    }
]

export const bugs = [
    {
      _id:1,
      bug_id: "BG-101",
      name: "Critical Bug",
      author: "John Doe",
      dateCreated: new Date("2022-01-15"),
      dateResolved: new Date("2022-01-20"),
      project: "Project A",
      assignee: "Developer 1",
      status:"Pending"
    },
    {
      _id:2,
      bug_id: "BG-102",
      name: "UI Issue",
      author: "Jane Smith",
      dateCreated: new Date("2022-02-10"),
      dateResolved: new Date("2022-02-18"),
      project: "Project B",
      assignee: "Developer 2",
      status:"Pending"
    },
    {
      _id:3,
      bug_id: "BG-103",
      name: "Functionality Error",
      author: "Alice Johnson",
      dateCreated: new Date("2022-03-05"),
      dateResolved: new Date("2022-03-12"),
      project: "Project C",
      assignee: "Developer 3",
      status:"Pending"
    },
    {
      _id:4,
      bug_id: "BG-104",
      name: "Security Vulnerability",
      author: "Bob Brown",
      dateCreated: new Date("2022-04-20"),
      dateResolved: new Date("2022-04-25"),
      project: "Project D",
      assignee: "Developer 4",
      status:"Pending"
    },
    {
      _id:5,
      bug_id: "BG-105",
      name: "Performance Bug",
      author: "Eva Lee",
      dateCreated: new Date("2022-05-10"),
      dateResolved: new Date("2022-05-18"),
      project: "Project E",
      assignee: "Developer 5",
      status:"Pending"
    },
    // Add more bug objects as needed
  ];