# AgriX Network Website

This is the official website for AgriX Network International, a platform connecting farmers, researchers, and consumers to promote regenerative agriculture practices worldwide.

## Deployment Instructions

### Prerequisites
- Node.js 18 or later
- npm 9 or later

### Local Development

1. Clone the repository
\`\`\`bash
git clone https://github.com/your-username/agrix-network.git
cd agrix-network
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Deployment Options

#### Vercel (Recommended)
1. Push your code to a GitHub repository
2. Import the project in Vercel dashboard
3. Vercel will automatically detect Next.js and deploy your site

#### Netlify
1. Push your code to a GitHub repository
2. Import the project in Netlify dashboard
3. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy the site

#### Heroku
1. Push your code to a GitHub repository
2. Connect your GitHub repository to Heroku
3. Add the Node.js buildpack
4. Deploy the site

#### Static Export (for any static hosting)
1. Modify `next.config.mjs` to include `output: 'export'`
2. Run `npm run build`
3. Upload the `out` directory to your hosting provider

## Environment Variables
- `NEXT_PUBLIC_SITE_URL`: Your website's URL (optional)

## Project Structure
- `app/`: Application routes and pages
- `components/`: Reusable React components
- `public/`: Static assets like images
- `styles/`: Global CSS styles

## Technologies Used
- Next.js 14
- React 18
- Tailwind CSS
- shadcn/ui components
\`\`\`

```gitignore file=".gitignore"
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
