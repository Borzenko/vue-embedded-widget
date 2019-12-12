document.addEventListener('DOMContentLoaded', function () {
  const styles = document.createElement('style')
  styles.type = 'text/css'
  styles.rel = 'stylesheet'
  styles.href = 'link to dist/app.css'
  document.getElementsByTagName('head')[0].appendChild(styles)

  const script = document.createElement('script')
  script.src = 'link to dist/app.js'
})
