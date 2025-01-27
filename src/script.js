import jhon from "./assets/img/jhon-doe.png";
import jane from "./assets/img/jane-smith.png";
import emily from "./assets/img/emily-jhonson.png";
import michel from "./assets/img/michel-brown.png";
import sarah from "./assets/img/sarah-wilson.png";

export const patients = [
  {
    patient_id: "P001",
    name: "John Doe",
    patient_img: jhon,
    age: 34,
    gender: "Male",
    phone: "+1234567890",
    email: "johndoe@example.com",
    // medical_history: {
    //   allergies: "Penicillin",
    //   chronic_conditions: "Diabetes",
    //   medications: ["Metformin"],
    // },
    medical_history: [
      "Tooth sensitivity",
      "Gum disease",
      "Allergic to penicillin",
    ],
    dental_history: [
      {
        treatment: "Gum Disease",
        date: "2023-06-15",
        dentist: "Dr. Smith",
        description:"Inflammation of gum tissue.",
        treatment_status:"Under Observation",
      },
      {
        treatment: "Tooth Decay",
        date: "2023-08-20",
        description:"Breakdown of enamel surface.",
        dentist: "Dr. Clark",
        treatment_status:"Cured"
      },
      {
        treatment: "Cavity",
        date: "2023-08-20",
        dentist: "Dr. Clark",
        description:"Decay causing tooth holes.",
        treatment_status:"Inactive"

      },
    ],
    insurance: {
      provider: "HealthFirst",
      policy_number: "HF1234567890",
    },
    last_dental_visit: "2024-12-10",
    diagnosis: "Cavity in upper right molar",
    treatment_plan: "Filling",
    next_appointment: "2025-01-25",
    notes: "Patient complains of sensitivity to cold.",
    dentist_name: "Dr. Alice Carter",
    current_issue: "Severe tooth pain",
    doctor: "Dr. Smith",
  },
  {
    patient_id: "P002",
    name: "Jane Smith",
    age: 29,
    gender: "Female",
    patient_img: jane,
    phone: "+1234567891",
    email: "janesmith@example.com",
    medical_history: {
      allergies: "None",
      chronic_conditions: "None",
      medications: [],
    },
    last_dental_visit: "2024-11-15",
    diagnosis: "Wisdom tooth impaction",
    treatment_plan: "Extraction",
    next_appointment: "2025-01-22",
    notes: "Patient reports mild jaw pain.",
    dentist_name: "Dr. Michael Green",
  },
  {
    patient_id: "P003",
    name: "Emily Johnson",
    age: 45,
    gender: "Female",
    patient_img: emily,
    phone: "+1234567892",
    email: "emilyjohnson@example.com",
    medical_history: {
      allergies: "Sulfa drugs",
      chronic_conditions: "Hypertension",
      medications: ["Amlodipine"],
    },
    last_dental_visit: "2024-10-05",
    diagnosis: "Periodontitis",
    treatment_plan: "Scaling and root planing",
    next_appointment: "2025-01-20",
    notes: "Patient advised on oral hygiene practices.",
    dentist_name: "Dr. Lisa White",
  },
  {
    patient_id: "P004",
    name: "Michael Brown",
    age: 52,
    gender: "Male",
    patient_img: michel,
    phone: "+1234567893",
    email: "michaelbrown@example.com",
    medical_history: {
      allergies: "Latex",
      chronic_conditions: "High cholesterol",
      medications: ["Atorvastatin"],
    },
    last_dental_visit: "2024-09-20",
    diagnosis: "Chipped tooth",
    treatment_plan: "Crown placement",
    next_appointment: "2025-01-23",
    notes: "Patient interested in teeth whitening.",
    dentist_name: "Dr. David Smith",
  },
  {
    patient_id: "P005",
    name: "Sarah Wilson",
    age: 37,
    gender: "Female",
    patient_img: sarah,
    phone: "+1234567894",
    email: "sarahwilson@example.com",
    medical_history: {
      allergies: "None",
      chronic_conditions: "Asthma",
      medications: ["Albuterol inhaler"],
    },
    last_dental_visit: "2024-12-01",
    diagnosis: "Gingivitis",
    treatment_plan: "Deep cleaning",
    next_appointment: "2025-01-30",
    notes: "Patient requested fluoride treatment.",
    dentist_name: "Dr. Sophia Taylor",
  },
];

