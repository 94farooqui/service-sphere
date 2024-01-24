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
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      author: "John Doe",
      dateCreated: new Date("2022-01-15"),
      dateResolved: new Date("2022-01-20"),
      project: "Project A",
      assignee: "Developer 1",
      status:"Pending",
      comms: [
        {
          user:"Rahul Dravid",
          msg:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        },
        {
          user:"Sachin Tendulkar",
          msg: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        },
        {
          user:"Saurav Ganuly",
          msg:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        },
        {
          user:"MS Dhoni",
          msg:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        }
      ]
    },
    {
      _id:2,
      bug_id: "BG-102",
      name: "UI Issue",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      author: "Jane Smith",
      dateCreated: new Date("2022-02-10"),
      dateResolved: new Date("2022-02-18"),
      project: "Project B",
      assignee: "Developer 2",
      status:"Open",
      comms: [
        {
          user:"Rahul Dravid",
          msg:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        },
        {
          user:"Sachin Tendulkar",
          msg: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        },
        {
          user:"Saurav Ganuly",
          msg:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        },
        {
          user:"MS Dhoni",
          msg:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        }
      ]
    },
    {
      _id:3,
      bug_id: "BG-103",
      name: "Functionality Error",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      author: "Alice Johnson",
      dateCreated: new Date("2022-03-05"),
      dateResolved: new Date("2022-03-12"),
      project: "Project C",
      assignee: "Developer 3",
      status:"Pending",
      comms: [
        {
          user:"Rahul Dravid",
          msg:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        },
        {
          user:"Sachin Tendulkar",
          msg: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        },
        {
          user:"Saurav Ganuly",
          msg:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        },
        {
          user:"MS Dhoni",
          msg:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        }
      ]
    },
    {
      _id:4,
      bug_id: "BG-104",
      name: "Security Vulnerability",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      author: "Bob Brown",
      dateCreated: new Date("2022-04-20"),
      dateResolved: new Date("2022-04-25"),
      project: "Project D",
      assignee: "Developer 4",
      status:"Resolved",
      comms: [
        {
          user:"Rahul Dravid",
          msg:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        },
        {
          user:"Sachin Tendulkar",
          msg: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        },
        {
          user:"Saurav Ganuly",
          msg:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        },
        {
          user:"MS Dhoni",
          msg:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        }
      ]
    },
    {
      _id:5,
      bug_id: "BG-105",
      name: "Performance Bug",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      author: "Eva Lee",
      dateCreated: new Date("2022-05-10"),
      dateResolved: new Date("2022-05-18"),
      project: "Project E",
      assignee: "Developer 5",
      status:"Pending",
      comms: [
        {
          user:"Rahul Dravid",
          msg:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        },
        {
          user:"Sachin Tendulkar",
          msg: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        },
        {
          user:"Saurav Ganuly",
          msg:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        },
        {
          user:"MS Dhoni",
          msg:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          time: new Date("2024-02-18")
        }
      ]
    },
    // Add more bug objects as needed
  ];

  export const dashboardTiles = [
    {
      label:"New bugs",
      value : 42,
      fromColor: '#D6EAF8',
      toColor:'#5DADE2'
    },
    {
      label:"Open bugs",
      value : 26,
      fromColor: '#D6EAF8',
      toColor:'#5DADE2'
    },
    {
      label:"Closed bugs",
      value : 16,
      fromColor: '#D6EAF8',
      toColor:'#5DADE2'
    },
    {
      label:"Pending for review",
      value : 36,
      fromColor: '#D6EAF8',
      toColor:'#5DADE2'
    },
    {
      label:"Projects",
      value : 12,
      fromColor: '#D6EAF8',
      toColor:'#5DADE2'
    }
  ]

  export const statusColors = [
    {
      status:"Pending",
      color:"fde047"
    },
    {
      status:"Open",
      color:"fca5a5"
    },
    {
      status:"Resolved",
      color:"86efac"
    },
    {
      status:"New",
      color:"4f46e5"
    }
  ]