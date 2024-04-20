# Pouch: Your Digital Wallet MVP

Pouch is a minimalist MVP (Minimum Viable Product) designed to emulate the functionality of a digital wallet app, drawing inspiration from platforms like Paytm. It serves as a simplified platform for managing transactions, akin to popular digital payment solutions.

## Technologies Utilized

Pouch leverages the following technologies to deliver its functionalities:

- **Next.js**: A React framework for building web applications with server-side rendering and routing.
- **Express**: A flexible Node.js web application framework.
- **AWS**: Cloud services utilized for deployment, storage, and scalability.
- **Monorepo**: Organizational structure for managing multiple projects within a single repository.
- **Prisma**: A modern database toolkit for TypeScript and Node.js.
- **PostgreSQL**: A powerful, open-source relational database system.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Shadcn**: (assuming it's a typo and meant to be "Shadow" or similar): Possibly referring to a shadowing or styling library.
- **CI/CD**: Continuous Integration and Continuous Deployment pipelines for automated testing and deployment.
- **Docker**: Containerization platform for packaging applications and their dependencies.

## Features

Currently, Pouch focuses on user-side functionalities. However, it also envisions a merchant-side interface, similar to the merchant app provided by Paytm, enabling merchants to interact with the platform.

## Getting Started

To set up and run Pouch locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Ahd-Kabeer-Hadi/Pouch.git
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run PostgreSQL:**

   Run PostgreSQL either locally or on the cloud (e.g., Neon.tech):

   ```bash
   docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
   ```

4. **Copy Environment Variables:**

   Copy all `.env.example` files to `.env` and update them with the correct database URL.

5. **Migrate Database Schema:**

   Navigate to `packages/db` and run:

   ```bash
   npx prisma migrate dev
   ```

6. **Seed the Database:**

   Continue in the `packages/db` directory and run:

   ```bash
   npx prisma db seed
   ```

7. **Run the User Application:**

   Navigate to `apps/user-app` and execute:

   ```bash
   npm run dev
   ```

8. **Test Login Credentials:**

   Try logging in using the provided test credentials:
   - Phone: 1111111111
   - Password: alice (as specified in `seed.ts`)

## Contribution

Contributions to Pouch are welcome! Feel free to fork the repository, make your changes, and submit a pull request. Be sure to follow the contribution guidelines outlined in the repository.

## License

Pouch is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute this software as per the terms of the license.