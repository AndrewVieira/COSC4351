# COSC4351
COSC 4351 Project - Company Admin Portal Application

## Install and Run Instructions

### Front End (Development)
1. Install Node.js
2. Open command prompt, and go into the frontend directory
3. Run `npm install` to install dependencies
4. Run `npm start`
5. Open your web browser, and go to http://localhost:3000 to see the project running

### Backend (Development)
In order to run the backend, create a virtual environment and install the dependencies:

```bash
python -m venv /path/to/my/venv
source /path/to/my/venv/bin/activate
cd /path/to/COSC4351/portal
pip install -r requirements.txt
```

Next trigger migration and start the backend:

```bash
python manage.py migrate
python manage.py runserver
```

You can now access the various backend sites and interfaces: 

- http://localhost:8080/portal/admin
- http://localhost:8080/portal/links
- http://localhost:8080/portal/rest-auth/login

### Docker (Deployment)

Running the full solution in Docker is the prefered way to run the Portal application as it guarantees an exact replication of an environment that is known to work for the application.

```bash
docker build -t portal .
docker run -p 8080:8080 portal
```

Open your web browser and got to http://localhost:8080 to see the project login page.