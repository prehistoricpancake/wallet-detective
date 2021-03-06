module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
      colors:{
        'light-gray': '#F0F1F4',
        'black':'#292830',
        'dark-gray':'#6D6B76',
        'white':'#FFFFFF',
        'lighter-gray':'#F7F9FB',
        'blue': '#97F3FF',
        'green': '#A2F660',
        'red': '#F75353',
        'normal-gray':'#92909D',
      },
      
      
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        lg: ['18px', {
          lineHeight: '22px',
        }],        
        md:['13px', {
          lineHeight: '144%',
        }],
        rg:['12px', {
          lineHeight: '15px',
        }],
      },
    extend:{
      padding:{
        '25':'150px',
        '24':'300px',
        '22':'100px',
        '23':'200px',
       },
       margin:{
         '15': "-230px"
       }
    },
  },
  variants: {},
  plugins: [],
};