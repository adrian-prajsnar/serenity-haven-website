# Serenity Haven Website

[serenity-haven.vercel.app](https://serenity-haven.vercel.app/)

## Description

The project is a website for Serenity Haven hotel, where guests can view information about the hotel, currently available cabins, book nights, and manage their bookings and account. Full-stack application built using **Next.js** & **TypeScript** with **Supabase** & **NextAuth**.

**Features:**

- Authentication & authorization
- Allow users to log in with their Google Account
- Smooth navigation, loading & UX while visiting the website
- Server data fetching & display of cabins/bookings data
- Cabin sorting
- Users can see when the cabin is available and book it with react-day-picker
- Users can update and delete their bookings
- Users can update their account

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get this project up and running on your local machine, follow these steps:

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

```
git clone https://github.com/adrian-prajsnar/serenity-haven-website.git
```

2. Navigate to the project folder:

```
cd your-project
```

3. Install the project dependencies:

```
npm install
```

## Usage

1. To run the project:

```
npm run dev
```

2. To build the project:

```
npm run build
```

3. To simulate production:

```
npm run prod
```

4. To check for ESLint erorrs:

```
npm run lint
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

`SUPABASE_URL`
`SUPABASE_KEY`

`NEXTAUTH_URL`
`NEXTAUTH_SECRET`

`AUTH_GOOGLE_ID`
`AUTH_GOOGLE_SECRET`

## Contributing

I welcome contributions from the community to enhance and improve this project. To contribute, please follow these steps:

1. Fork the project repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them with clear, descriptive messages.
4. Push your branch to your fork: `git push origin feature/your-feature-name`.
5. Submit a pull request to the main repository, explaining the purpose and changes of your contribution.

I appreciate your contributions and will review and merge them as appropriate. Let's make this project better together!

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
