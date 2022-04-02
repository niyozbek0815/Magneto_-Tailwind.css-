module.exports = {
    content: [
        "./public/*.html",
        './node_modules/tw-elements/dist/js/**/*.js'
    ],
    plugins: [
        require('tw-elements/dist/plugin')
    ],
    theme: {

        extend: {},
        fontFamily: {
            Kaushan: ["Kaushan Script, Zilla Slab, cursive "]
        },
        screens: {
            "sssm": "240px",
            "ssm": "480px",
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },


    },

}