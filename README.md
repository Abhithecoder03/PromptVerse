# AI Prompt Generator Next.js Project

## Overview
This project is a Next.js application designed to provide users with the best AI-generated prompts. Users can create, post, and search for prompts, making it a versatile tool for generating and discovering creative ideas.

## Features
- **Prompt Generation**: Generate high-quality AI prompts.
- **Create Prompts**: Users can create their own prompts and share them with the community.
- **Post Prompts**: Post your created prompts for others to see and use.
- **Search Prompts**: Easily search for specific prompts by keywords or tags.

## Tech Stack
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Animations**: Framer Motion
- **Image Handling**: Next.js Image component
- **Backend**: Next.js

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Abhithecoder03/NextJSPrompt.git
    
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Create a `.env.local` file in the root of your project and add your environment variables:
    ```bash
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```

### Running the Development Server
To start the development server, run:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
```
├── components
│   ├── Sidebar.js
│   ├── Dashboard.js
│   ├── MyProfile.js
│   └── ...
├── pages
│   ├── api
│   │   ├── prompt
│   │   │   └── [id].js
│   │   └── ...
│   ├── index.js
│   ├── profile.js
│   └── ...
├── public
│   ├── images
│   │   └── ...
│   └── ...
├── styles
│   └── globals.css
├── .env.local
├── package.json
└── ...
```

## Usage

### Creating a Prompt
1. Navigate to the profile page.
2. Click on "Create Prompt".
3. Fill in the details and submit.

### Searching for Prompts
1. Use the search bar at the top of the homepage.
2. Enter keywords or tags to find relevant prompts.

### Editing and Deleting Prompts
1. Navigate to the profile page.
2. Find the prompt you want to edit or delete.
3. Use the corresponding buttons to edit or delete the prompt.
   
### Preview
![image](https://github.com/user-attachments/assets/af8c4713-37a4-4bd5-9927-38b75ee85375)


## Deployment

### Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

1. [Sign up for Vercel](https://vercel.com/signup) (no credit card required).
2. Install the [Vercel CLI](https://vercel.com/download):
    ```bash
    npm i -g vercel
    # or
    yarn global add vercel
    ```
3. Deploy the project:
    ```bash
    vercel
    ```

### Other Hosting Providers
For other hosting providers, please refer to their specific documentation on deploying Next.js applications.

## Contributing
If you have suggestions for improving this project or want to contribute, please fork the repository and create a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

---

Happy prompting! If you have any questions, feel free to open an issue or reach out to the community.
