# AI Interface Prototype

A professional AI interface platform for prompt engineering and model testing, combining the best features from OpenAI Playground, Claude, Anthropic, and Microsoft Copilot.

## Research

### Platforms Reviewed

1. **OpenAI Playground**
   - Intuitive model selector with clear descriptions
   - Side-by-side parameter controls
   - Real-time feedback and token counting

2. **Anthropic Claude**
   - Clean conversation interface
   - Persistent chat history in sidebar
   - Advanced parameter presets

3. **Microsoft Copilot Lab**
   - Experimental UI with fresh interactions
   - Model comparison capabilities
   - Clear session management

4. **Hugging Face Spaces**
   - Template-based prompt suggestions
   - Community-shared configurations
   - Open model access

### Core Features Selected

1. **Model Selector** - Dropdown with model descriptions and capabilities
2. **Prompt Editor** - Rich text area with save/load template functionality
3. **Parameters Panel** - Sliders for temperature, max tokens, top-p
4. **Chat/Output Area** - Response display with copy and JSON download
5. **Theme Toggle** - Dark/light mode with localStorage persistence
6. **Responsive Layout** - Mobile, tablet, and desktop breakpoints
7. **Mock API** - Template and model data fetching
8. **Accessibility** - ARIA labels, keyboard navigation, focus states

## Design

### Design System

**Color Palette:**
- Primary: Purple (#58 0.27 270) - Main actions and highlights
- Secondary: Dark (#15 0 0) - Backgrounds and surfaces
- Accent: Lighter Purple (#65 0.25 265) - Secondary actions
- Muted: Gray (#65 0 0) - Secondary text and borders

**Typography:**
- Primary Font: Geist (Sans-serif)
- Mono Font: Geist Mono (Code and parameters)

**Layout:**
- Sidebar Navigation: Fixed left panel with model selection
- Two-column layout: Prompt editor (left) + Parameters (right)
- Responsive collapse on mobile/tablet

### Component Architecture

\`\`\`
App (Main Layout)
├── Header (Title, Theme Toggle, Sidebar Menu)
├── Sidebar (Model Selection, Templates)
├── Main Content
│   ├── Prompt Editor
│   ├── Chat Output
│   └── Parameters Panel
└── Theme Provider (Dark/Light Mode)
\`\`\`

## Development

### Key Components

**Header Component**
- Theme toggle button with icon swap
- Sidebar menu toggle
- Responsive design indicator

**Prompt Editor Component**
- Rich textarea for prompt input
- Save prompt to templates
- Clear button to reset
- Model indicator

**Parameters Panel Component**
- Temperature slider (0-2)
- Max tokens slider (100-4096)
- Top-P slider (0-1)
- Real-time value display
- Helper text explanations

**Chat Output Component**
- Response display area
- Copy to clipboard functionality
- Download as JSON export
- Loading state indicator

**Sidebar Component**
- Model list with descriptions
- Selected model highlighting
- Template list with lazy loading
- Collapsible on smaller screens

### State Management

- React Context for theme persistence
- useState for component-level state
- localStorage for dark mode preference
- Mock API routes for data fetching

### Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus visible states
- Semantic HTML structure
- Screen reader friendly

### Mock API Routes

**GET /api/templates**
Returns list of prompt templates for quick start

**GET /api/models**
Returns list of available AI models with specifications

## Responsive Design

- **Desktop**: Full sidebar + editor + parameters layout
- **Tablet**: Sidebar toggle + stacked panels
- **Mobile**: Hamburger menu + single column layout

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

1. Real API integration with OpenAI, Anthropic, etc.
2. Chat history and session management
3. Prompt versioning and collaboration
4. Model fine-tuning interface
5. Advanced analytics and usage tracking
6. Export to code (Python, JavaScript)
7. Team workspace and sharing
8. Custom model training

## Setup Instructions

1. Clone repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. View storybook: `npm run storybook`
5. Deploy with vercel: `vercel deploy`

## Testing

\`\`\`bash
# Run tests
npm test

# Run storybook
npm run storybook

# Build for production
npm run build
\`\`\`

## Storybook Stories

Component documentation available in Storybook:
- Button component with variants
- Slider with range controls
- Modal for confirmations
- ChatBubble for message display

Run `npm run storybook` to view interactive component documentation.
