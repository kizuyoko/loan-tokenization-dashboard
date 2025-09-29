# Credit institutions
## Create profile
Profile contains: Name, Country, Founding Year, Total Portfolio, Credit Risk Score, Product Type (Mortgage/Private/Business), Website URL, Contacts
API Endpoint: create-profile (profile)

## Import loan data
### Import with CSV
Every loan has a unique loan id, status, amount, payment schedule, interest charged to the borrower, LTV (if collateral), risk group, URL reference to agreement.

Click Upload CSV button to send their loan data to our platform

API Enpoint: upload-csv (file)

## Loan status change
Loan status changes when a loan is expired (ACTIVE, EXPIRED)

## Tokenize loans
Credit institutions can tokenize loans
API Endpoint: tokenize-loans (loan)

## View dashboard
1. Summary of imported loans
2. Summary of tokenized loans
3. Chart
    1. shows total loan amount (in EUR and %)
    2. shows total tokenised amount (in EUR and %)
    3. shows total invested amount (in EUR and %)
    4. shows the performance of the loans

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/kizuyoko/boilerplate-react-nextjs-typescript-tailwind.git
cd boilerplate-react-nextjs-typescript-tailwind
```
Then, install dependencies and start the development server:

```bash
npm install
npm run dev
# or
yarn
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000)  in your browser to see the app running.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
