export default {
  vgpu: {
    target: 'http://127.0.0.1:8000',
    secure: false,
    pathRewrite: {
      '^/api/vgpu': '',
    },
  },
}