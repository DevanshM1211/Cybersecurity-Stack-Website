#!/bin/bash

# LinkedIn Feed Setup Helper
# This script helps you set up your environment variables for the LinkedIn feed

set -e

echo "🔧 LinkedIn Feed Setup Helper"
echo "=============================="
echo ""

# Check if .env.local exists
if [ -f .env.local ]; then
    echo "✓ Found existing .env.local file"
    echo ""
    read -p "Do you want to add LinkedIn variables to it? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Cancelled."
        exit 0
    fi
else
    echo "📝 Creating new .env.local file from .env.example..."
    cp .env.example .env.local
    echo "✓ Created .env.local"
    echo ""
fi

echo "Choose your LinkedIn feed integration method:"
echo ""
echo "1. LinkedIn API (Fully automated, requires OAuth setup)"
echo "2. Google Sheets (Easy manual updates)"
echo "3. Static JSON (Edit linkedin-posts.json manually)"
echo "4. All methods (Recommended for maximum reliability)"
echo "5. Skip LinkedIn setup"
echo ""

read -p "Enter your choice (1-5): " choice

case $choice in
    1|4)
        echo ""
        echo "📱 LinkedIn API Setup"
        echo "===================="
        echo ""
        echo "You'll need to create a LinkedIn app first."
        echo "Visit: https://www.linkedin.com/developers/apps"
        echo ""
        read -p "Have you created a LinkedIn app? (y/n) " -n 1 -r
        echo ""
        
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            read -p "Enter your LinkedIn Client ID: " client_id
            read -p "Enter your LinkedIn Client Secret: " client_secret
            read -p "Enter your Organization ID (numeric): " org_id
            
            # Add to .env.local if not already present
            if ! grep -q "LINKEDIN_CLIENT_ID" .env.local; then
                echo "" >> .env.local
                echo "# LinkedIn API Configuration" >> .env.local
            fi
            
            # Update or append
            sed -i '' "s|LINKEDIN_CLIENT_ID=.*|LINKEDIN_CLIENT_ID=$client_id|" .env.local 2>/dev/null || echo "LINKEDIN_CLIENT_ID=$client_id" >> .env.local
            sed -i '' "s|LINKEDIN_CLIENT_SECRET=.*|LINKEDIN_CLIENT_SECRET=$client_secret|" .env.local 2>/dev/null || echo "LINKEDIN_CLIENT_SECRET=$client_secret" >> .env.local
            sed -i '' "s|LINKEDIN_ORGANIZATION_ID=.*|LINKEDIN_ORGANIZATION_ID=$org_id|" .env.local 2>/dev/null || echo "LINKEDIN_ORGANIZATION_ID=$org_id" >> .env.local
            
            echo ""
            echo "✓ LinkedIn API credentials saved!"
            echo ""
            echo "Next steps:"
            echo "1. Start your dev server: npm run dev"
            echo "2. Visit: http://localhost:3000/api/linkedin/oauth/start"
            echo "3. Authorize the app and copy the access token"
            echo "4. Add the token to .env.local as LINKEDIN_ACCESS_TOKEN"
            echo ""
        fi
        
        if [[ $choice != 4 ]]; then
            break
        fi
        ;;&
    
    2|4)
        echo ""
        echo "📊 Google Sheets Setup"
        echo "====================="
        echo ""
        echo "You'll need a public Google Sheet with these columns:"
        echo "id, title, preview, author, date, url"
        echo ""
        read -p "Do you have a Google Sheet ready? (y/n) " -n 1 -r
        echo ""
        
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            read -p "Enter your Google Sheet ID: " sheet_id
            read -p "Enter the tab name (default: Posts): " sheet_tab
            sheet_tab=${sheet_tab:-Posts}
            
            if ! grep -q "GOOGLE_SHEET_ID" .env.local; then
                echo "" >> .env.local
                echo "# Google Sheets Configuration" >> .env.local
            fi
            
            sed -i '' "s|GOOGLE_SHEET_ID=.*|GOOGLE_SHEET_ID=$sheet_id|" .env.local 2>/dev/null || echo "GOOGLE_SHEET_ID=$sheet_id" >> .env.local
            sed -i '' "s|GOOGLE_SHEET_TAB=.*|GOOGLE_SHEET_TAB=$sheet_tab|" .env.local 2>/dev/null || echo "GOOGLE_SHEET_TAB=$sheet_tab" >> .env.local
            
            echo ""
            echo "✓ Google Sheets configuration saved!"
            echo ""
            echo "Test URL: https://opensheet.elk.sh/$sheet_id/$sheet_tab"
            echo ""
        fi
        
        if [[ $choice != 4 ]]; then
            break
        fi
        ;;&
    
    3|4)
        echo ""
        echo "📝 Static JSON Setup"
        echo "===================="
        echo ""
        echo "The file data/linkedin-posts.json already exists with sample posts."
        echo ""
        read -p "Do you want to open it for editing now? (y/n) " -n 1 -r
        echo ""
        
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            if command -v code &> /dev/null; then
                code data/linkedin-posts.json
                echo "✓ Opened in VS Code"
            elif command -v nano &> /dev/null; then
                nano data/linkedin-posts.json
            else
                echo "Please edit data/linkedin-posts.json manually"
            fi
        fi
        ;;
    
    5)
        echo "Skipped LinkedIn setup."
        exit 0
        ;;
    
    *)
        echo "Invalid choice."
        exit 1
        ;;
esac

echo ""
echo "🧪 Testing your LinkedIn feed configuration..."
echo ""

# Test if Node.js is available
if command -v node &> /dev/null; then
    node scripts/test-linkedin-feed.js
else
    echo "⚠️  Node.js not found. Skipping test."
    echo "   Install Node.js to test your configuration."
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📚 For detailed documentation, see: LINKEDIN_SETUP.md"
echo "🚀 Start your server: npm run dev"
echo ""
