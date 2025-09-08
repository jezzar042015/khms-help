import type { Tutorial } from "../types/tutorials"

const tutorials: Tutorial[] = [
    {
        id: 7,
        title: "Printing or Saving to a PDF File",
        description: "Proper way in printing the meeting schedules",
        publish: true
    },
    {
        id: 1,
        title: "Changing the Schedule for a Circuit Overseer's Visit",
        description: "Learn how to manage schedule changes during a Circuit Overseer's visit.",
        publish: true
    },
    {
        id: 2,
        title: 'During Circuit Assemblies or Conventions',
        description: "Learn how to manage schedule changes during Circuit Assemblies and Regional Conventions.",
        publish: false
    },
    {
        id: 3,
        title: "Setting the Day of your Congregation's Midweek Meeting",
        description: "Learn how to set your congregation's midweek meeting day. This will enhance the app's ability to generate weekly dates on your schedule.",
        publish: false
    },
    {
        id: 4,
        title: "Setting the Start Time of your Midweek Meeting",
        description: "Learn how to set the start time of your midweek meeting. This will ensure the adjusted meeting runtime fits to your meeting.",
        publish: false
    },
    {
        id: 5,
        title: "Changing the Local Needs Part",
        description: "Learn how to change the title for Local needs parts in your congregation and other meeting changes such as Governing Body Updates.",
        publish: true
    },
    {
        id: 6,
        title: "Switching Between Schedule Templates",
        description: "S-140 and customized template options are available. Learn how to switch between them.",
        publish: true
    },

]

export default tutorials