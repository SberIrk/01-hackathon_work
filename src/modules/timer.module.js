import {Module} from "@/core/module";

// Над модулем работала Олейник Анастасия

export class TimerModule extends Module {

  constructor(type) {
    super(type,"Таймер");
  }

  #fullDashArray = 283;
  #warningThreshold = 10;
  #alertThreshold = 5;

  #colorCodes = {
    info: {
      color: 'green',
    },
    warning: {
      color: 'orange',
      threshold: this.#warningThreshold,
    },
    alert: {
      color: 'red',
      threshold: this.#alertThreshold,
    },
  };

  #timeLimit = 60;
  #timePassed = 0;
  #timeLeft = this.#timeLimit;
  #timerInterval = null;
  #remainingPathColor = this.#colorCodes.info.color;
  #bodyTimer;

  trigger() {

    this.#bodyTimer = document.createElement('div');
    this.#bodyTimer.innerHTML = `
      <div class="base-timer">
        <svg class="base-timer_svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g class="base-timer_circle">
            <circle class="base-timer_path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
              id="base-timer-path-remaining"
              stroke-dasharray="283"
              class="base-timer_path-remaining ${this.#remainingPathColor}"
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
              "
            ></path>
          </g>
        </svg>
        <span id="base-timer-label" class="base-timer__label">${this.#formatTime(
            this.#timeLeft
        )}</span>
      </div>
    `;

    document.body.append(this.#bodyTimer);
    this.#startTimer();
  }

  close(){
    document.body.removeChild(this.#bodyTimer);
    this.#onTimesUp();
  }


  #onTimesUp() {
    clearInterval(this.#timerInterval);
    this.#timeLeft = this.#timeLimit;
  }

  #startTimer() {
    this.#timeLimit = 60;
    this.#timePassed = 0;

    this.#timerInterval = setInterval(() => {
      this.#timePassed = this.#timePassed += 1;
      this.#timeLeft = this.#timeLimit - this.#timePassed;
      document.getElementById('base-timer-label').innerHTML = this.#formatTime(this.#timeLeft);
      this.#setCircleDasharray();
      this.#setRemainingPathColor(this.#timeLeft);

      if (this.#timeLeft === 0) {
        this.#onTimesUp();
      }
    }, 1000);
  }

  #formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  #setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = this.#colorCodes;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById('base-timer-path-remaining')
        .classList.remove(warning.color);
      document
        .getElementById('base-timer-path-remaining')
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById('base-timer-path-remaining')
        .classList.remove(info.color);
      document
        .getElementById('base-timer-path-remaining')
        .classList.add(warning.color);
    }
  }

  #calculateTimeFraction() {
    const rawTimeFraction = this.#timeLeft / this.#timeLimit;
    return rawTimeFraction - (1 / this.#timeLimit) * (1 - rawTimeFraction);
  }

  #setCircleDasharray() {
    const circleDasharray = `${(this.#calculateTimeFraction() * this.#fullDashArray).toFixed(0    )} 283`;
    document
      .getElementById('base-timer-path-remaining')
      .setAttribute('stroke-dasharray', circleDasharray);
  }
}