# Deployment Guide

This AI interface prototype can be deployed to multiple platforms for easy sharing and testing.

## Vercel Deployment (Recommended)

### Prerequisites
- Vercel account (free at https://vercel.com)
- GitHub repository with your code

### Steps

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "AI Interface Prototype"
   git push origin main
   \`\`\`

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Select your repository
   - Keep default settings
   - Click "Deploy"

3. **Your app is live!**
   - Vercel assigns you a URL like `https://ai-interface-[random].vercel.app`
   - Share this URL with others

## Local Development

### Quick Start

1. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

2. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open in browser**
   - Navigate to http://localhost:3000

### Storybook Development

View and test individual components:
\`\`\`bash
npm run storybook
\`\`\`

Visit http://localhost:6006 to explore component library.

## Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Environment Variables

Currently, the app uses mock data. To integrate with real APIs:

1. Create `.env.local` file in project root
2. Add your API keys:
   \`\`\`
   NEXT_PUBLIC_OPENAI_API_KEY=your_key_here
   NEXT_PUBLIC_ANTHROPIC_API_KEY=your_key_here
   \`\`\`

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Performance Optimization

- Dark mode by default reduces battery usage on OLED displays
- Responsive layout adapts to all screen sizes
- Lazy loading for templates and models

## Troubleshooting

### Theme not persisting
- Clear browser cache and localStorage
- Check browser dark mode preference

### Slider controls not responsive
- Ensure JavaScript is enabled
- Try a different browser
- Check console for errors: F12 → Console tab

### Storybook not loading
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `npm run build`

## Contributing

To add features:

1. Create a new branch
2. Make changes following the component patterns
3. Test with Storybook: `npm run storybook`
4. Commit and push
5. Create Pull Request

## License

MIT - Feel free to use this prototype for personal and commercial projects.
