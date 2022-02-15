import requests

url = 'http://localhost:5000'

#Add a loan ####################################################
loan_to_be_added = { 
    'amount':400, 
    "interest_rate":".5", 
    "term":24, 
    "month_payment":60 
    }
new_loan = requests.post(f"{url}/", json=loan_to_be_added)
print("Adding a loan------------------------------")
print ('Loan added: ', new_loan.json())

# Getting Loan ##################################################
id_to_retrieve = 1
retrieved_loan = requests.get(f"{url}/{id_to_retrieve}")
print("Adding a loan------------------------------")
print ('Loan retrieved: ', retrieved_loan.json())

# Updating a Loan ###############################################
details_to_update = {
    'amount':500000000
    }
id_to_update = 1
updated_loan = requests.patch(f"{url}/{id_to_update}", json=details_to_update)
print("Updating a loan------------------------------")
print ('Loan Updated: ', updated_loan.json())