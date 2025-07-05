# 📝 Todo Task Web Application

A full-stack Todo application where users can create tasks, view the 5 most recent ones, and mark them as completed. Built using **React**, **Node.js (Express)**, **MySQL**, and **Docker**.

---

## 🚀 Features

- ✅ Add tasks with title and description
- ✅ View the 5 most recent *pending* tasks
- ✅ Mark tasks as completed (they disappear from the UI)
- ✅ Single-page app with live updates
- ✅ Full Docker support for local development

---

## 🧱 Architecture

+-------------+ REST API +------------------+ SQL +-------------+
| React SPA | <------------------> | Node.js Backend | <--------------> | MySQL DB |
+-------------+ +------------------+ +-------------+

Follow these steps:


# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

# What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- Ant Design
- Tailwind CSS

# table structure

CREATE TABLE task (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('pending', 'completed') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



## How to Deploy the Backend

Follow these steps to deploy the backend:

1. **Set up the environment**:
    - Ensure you have Node.js and npm installed on your server.
    - Create a `.env` file in the root directory of the backend project and configure the necessary environment variables (e.g., database connection, API keys).

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Build the project** (if applicable):
    ```sh
    npm run build
    ```

4. **Run database migrations** (if your project uses migrations):
    ```sh
    npm run migrate
    ```

5. **Start the server**:
    ```sh
    npm start
    ```

6. **Set up a process manager** (e.g., PM2) to keep the server running:
    ```sh
    npm install -g pm2
    pm2 start server.js --name "backend-server"
    pm2 save
    pm2 startup
    ```

7. **Configure a reverse proxy** (e.g., Nginx) to route traffic to your backend server.

8. **Test the deployment**:
    - Verify the backend is running by accessing the API endpoints.



    ## How to Run with Docker

    You can use Docker to containerize and run the application. Follow these steps:

    1. **Create a `docker-compose.yml` file**:
        Ensure you have a `docker-compose.yml` file in the root directory of your project. It should define the services for the frontend, backend, and database.

        Example structure:
        ```yaml
        version: '3.8'
        services:
          frontend:
            build:
              context: ./frontend
            ports:
              - "3000:3000"
            depends_on:
              - backend

          backend:
            build:
              context: ./backend
            ports:
              - "5000:5000"
            environment:
              - DATABASE_URL=mysql://user:password@db:3306/tasks
            depends_on:
              - db

          db:
            image: mysql:8
            environment:
              MYSQL_ROOT_PASSWORD: rootpassword
              MYSQL_DATABASE: tasks
              MYSQL_USER: user
              MYSQL_PASSWORD: password
            ports:
              - "3306:3306"
        ```

    2. **Build and start the containers**:
        Run the following command to build and start all services:
        ```sh
        docker-compose up --build
        ```

    3. **Access the application**:
        - Frontend: Open `http://localhost:3000` in your browser.
        - Backend: API endpoints should be accessible at `http://localhost:5000`.

    4. **Stop the containers**:
        To stop the running containers, use:
        ```sh
        docker-compose down
        ```

    5. **Optional**: Use volumes to persist data for the database container.
    ## 🧪 Testing the Application

    ### Frontend Testing

    1. **Install testing dependencies**:
      Ensure you have the necessary testing libraries installed, such as `jest`, `react-testing-library`, or `cypress`:
      ```sh
      npm install --save-dev jest @testing-library/react @testing-library/jest-dom
      ```

    2. **Run unit tests**:
      Execute the following command to run the unit tests:
      ```sh
      npm test
      ```

    3. **Run end-to-end tests** (if applicable):
      If you are using a tool like Cypress for E2E testing, run:
      ```sh
      npx cypress open
      ```

    4. **Write additional tests**:
      Add test cases for components, hooks, and utility functions in the `__tests__` directory.

    ---

    ### Backend Testing

    1. **Install testing dependencies**:
      Use a testing framework like `jest` or `mocha` along with a library like `supertest` for API testing:
      ```sh
      npm install --save-dev jest supertest
      ```

    2. **Write test cases**:
      Create test files in the `tests` directory to cover API endpoints, database interactions, and business logic.

    3. **Run tests**:
      Execute the following command to run the backend tests:
      ```sh
      npm test
      ```

    4. **Mock external dependencies**:
      Use libraries like `sinon` or `nock` to mock external services and isolate your tests.

    5. **Generate test coverage report**:
      Run the tests with coverage enabled:
      ```sh
      npm test -- --coverage
      ```

    6. **Automate testing**:
      Integrate the tests into your CI/CD pipeline to ensure they run on every commit or pull request.