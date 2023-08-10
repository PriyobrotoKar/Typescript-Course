// todo You are building a user management system, and you have two TypeScript types:

// ? User: Represents basic user information, with the following properties:
// id (number): The user's unique identifier.
// name (string): The user's name.
// email (string): The user's email address.

// ? Account: Contains details about the user's account, with the following properties:
// account Id (number): The account's unique identifier.
// account Type (string): The type of the account (e.g.,"Savings," "Checking," etc.)
// balance (number): The account balance.

// * Your task is to create a function called combineUserAndAccount that takes a User object and an Account object as arguments and returns a new object representing the combined information of the user and their account.
// Ensure that the resulting object contains all the properties from both User and Account types

type User = {
  id: number;
  name: string;
  email: string;
};
type Account = {
  acc_id: number;
  acc_type: string;
  balance: number;
};

const userDetails: User = {
  id: 52000148,
  name: "Priyobroto Kar",
  email: "priyobrotokar@gmail.com",
};
const accountDetails: Account = {
  acc_id: 8999016475331,
  acc_type: "Recurring",
  balance: 50000,
};
const combineUserAndAccount = (user: User, account: Account) => {
  return { ...user, ...account };
};
const combinedUserData: User & Account = combineUserAndAccount(
  userDetails,
  accountDetails
);
console.table(combinedUserData);
console.log(combinedUserData);
