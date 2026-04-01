export const projects = [
  {
    slug: "bidding-platform",
    title: "Enterprise Bidding Platform",
    description:
      "Scalable enterprise platform with role-based access and optimized performance.",
    problem:
      "Handling large datasets caused slow filtering and poor admin experience.",
    solution:
      "Implemented role-based access and optimized APIs with pagination and filtering.",
    architecture:
      "Frontend (Angular) → Backend (NestJS) → Database (MySQL)",
    impact: [
      "Improved workflows by 40%",
      "Reduced data retrieval time by 35%",
    ],
    tech: ["Angular", "NestJS", "MySQL", "REST APIs"],
  },
  {
    slug: "community-portal",
    title: "Community Management Portal",
    description:
      "Modular UI architecture improving scalability and development speed.",
    problem:
      "Tightly coupled components slowed development and increased bugs.",
    solution:
      "Created reusable architecture with shared modules and directives.",
    architecture:
      "Angular modular architecture with reusable components",
    impact: [
      "Improved dev speed by 30%",
      "Reduced defects by 20%",
    ],
    tech: ["Angular", "TypeScript"],
  },
];