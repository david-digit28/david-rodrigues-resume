@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
@import "tailwindcss";

@theme {
  --color-swiss-red: #D52B1E;
  --color-charcoal: #1F1F1F;
  --color-muted-gold: #C8A96B;
  --font-sans: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

@layer base {
  body {
    @apply font-sans text-charcoal bg-white antialiased selection:bg-swiss-red selection:text-white;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-normal tracking-tight;
  }
  
  p {
    @apply leading-relaxed;
  }
}
