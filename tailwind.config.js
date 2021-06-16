/* eslint-disable */
const colors = require('tailwindcss/colors')

module.exports = {
	purge: {
	  content: [
	    'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      '**/*.yaml'
    ]
  },
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			'2xl': {'max': '1920px'},
			'xl': {'max': '1279px'},
			'lg': {'max': '1023px'},
			'md': {'max': '767px'},
			'sm': {'max': '639px'},
		},
		fontSize: {
			'3xl': ['36px', {
				letterSpacing: '-0.025em',
				lineHeight: '1.6',
			}],
			'2xl': ['24px', {
				letterSpacing: '-0.025em',
				lineHeight: '1.6',
			}],
			'xl': ['20px', {
				letterSpacing: '-0.025em',
				lineHeight: '1.6',
			}],
			'lg': ['18px', {
				lineHeight: '1.8',
			}],
			'base': ['16px', {
				lineHeight: '1.8',
			}],
			'sm': ['14px', {
				lineHeight: '1.8',
			}],
			'xs': ['12px', {
				lineHeight: '1.6',
			}],
      'zero': ['0px'],
		},
		fontFamily: {
			sans: 'Inter, sans-serif',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.coolGray,
			purple: colors.indigo,
			aporia: '#48CFAD',
			aporiaRed: '#F23B27',
		},
		extend: {
			maxWidth: {
				'screen': '160rem',
			},
			inset: {
				'1/100': '1%',
				'2/100': '2%',
				'3/100': '3%',
				'4/100': '4%',
				'5/100': '5%',
				'6/100': '6%',
				'7/100': '7%',
				'8/100': '8%',
				'9/100': '9%',
				'10/100': '10%',
				'11/100': '11%',
				'12/100': '12%',
				'13/100': '13%',
				'14/100': '14%',
				'15/100': '15%',
				'16/100': '16%',
				'17/100': '17%',
				'18/100': '18%',
				'19/100': '19%',
				'20/100': '20%',
				'21/100': '21%',
				'22/100': '22%',
				'23/100': '23%',
				'24/100': '24%',
				'25/100': '25%',
				'26/100': '26%',
				'27/100': '27%',
				'28/100': '28%',
				'29/100': '29%',
				'30/100': '30%',
				'31/100': '31%',
				'32/100': '32%',
				'33/100': '33%',
				'34/100': '34%',
				'35/100': '35%',
				'36/100': '36%',
				'37/100': '37%',
				'38/100': '38%',
				'39/100': '39%',
				'40/100': '40%',
				'41/100': '41%',
				'42/100': '42%',
				'43/100': '43%',
				'44/100': '44%',
				'45/100': '45%',
				'46/100': '46%',
				'47/100': '47%',
				'48/100': '48%',
				'49/100': '49%',
				'50/100': '50%',
				'-1/100': '-1%',
				'-2/100': '-2%',
				'-3/100': '-3%',
				'-4/100': '-4%',
				'-5/100': '-5%',
				'-6/100': '-6%',
				'-7/100': '-7%',
				'-8/100': '-8%',
				'-9/100': '-9%',
				'-10/100': '-10%',
				'-11/100': '-11%',
				'-12/100': '-12%',
				'-13/100': '-13%',
				'-14/100': '-14%',
				'-15/100': '-15%',
				'-16/100': '-16%',
				'-17/100': '-17%',
				'-18/100': '-18%',
				'-19/100': '-19%',
				'-20/100': '-20%',
				'-21/100': '-21%',
				'-22/100': '-22%',
				'-23/100': '-23%',
				'-24/100': '-24%',
				'-25/100': '-25%',
				'-26/100': '-26%',
				'-27/100': '-27%',
				'-28/100': '-28%',
				'-29/100': '-29%',
				'-30/100': '-30%',
				'-31/100': '-31%',
				'-32/100': '-32%',
				'-33/100': '-33%',
				'-34/100': '-34%',
				'-35/100': '-35%',
				'-36/100': '-36%',
				'-37/100': '-37%',
				'-38/100': '-38%',
				'-39/100': '-39%',
				'-40/100': '-40%',
				'-41/100': '-41%',
				'-42/100': '-42%',
				'-43/100': '-43%',
				'-44/100': '-44%',
				'-45/100': '-45%',
				'-46/100': '-46%',
				'-47/100': '-47%',
				'-48/100': '-48%',
				'-49/100': '-49%',
				'-50/100': '-50%',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
	corePlugins: {
		outline: false,
	},
}