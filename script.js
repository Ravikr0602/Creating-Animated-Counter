const animationDuration = 4000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round(animationDuration / frameDuration);

const easeOutQuad = (time) => time * (2 - time);

const animateCountUp = (count) => {
  let frame = 0;
  const countTo = parseInt(count.innerHTML, 10);

  const counter = setInterval(() => {
    frame++;

    const progress = easeOutQuad(frame / totalFrames);

    const currentCount = Math.round(countTo * progress);

    if (parseInt(count.innerHTML, 10) !== currentCount) {
      count.innerHTML = currentCount;
    }

    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, frameDuration);
};

const countupEls = document.querySelectorAll("#count");
countupEls.forEach(animateCountUp);
