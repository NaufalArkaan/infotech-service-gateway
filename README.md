# Infotech Service Redirect Hub

This is a modern landing page built with Next.js and Tailwind CSS designed to seamlessly route users to various system domains.

## Installation & Setup

Since `node_modules` and `.next` build folders are ignored in version control to save space, anyone who clones this repository will need to install the dependencies manually. Follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/NaufalArkaan/infotech-service-gateway.git
cd infotech-service-gateway
```

### 2. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed on your computer. Run the following command in the terminal at the root of the project:
```bash
npm install
```
*This command will read the `package.json` file and automatically download all the required packages into a new `node_modules` folder.*

### 3. Run the Development Server
Once the installation is complete, start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running with Docker (Alternative)

If you prefer using Docker, you don't even need to run `npm install` locally. The container will handle it for you.

```bash
docker-compose up --build
```
The site will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/data/services.ts`: Central data configuration for the service cards.
- `src/components/ui/ServiceCard.tsx`: The UI template for individual cards.
- `src/app/page.tsx`: The main landing page including the dynamic grid and search functionality.
