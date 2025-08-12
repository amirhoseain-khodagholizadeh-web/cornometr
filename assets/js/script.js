  const h2 = document.querySelectorAll("h2")
  const start = document.querySelectorAll("button")[0]
  const stopBtn = document.querySelectorAll("button")[1]
  const reset = document.querySelectorAll("button")[2]
  let ms = 0
  let s = 1
  let m = 1
  let x

  start.addEventListener("click", (e) => {
      x = setInterval(() => {
          if (ms == 100) {
              h2[1].innerText = s
              if (h2[1].innerText.length < 2) {
                  h2[1].innerText = "0" + h2[1].innerText
              }
              ms = 0
              s++
          } else {
              if (s == 60) {
                  h2[0].innerText = m
                  if (h2[0].innerText.length < 2) {
                      h2[0].innerText = "0" + h2[0].innerText
                  }
                  s = 0
                  m++
              } else {
                  h2[2].innerText = ms
                  if (h2[2].innerText.length < 2) {
                      h2[2].innerText = "0" + h2[2].innerText
                  }
                  ms++
              }
          }
      }, 10)
  })
  stopBtn.addEventListener("click", (e) => {
      clearInterval(x)

  })
  reset.addEventListener("click", (e) => {
      ms = 0
      s = 0
      m = 0
      h2[1].innerText = s
      h2[2].innerText = m
      h2[0].innerText = ms
      h2[1].innerText = "0" + h2[1].innerText
      h2[2].innerText = "0" + h2[2].innerText
      h2[0].innerText = "0" + h2[0].innerText
      clearInterval(x)
  })