// export const patient = [
//     {
//         "patient_id": 1,
//         "patient_name": "John Doe",
//         "age": 34,
//         "gender": "Male",
//         "contact": {
//             "phone": "+1234567890",
//             "email": "johndoe@gmail.com",
//             "address": "123 Maple St, Springfield"
//         },
//         "medical_history": [
//             "Tooth sensitivity",
//             "Gum disease",
//             "Allergic to penicillin"
//         ],
//         "dental_history": [
//             {
//                 "treatment": "Tooth extraction",
//                 "date": "2023-06-15",
//                 "dentist": "Dr. Smith"
//             },
//             {
//                 "treatment": "Root canal",
//                 "date": "2023-08-20",
//                 "dentist": "Dr. Clark"
//             }
//         ],
//         "insurance": {
//             "provider": "HealthFirst",
//             "policy_number": "HF1234567890"
//         },
//         "current_issue": "Severe tooth pain",
//         "doctor": "Dr. Smith"
//     },
//     {
//         "patient_id": 2,
//         "patient_name": "Alice Johnson",
//         "age": 28,
//         "gender": "Female",
//         "contact": {
//             "phone": "+9876543210",
//             "email": "alice.johnson@email.com",
//             "address": "456 Oak Ave, Greenfield"
//         },
//         "medical_history": [
//             "No allergies",
//             "Asthma"
//         ],
//         "dental_history": [
//             {
//                 "treatment": "Cleaning",
//                 "date": "2024-01-12",
//                 "dentist": "Dr. Adams"
//             }
//         ],
//         "insurance": {
//             "provider": "DentalCare",
//             "policy_number": "DC234567890"
//         },
//         "current_issue": "Mild gum bleeding",
//         "doctor": "Dr. Adams"
//     },
//     {
//         "patient_id": 3,
//         "patient_name": "Emily Davis",
//         "age": 40,
//         "gender": "Female",
//         "contact": {
//             "phone": "+1029384756",
//             "email": "emily.davis@yahoo.com",
//             "address": "789 Birch Rd, Rivertown"
//         },
//         "medical_history": [
//             "Diabetes",
//             "Heart condition"
//         ],
//         "dental_history": [
//             {
//                 "treatment": "Cavity filling",
//                 "date": "2023-10-03",
//                 "dentist": "Dr. Williams"
//             }
//         ],
//         "insurance": {
//             "provider": "CarePlus",
//             "policy_number": "CP87654321"
//         },
//         "current_issue": "Tooth decay sensitivity",
//         "doctor": "Dr. Williams"
//     },
//     {
//         "patient_id": 4,
//         "patient_name": "Michael Brown",
//         "age": 55,
//         "gender": "Male",
//         "contact": {
//             "phone": "+5647382910",
//             "email": "michael.brown@outlook.com",
//             "address": "321 Pine St, Lakeside"
//         },
//         "medical_history": [
//             "No medical conditions"
//         ],
//         "dental_history": [
//             {
//                 "treatment": "Dental implants",
//                 "date": "2023-11-18",
//                 "dentist": "Dr. King"
//             }
//         ],
//         "insurance": {
//             "provider": "SmileSecure",
//             "policy_number": "SS345678901"
//         },
//         "current_issue": "Implant discomfort",
//         "doctor": "Dr. King"
//     },
//     {
//         "patient_id": 5,
//         "patient_name": "Olivia Martinez",
//         "age": 22,
//         "gender": "Female",
//         "contact": {
//             "phone": "+8765432109",
//             "email": "olivia.martinez@gmail.com",
//             "address": "654 Maple Ave, Westcity"
//         },
//         "medical_history": [
//             "No known allergies"
//         ],
//         "dental_history": [
//             {
//                 "treatment": "Braces consultation",
//                 "date": "2024-01-10",
//                 "dentist": "Dr. Stevens"
//             }
//         ],
//         "insurance": {
//             "provider": "SmileCare",
//             "policy_number": "SC0987654321"
//         },
//         "current_issue": "Possible orthodontic treatment",
//         "doctor": "Dr. Stevens"
//     },
//     {
//         "patient_id": 6,
//         "patient_name": "Jacob Taylor",
//         "age": 63,
//         "gender": "Male",
//         "contact": {
//             "phone": "+3156987420",
//             "email": "jacob.taylor@icloud.com",
//             "address": "567 Cedar Blvd, Oldtown"
//         },
//         "medical_history": [
//             "Hypertension",
//             "Asthma"
//         ],
//         "dental_history": [
//             {
//                 "treatment": "Partial denture",
//                 "date": "2023-09-08",
//                 "dentist": "Dr. Green"
//             }
//         ],
//         "insurance": {
//             "provider": "Medicare",
//             "policy_number": "M123456789"
//         },
//         "current_issue": "Dentures adjustment",
//         "doctor": "Dr. Green"
//     },
//     {
//         "patient_id": 7,
//         "patient_name": "Sophia Moore",
//         "age": 50,
//         "gender": "Female",
//         "contact": {
//             "phone": "+4532198765",
//             "email": "sophia.moore@aol.com",
//             "address": "246 Elm St, Forest City"
//         },
//         "medical_history": [
//             "No medical conditions"
//         ],
//         "dental_history": [
//             {
//                 "treatment": "Whitening treatment",
//                 "date": "2024-01-05",
//                 "dentist": "Dr. Miller"
//             }
//         ],
//         "insurance": {
//             "provider": "PrimeCare",
//             "policy_number": "PC56789012"
//         },
//         "current_issue": "Teeth discoloration",
//         "doctor": "Dr. Miller"
//     },
//     {
//         "patient_id": 8,
//         "patient_name": "Ethan Wilson",
//         "age": 19,
//         "gender": "Male",
//         "contact": {
//             "phone": "+9988776655",
//             "email": "ethan.wilson@tmail.com",
//             "address": "123 Sunset Blvd, Hilltop"
//         },
//         "medical_history": [
//             "No allergies",
//             "No chronic diseases"
//         ],
//         "dental_history": [
//             {
//                 "treatment": "Routine check-up",
//                 "date": "2024-01-02",
//                 "dentist": "Dr. Parker"
//             }
//         ],
//         "insurance": {
//             "provider": "FamilyHealth",
//             "policy_number": "FH22334455"
//         },
//         "current_issue": "Preventive care",
//         "doctor": "Dr. Parker"
//     },
//     {
//         "patient_id": 9,
//         "patient_name": "Isabella Thomas",
//         "age": 30,
//         "gender": "Female",
//         "contact": {
//             "phone": "+5432109876",
//             "email": "isabella.thomas@mail.com",
//             "address": "432 Rose St, Townsville"
//         },
//         "medical_history": [
//             "Pregnancy",
//             "Hypoglycemia"
//         ],
//         "dental_history": [
//             {
//                 "treatment": "Dental cleaning",
//                 "date": "2024-01-08",
//                 "dentist": "Dr. Harris"
//             }
//         ],
//         "insurance": {
//             "provider": "DentaLife",
//             "policy_number": "DL34567891"
//         },
//         "current_issue": "Routine dental care during pregnancy",
//         "doctor": "Dr. Harris"
//     },
//     {
//         "patient_id": 10,
//         "patient_name": "Liam Miller",
//         "age": 44,
//         "gender": "Male",
//         "contact": {
//             "phone": "+9081726354",
//             "email": "liam.miller@outlook.com",
//             "address": "789 Pine Ave, Hill Valley"
//         },
//         "medical_history": [
//             "No known conditions"
//         ],
//         "dental_history": [
//             {
//                 "treatment": "Tooth filling",
//                 "date": "2023-12-14",
//                 "dentist": "Dr. Turner"
//             }
//         ],
//         "insurance": {
//             "provider": "DentalSafe",
//             "policy_number": "DS12987654"
//         },
//         "current_issue": "Tooth sensitivity after filling",
//         "doctor": "Dr. Turner"
//     }
// ]
