const getRemainingTime = deadline => {
  const now = new Date()
  const remainTime = (new Date(deadline) - now + 1000) / 1000
  const remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2)
  const remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2)
  const remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2)
  const remainDays = Math.floor(remainTime / (3600 * 24))

  console.log(remainDays)

  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainTime
  }
}

const countdown = (deadline, elem, mensaje, finalMessage) => {
  const el = document.getElementById(elem)

  const timerUpdate = setInterval(() => {
    const t = getRemainingTime(deadline)
    el.innerHTML = mensaje + `<div class="row justify-content-center">
    <div class="col-xs-6 col-sm-4 col-lg-2">
        <div class="countdown-container">
            <div class="number">
                ${t.remainHours}
            </div>
            <div class="concept">
                Horas
            </div>
        </div>
    </div>
    <div class="col-xs-6 col-sm-4 col-lg-2">
        <div class="countdown-container">
            <div class="number">
                ${t.remainMinutes}
            </div>
            <div class="concept">
                Minutos
            </div>
        </div>
    </div>
    <div class="col-xs-6 col-sm-4 col-lg-2">
        <div class="countdown-container">
            <div class="number">
                ${t.remainSeconds}
            </div>
            <div class="concept">
                Segundos
            </div>
        </div>
    </div>
</div>`

    if (t.remainTime < 1) {
      clearInterval(timerUpdate)
      el.innerHTML = finalMessage
    }
  }, 1000)
}
countdown('Dec 14 2019 00:00:00 GMT-0600', 'clock', '<p>2da Fase Termina en </p>', '<p>2da Fase a Terminado</p>')
console.log(countdown)
