from matplotlib import pyplot as plt
while True:
 try:
   login_id = int(input('Create your bank account numrber '))
   break
 except:
   print('please use only numbers for account id ')
username = (input('enter your name '))
while True:
   login_password = input('Create your bank passsword ')
   if len(login_password) >= 8:
    break
   else:
    print('password must have atleast 8 charcters')
while True:
 try:
    starting_balance = int(input('How much money do you want to start with in your account? '))
    break
 except ValueError:
    print('Please enter only numbers for starting balance.')

print(f'welcome {username} your account has been succesfully added in our bank')
while True:
  enter1 = input('please enter proceed to open your bank portal ')
  if enter1.lower()=='proceed':
   break
  else:
   print('thank you for joining our bank see you soon')  

person = {'a': 50, 'b': 50, 'c': 50, 'd': 50, username: starting_balance}
while True:
 x = input('what operation you want to perform,\n 1.check balance \n 2.transfer \n 3.my account\n' )
      
 if x == '1' or x.lower()=='check balance':
  account_name = input('enter your account name:')
  if account_name in person:
   print(f'{account_name} balance:{person[account_name]}')
  else:
    print('your account not found')

 elif x == '2' or x.lower()=='transfer':
  person_transfer = input('from whom you want to transfer ')
  if person_transfer in person:
    print(f'{person_transfer} to')
    person_transfered = input('to whom you want to transfer ')
    if person_transfer in person:
     print(f'{person_transfer} to {person_transfered}')
     amount_transfered=input('what amount you want to transfer ')
     amount_transfered = int(amount_transfered)
     person[person_transfer] = int(person[person_transfer])
     if amount_transfered <= person[person_transfer]:
       person[person_transfer] = person[person_transfer] - amount_transfered
       person[person_transfered]= person[person_transfered] + amount_transfered
       print(f'the new balance of {person_transfered} is {person[person_transfered]}')
       print(f'the new balance of {person_transfer} is {person[person_transfer]}')
     else:
       print('Inficient balance')

    else:
     print('person not found')
      
  else:
    print('person not found')  
    
 elif x == '3' or x.lower()=='my account':
  print('welcome to your account')
  print(f'username={username} | your balance ={person[username]}')

 else:
  print('select appropriate command')
  continue