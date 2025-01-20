# UniversaLegal

UniversaLegal is an AI-powered legal service platform that makes legal assistance accessible and affordable. The platform connects users with AI legal consultation services and professional lawyers.

## Features

- 🤖 AI Legal Assistant powered by advanced language models
- 🔐 Secure user authentication system
- 💼 Professional legal consultation interface
- 🌐 Modern, responsive web design

## Tech Stack

- **Framework:** Next.js 13+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** NextAuth.js
- **Database:** PostgreSQL with Prisma ORM
- **AI Integration:** Custom-trained legal AI model via Hugging Face

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/universalegal.git
cd universalegal
```

2. Install dependencies:
```bash
npm install
```

3. Copy the example environment file:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

5. Set up the database:
```bash
npx prisma migrate dev
```

6. Start the development server:
```bash
npm run dev
```

## Database Setup

1. Create PostgreSQL database and user:
```sql
CREATE USER admin WITH PASSWORD '123456';
CREATE DATABASE universalegal;
ALTER DATABASE universalegal OWNER TO admin;
```

2. Configure permissions:
```sql
\c universalegal
CREATE SCHEMA IF NOT EXISTS public;
ALTER SCHEMA public OWNER TO admin;
GRANT ALL PRIVILEGES ON SCHEMA public TO admin;
```

3. Run the Prisma migration command to create the database tables
```bash
npx prisma migrate dev --name init
```

## Project Structure

```
universalegal/
├── src/                    # Source code
│   ├── app/               # App router pages
│   ├── components/        # React components
│   └── lib/              # Utility functions
├── prisma/                # Database schema and migrations
└── public/               # Static assets
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.