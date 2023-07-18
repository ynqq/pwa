import mkcert from 'vite-plugin-mkcert'

export default {
    server: {
        port: 4000,
        https: true
    },
    plugins: [
        mkcert()
    ]
}