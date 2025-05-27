# Me.D

> ⚠️ **Note**: This project was developed as part of an academic endeavor and is no longer actively maintained. It may not function as intended with current technologies.

**Me.D** is a decentralized application (dApp) built on the Ethereum blockchain that empowers patients with ownership of their medical records. Hospitals can mint records under the patient's identity, and researchers can license access to this data. The system ensures data privacy, security, and controlled access through smart contracts.

## Features

* **Patient Ownership**: Patients have full ownership and control over their medical records.
* **Hospital Record Minting**: Hospitals can mint medical records directly under a patient's identity.
* **Researcher Access Licensing**: Researchers can request and obtain time-bound licenses to access anonymized patient data.
* **Secure Data Storage**: Medical records are stored as encrypted Base64 strings, ensuring data confidentiality.
* **Time-Bound Access**: Access to medical records is granted for a specified duration, after which it expires automatically.


## Getting Started

> ⚠️ **Disclaimer**: Given the project's academic nature and lack of ongoing maintenance, the following setup instructions may not work as expected with current versions of dependencies.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BibinBennyPeter/Me.D.git
   cd Me.D
   ```

2. Install dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. Compile and deploy smart contracts:

   ```bash
   cd ../contract
   truffle compile
   truffle migrate --network <network_name>
   ```

4. Start the front-end application:

   ```bash
   cd ../frontend
   npm start
   ```

## Usage

1. Connect your MetaMask wallet to the application.
2. Hospitals can mint new medical records under a patient's identity.
3. Patients can view and manage their medical records.
4. Researchers can request access to anonymized data and, upon approval, receive time-bound access.

## Security Considerations

* All medical records are encrypted before being stored on-chain to ensure confidentiality.
* Smart contracts enforce strict access controls and time-bound permissions.
* Regular audits and security checks are recommended to maintain system integrity.
