# The Gourmet Table - Restaurant Website

A modern, elegant restaurant website built with React (frontend) and Node.js + Express (backend). Features a beautiful design with warm color palette, smooth animations, and responsive layout.

## 🍽️ Features

### Pages & Sections
- **Home Page**: Hero section, signature dishes showcase, about preview, testimonials
- **About Page**: Restaurant story, chef profiles, values, awards & recognition
- **Menu Page**: Categorized dishes (Starters, Main Course, Desserts, Beverages) with dietary information
- **Gallery Page**: Filterable image gallery (Food, Interior, Kitchen)
- **Contact Page**: Contact form with validation, restaurant information, map placeholder

### Design & UX
- Elegant food color palette (gold, brown, maroon, cream)
- Custom fonts: Playfair Display (headings) and Poppins (body)
- Smooth hover transitions and scroll animations (AOS & Framer Motion)
- Fully responsive design for mobile and desktop
- Modern UI components with Tailwind CSS

### Technical Features
- React 18 with React Router for navigation
- Tailwind CSS for styling with custom color scheme
- Framer Motion for advanced animations
- AOS (Animate On Scroll) library
- Form validation and user feedback
- Fallback images using Unsplash API
- Express server serving React build
- API endpoints for contact and reservations (static responses)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd path/to/Resturant
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Install server dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

### Development Mode

Run both frontend and backend simultaneously:
```bash
npm run dev
```

Or run them separately:

**Frontend only** (React dev server):
```bash
npm run client
```

**Backend only** (Express server):
```bash
npm run server
```

### Production Build

1. **Build the React app**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm start
   ```

The server will serve the built React app and API endpoints on port 5000.

## 📁 Project Structure

```
Resturant/
├── client/                 # React frontend
│   ├── public/
│   │   ├── images/        # Restaurant images
│   │   └── index.html
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   ├── pages/         # Page components
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   ├── Menu.js
│   │   │   ├── Gallery.js
│   │   │   └── Contact.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css      # Tailwind CSS + custom styles
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── server/                # Express backend
│   ├── index.js          # Main server file
│   └── package.json
├── package.json          # Root package.json
└── README.md
```

## 🎨 Customization

### Colors
The color scheme is defined in `client/tailwind.config.js`:
- **Primary**: Warm browns and creams
- **Gold**: Accent color for highlights
- **Maroon**: Secondary accent

### Fonts
- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)

### Images
Add your restaurant images to `client/public/images/`. The website includes fallback images from Unsplash if local images aren't found.

### Menu Items
Edit the menu data in `client/src/pages/Menu.js` to reflect your restaurant's offerings.

### Restaurant Information
Update contact details, hours, and restaurant story in the respective page components.

## 🌐 API Endpoints

- `GET /api/health` - Server health check
- `POST /api/contact` - Contact form submission (logs to console)
- `POST /api/reservation` - Reservation requests (logs to console)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development Notes

### Lint Warnings
The project may show lint warnings for:
- Tailwind CSS directives (`@tailwind`, `@apply`) - These are expected and will work correctly
- Package.json schema loading - Network-related, doesn't affect functionality

### Image Optimization
For production, consider:
- Compressing images (use tools like TinyPNG)
- Converting to modern formats (WebP, AVIF)
- Implementing lazy loading for better performance

### Database Integration
To add real functionality:
- Connect to a database (MongoDB, PostgreSQL, etc.)
- Implement user authentication
- Add reservation management system
- Set up email notifications

## 📄 License

MIT License - feel free to use this project for your restaurant or modify it as needed.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For questions or support, please contact the development team or create an issue in the project repository.

---

**The Gourmet Table** - Where culinary artistry meets exceptional dining experience. 🍽️✨
