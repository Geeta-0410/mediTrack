
export const appointments = [
  {
    id: "APT001",
    patient: "Jane Doe",
    doctor: "Dr. Smith",
    department: "Cardiology",
    date: new Date(new Date().setDate(new Date().getDate() + 2)),
    time: "10:00 AM",
  },
  {
    id: "APT002",
    patient: "Jane Doe",
    doctor: "Dr. Jones",
    department: "Dermatology",
    date: new Date(new Date().setDate(new Date().getDate() + 5)),
    time: "02:30 PM",
  },
  {
    id: "APT003",
    patient: "Jane Doe",
    doctor: "Dr. Taylor",
    department: "General Check-up",
    date: new Date(new Date().setDate(new Date().getDate() + 10)),
    time: "11:00 AM",
  },
];

export const medicalRecords = [
    {
        id: "REC001",
        type: "Blood Test Results",
        date: "2023-10-15",
        doctor: "Dr. Smith",
        summary: "All markers within normal range.",
    },
    {
        id: "REC002",
        type: "X-Ray: Left Arm",
        date: "2023-09-22",
        doctor: "Dr. Allen",
        summary: "No fractures or abnormalities detected.",
    },
    {
        id: "REC003",
        type: "Annual Physical",
        date: "2023-08-01",
        doctor: "Dr. Taylor",
        summary: "Patient is in good health. Recommended to continue current diet and exercise regimen.",
    },
    {
        id: "REC004",
        type: "Allergy Test",
        date: "2023-05-30",
        doctor: "Dr. Jones",
        summary: "Mild allergy to pollen identified.",
    },
    {
        id: "REC005",
        type: "Cardiology Follow-up",
        date: "2023-04-18",
        doctor: "Dr. Smith",
        summary: "Blood pressure is stable. Continue medication as prescribed.",
    },
];

export const patients = [
    {
      id: "PAT001",
      name: "Harry",
      email: "harry@example.com",
      phone: "555-0101",
      lastVisit: "2023-08-01",
      avatarUrl: "https://placehold.co/100x100.png",
    },
    {
      id: "PAT002",
      name: "Divyansh",
      email: "divyansh@example.com",
      phone: "555-0102",
      lastVisit: "2023-09-12",
      avatarUrl: "https://placehold.co/100x100.png",
    },
    {
      id: "PAT003",
      name: "Divyanshu",
      email: "divyanshu@example.com",
      phone: "555-0103",
      lastVisit: "2023-07-20",
      avatarUrl: "https://placehold.co/100x100.png",
    },
    {
      id: "PAT004",
      name: "Harshit",
      email: "harshit@example.com",
      phone: "555-0104",
      lastVisit: "2023-10-05",
      avatarUrl: "https://placehold.co/100x100.png",
    },
];

export const healthMetrics = {
  heartRate: [
    { date: "Mon", rate: 75 },
    { date: "Tue", rate: 72 },
    { date: "Wed", rate: 78 },
    { date: "Thu", rate: 74 },
    { date: "Fri", rate: 70 },
    { date: "Sat", rate: 76 },
    { date: "Sun", rate: 72 },
  ],
  bloodPressure: [
    { date: "Mon", systolic: 118, diastolic: 78 },
    { date: "Tue", systolic: 122, diastolic: 80 },
    { date: "Wed", systolic: 120, diastolic: 81 },
    { date: "Thu", systolic: 119, diastolic: 79 },
    { date: "Fri", systolic: 121, diastolic: 80 },
    { date: "Sat", systolic: 120, diastolic: 79 },
    { date: "Sun", systolic: 120, diastolic: 80 },
  ],
  bloodSugar: [
    { date: "Mon", level: 90 },
    { date: "Tue", level: 98 },
    { date: "Wed", level: 92 },
    { date: "Thu", level: 95 },
    { date: "Fri", level: 100 },
    { date: "Sat", level: 94 },
    { date: "Sun", level: 95 },
  ],
};


export type Appointment = (typeof appointments)[number];
export type MedicalRecord = (typeof medicalRecords)[number];
export type Patient = (typeof patients)[number];
