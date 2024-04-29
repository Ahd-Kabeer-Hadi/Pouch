# Pouch: Your Digital Wallet MVP

Pouch is a minimalist MVP (Minimum Viable Product) designed to emulate the functionality of a digital wallet app. Pouch isn’t just any wallet app—it’s a versatile platform that can be seamlessly integrated with other services to serve as their wallet and reward management system. I originally developed Pouch to complement my passion project, Menteor, which I’m currently working on. Right now, Pouch is in its MVP stage, featuring two main modules: user, handling all things wallet-related, and merchant, designed for managing rewards by admin users.

## Technologies Utilized

Pouch leverages the following technologies to deliver its functionalities:

- **Next.js**: Utilized for both the User and Merchant applications.
- **Express**: Employed to simulate bank endpoints, ensuring transaction success.
- **AWS**: Utilized EC2 for deployment. Future integration is postponed to streamline and reduce costs initially.
- **Monorepo**: Utilized Turborepo as the build system and for maintaining the Monorepo.
- **Prisma**: Utilized as the ORM.
- **PostgreSQL**: Dockerized container for local development and NeonDB for production.
- **Tailwind CSS**: Utilized for styling.
- **Shadcn**: Planned for future integration, as the current version of the app is a basic MVP.
- **CI/CD**: Implemented for building and deploying to Docker.
- **Docker**: Utilized for containerization.

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
   docker run --name pouch -e POSTGRES_PASSWORD=pword -d -p 5432:5432 postgres
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

