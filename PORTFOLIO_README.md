# Emmanuel Fidel - Frontend Developer Portfolio

A modern, professional React 18 portfolio showcasing frontend development skills, projects, and user impact metrics. Built with TypeScript, Vite, and modern CSS animations.

## 🚀 Features

- **Modern Design**: Clean, responsive design with smooth animations
- **React 18**: Latest React features with TypeScript for type safety
- **Performance Optimized**: Fast loading with Vite build system
- **Interactive UI**: Hover effects, smooth scrolling, and engaging animations  
- **Contact Form**: Functional contact form integrated with EmailJS
- **Mobile Responsive**: Fully responsive across all device sizes
- **Professional Showcase**: Real project examples with impact metrics

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, CSS3
- **Build Tool**: Vite
- **Contact Form**: EmailJS
- **Deployment**: Ready for Vercel/Netlify

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS (for contact form)**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a Gmail service
   - Create an email template
   - Update the EmailJS configuration in `src/components/Contact.tsx`:
     ```typescript
     await emailjs.send(
       'YOUR_SERVICE_ID',    // Replace with your service ID
       'YOUR_TEMPLATE_ID',   // Replace with your template ID  
       templateParams,
       'YOUR_PUBLIC_KEY'     // Replace with your public key
     )
     ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update personal details in the following components:
- `src/components/Hero.tsx` - Name, title, description
- `src/components/About.tsx` - About text, stats, skills
- `src/components/Contact.tsx` - Email address, social links

### Projects
Modify the projects array in `src/components/Projects.tsx`:
```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    technologies: ["React", "TypeScript", "etc"],
    impact: {
      users: "Number of users",
      improvement: "Performance improvement",
      metric: "Success metric"
    },
    github: "GitHub URL",
    demo: "Live demo URL",
    image: "Project image URL"
  }
]
```

### Skills & Technologies
Update the skills array in `src/components/Skills.tsx`:
```typescript
const skills: Skill[] = [
  { name: "Technology", level: 90, category: "Frontend" }
]
```

### Styling
- Global styles: `src/App.css`
- Component styles: Individual CSS files in `src/components/`
- Color scheme: Modify CSS custom properties for theme colors

## 📧 Contact Form Setup (EmailJS)

1. **Create EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Sign up and verify your email

2. **Add Email Service**
   - Go to Email Services
   - Add new service (Gmail recommended)
   - Connect your Gmail account

3. **Create Email Template**
   - Go to Email Templates
   - Create new template with variables:
     - `{{from_name}}`
     - `{{from_email}}`
     - `{{subject}}`
     - `{{message}}`
     - `{{to_email}}`

4. **Get Integration Details**
   - Service ID from Email Services
   - Template ID from Email Templates  
   - Public Key from Account settings

5. **Update Contact Component**
   - Replace placeholder values in `src/components/Contact.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects if needed

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🎯 Performance Features

- Code splitting with React lazy loading
- Optimized images and assets
- CSS animations with hardware acceleration
- Minimal bundle size with tree shaking

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/portfolio/issues).

## 📧 Contact

Emmanuel Fidel - emmanuelfidel07@gmail.com

Project Link: [https://github.com/your-username/portfolio](https://github.com/your-username/portfolio)

---

⭐ Star this repository if it helped you build your portfolio!