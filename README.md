# Todo App

A simple Todo application with authentication powered by AWS Cognito, Prisma ORM, and a React frontend.

---

## Setup

### Backend

1. **Clone the repository:**
```bash
git clone https://github.com/JoseM1101/insightt_test_back.git
cd insightt_test_back
```

### Install dependencies:
```bash
npm install
```
### Start the development server:
```bash
npm run dev
```

### Environment variables:

Create a .env file in the backend folder with the values attached in the .txt file.

A .env.example is provided listing all required fields.

### Frontend
Clone the repository:

```bash
git clone https://github.com/JoseM1101/insightt_test_front.git
cd insightt_test_front
```

### Install dependencies:

```bash
npm install
```

### Start the development server:

```bash
npm run dev
```
The frontend uses React + Material UI. It handles authentication using JWT tokens from Cognito. Tokens are stored in localStorage under accessToken, idToken, and refreshToken. Axios automatically attaches the accessToken to all requests.

### Frontend Structure
```graphql
src/
├─ api/                       # Axios instance and API functions
│  ├─ axios.ts
│  ├─ auth.ts
│  └─ tasks.ts
│
├─ components/                # Reusable UI components
│  ├─ Modal.tsx               # Custom modal for managing tasks
│  ├─ TodoItem.tsx            # Single task item with update, toggle, delete actions
│  ├─ ProtectedRoute.tsx      # Route guard component
│  └─ LoaderOverlay.tsx       # Global loading spinner overlay
│
├─ context/                   # React context providers
│  ├─ AuthContext.tsx         # Authentication state & logic
│  └─ LoadingContext.tsx      # Global loading state
│
├─ hooks/                     # Custom hooks
│  ├─ useAuth.ts              # AuthContext consumer hook
│  ├─ useLoading.ts           # LoadingContext consumer hook
│  └─ useTasks.ts             # Manages task state and CRUD operations
│
├─ pages/                     # Pages for routing
│  ├─ Login.tsx
│  ├─ SignIn.tsx
│  ├─ Confirm.tsx
│  └─ Todo.tsx
│
├─ routes.tsx                 # Frontend route definitions
├─ types.ts                   # TypeScript types for tasks, users, API responses
└─ main.tsx                   # App entry point
```

### Backend API
#### Auth Endpoints
POST /auth/signup → Registers a new user in Cognito.
Body: { email, password }

POST /auth/confirm → Confirms Cognito signup.
Body: { email, code }

POST /auth/login → Logs in user, returns JWT tokens.
Body: { email, password }

POST /auth/logout → Logs out the user (frontend mainly deletes tokens)

#### User Endpoints
POST /users → Creates a user in the database, links to Cognito.
Body: { email, cognitoId }

GET /users/:id → Retrieves a user by Prisma ID.

#### Task Endpoints
GET /tasks → Returns all tasks for the logged-in user.

POST /tasks → Creates a task for the logged-in user.
Body: { title }

PATCH /tasks/:id → Updates task.
Body: { title? }

DELETE /tasks/:id → Deletes task by ID.

POST /tasks/:id/toggle → Toggles task completion.

All task routes require a valid JWT token:
Authorization: Bearer <AccessToken>

### Testing
#### Backend
Unit test for task creation implemented with Jest.

Run tests:

```bash
npm test
```

#### Frontend
E2E tests for login workflow with Cypress.

Run tests:

```bash
npx cypress open
```
