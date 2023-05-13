import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  theme:{
    screens:{
      'xl':{'max':'1200px'},
      'lg':{'max':'991px'},
      'md':{'max':'767px'},
      'sm':{'max':'550px'},
      'xsm':{'max':'375px'},
    }
  }
})
