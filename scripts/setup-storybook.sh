#!/bin/bash

# Install Storybook dependencies
npm install --save-dev @storybook/react @storybook/nextjs @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-onboarding

# Create .storybook directory if it doesn't exist
mkdir -p .storybook

echo "Storybook setup complete! Run 'npm run storybook' to start Storybook."
