# LoanStreet Development Project

## Completed Features
- Web server that supports the following actions:
  - Create a loan with the following properties as input:
    - Amount
    - Interest rate
    - Length of loan in months
    - Monthly payment amount
  - Get a loan created using the above action
  - Update a loan created using the above action
- Sample programmatic client for the aforementioned server

## Features Outstanding
- Testing: Model, Routes, and Components
- Deployment: frontend and backend
- Finanlizing frontend client

## Environment Setup Instructions
Enter the following terminal commands:

### Backend
1. Flask Environment Setup
    ```console
    $ python3 -m venv venv
    $ source venv/bin/activate
    (venv) $ pip install -r requirements.txt
    ```
2. Database Setup
    ```console
    (venv) $ psql
    =# CREATE DATABASE loanstreet;
    =# (control-d)
    (venv) $ python seed.py
    ```
3. .env File Setup
    Add the following lines to your .env file:
    ```txt
    SECRET_KEY=fake_key
    DATABASE_URL=postgresql:///loanstreet
    ```
4. Run the Server
    ```console
    (venv) $ flask run
    ```

### Programatic Client
1. Flask Environment Setup
    ```console
    $ python3 -m venv venv
    $ source venv/bin/activate
    (venv) $ pip install -r requirements.txt
    ```
2. Run the file
    ```console
    (venv) $ python3 client.py
    ```

### Frontend
1. Environment Setup
    ```console
    $ npm install
    ```
    
2. Run the Server
    ```console
    $ npm start
    ```