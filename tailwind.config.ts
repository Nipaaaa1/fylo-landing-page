import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"]
      },
      colors: {
        primary: {
          "intro-dark-blue": "hsl(217, 28%, 15%)",
          "main-dark-blue": "hsl(218, 28%, 13%)",
          "footer-dark-blue": "hsl(216, 53%, 9%)",
          "testimonial-dark-blue": "hsl(219, 30%, 18%)",
        },
        accent: {
          cyan: "hsl(176, 68%, 64%)",
          blue: "hsl(198, 60%, 50%)",
          "light-red": "hsl(0, 100%, 63%)"
        }
      },
      boxShadow: {
        email: "1px 2px 6px 3px rgba(0,0,0,0.6)"
      }
    }
  }
}
