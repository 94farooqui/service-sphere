export const sidebar = [
    {
        iconUrl : '/assets/home_icon.svg',
        label:'Home',
        routeUrl:'/'
    },
    {
        iconUrl : '/assets/allbugs_icon.svg',
        label:'All Bugs',
        routeUrl:'/bugs'
    },
    {
        iconUrl : '/assets/me_icon.svg',
        label:'Assigned to me',
        routeUrl:'/me'
    },
    {
        iconUrl : '/assets/archive_icon.svg',
        label:'Archive',
        routeUrl:'/archive'
    },
    {
      iconUrl : '/assets/settings_icon.svg',
      label:'Settings',
      routeUrl:'/settings'
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
      color:"AED6F1"
    },
    {
      status:"Close",
      color:"6B9BBB"
    }
  ]

  export const statusValues = [
    {
      label:"New",
      value:"New"
    },
    {
      label:"Open",
      value:"Open"
    },
    {
      label:"Pending",
      value:"Pending"
    },
    {
      label:"Close",
      value:"Close"
    }
  ]

  export const users = [
    {
      name: "Virender Sehwag",
      email : "sehwag@india.com"
    },
    {
      name:"Sachin Tendulkar",
      email: "sachin@india.com"
    },
    {
      name:"Saurav Ganguly",
      email: "saurav@india.com"
    },
    {
      name:"Rahul Dravid",
      email: "dravid@india.com"
    },
    {
      name:"Yuvraj Singh",
      email: "yuvraj@india.com"
    },
    {
      name:"Mahendra Singh",
      email: "dhoni@india.com"
    },
    {
      name:"Suresh Raina",
      email: "raina@india.com"
    }
  ]

  export const projects = [
    {
      name:"Project A",
      description: "This is description for project A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name:"Project B",
      description: "This is description for project A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name:"Project C",
      description: "This is description for project A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name:"Project D",
      description: "This is description for project A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name:"Project E",
      description: "This is description for project A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name:"Project F",
      description: "This is description for project A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name:"Project G",
      description: "This is description for project A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name:"Project H",
      description: "This is description for project A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]


  const teams = [
    {
      name:"project-1-frontend",
      description: "Project 01 Frontend team",
      domain : "Frontend",
      members: ["65bfb474bd092bff9fb0a0a4",
                "65bfb464bd092bff9fb0a0a1",
                "65bfb44abd092bff9fb0a09e",
                "65bfb436bd092bff9fb0a09b",
                "65bfb41fbd092bff9fb0a098"
              ]
    },
    {
      name:"project-1-backend",
      description: "Project 01 Backend team",
      domain : "Frontend",
      members: ["65bfb474bd092bff9fb0a0a4",
                "65bfb464bd092bff9fb0a0a1",
                "65bfb44abd092bff9fb0a09e",
                "65bfb436bd092bff9fb0a09b",
                "65bfb41fbd092bff9fb0a098"
              ]
    },
    {
      name:"project-2-frontend",
      description: "Project 02 Frontend team",
      domain : "Frontend",
      members: ["65bfb474bd092bff9fb0a0a4",
                "65bfb464bd092bff9fb0a0a1",
                "65bfb44abd092bff9fb0a09e",
                "65bfb436bd092bff9fb0a09b",
                "65bfb41fbd092bff9fb0a098"
              ]
    },
    {
      name:"project-1-frontend",
      description: "Project 01 Frontend team",
      domain : "Frontend",
      members: ["65bfb474bd092bff9fb0a0a4",
                "65bfb464bd092bff9fb0a0a1",
                "65bfb44abd092bff9fb0a09e",
                "65bfb436bd092bff9fb0a09b",
                "65bfb41fbd092bff9fb0a098"
              ]
    }
  ]

  export const bugTypes = [
    {
      name: "system-bugs",
      label: "System"
    },
    {
      name: "network-bugs",
      label: "Network"
    },
    {
      name: "uiux-bugs",
      label: "UI/UX"
    },
    {
      name: "database-bugs",
      label: "Database"
    },
    {
      name: "logic-bugs",
      label: "Logic"
    },
    {
      name: "server-bugs",
      label: "Server"
    }
  ]

  export const priority = [
    {
      name: "low",
      label: "Low"
    },
    {
      name: "medium",
      label: "Medium"
    },
    {
      name: "high",
      label: "High"
    },
    {
      name: "critical",
      label: "Critical"
    },
  ]
  

  export const cardColors = [
    {color:"radial-gradient(circle at 10% 20%, rgb(221, 49, 49) 0%, rgb(119, 0, 0) 90%)"},
    {color:"radial-gradient(circle at 10% 20%, rgb(21, 120, 186) 0%, rgb(13, 71, 110) 90%)"},
    {color:"radial-gradient(circle at 10% 20%, rgb(54, 176, 91) 0%, rgb(34, 107, 56) 90%)"},
    {color:"radial-gradient(circle at 10% 20%, rgb(12, 178, 185) 0%, rgb(7, 123, 127) 90%)"},
    {color:"radial-gradient(circle at 10% 20%, rgb(115, 17, 195) 0%, rgb(81, 13, 137) 90%)"}
  ]