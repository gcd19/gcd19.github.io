(function () {
  var items = Array.prototype.map.call(
    document.querySelectorAll('.side-toc a[href^="#"]'),
    function (link) {
      return { link: link, section: document.getElementById(link.getAttribute('href').slice(1)) };
    }
  ).filter(function (item) {
    return item.section;
  });

  if (!items.length) {
    return;
  }

  var pinned = null;
  var ticking = false;

  function setActive(current) {
    items.forEach(function (item) {
      var active = item === current;
      item.link.classList.toggle('is-active', active);
      if (active) {
        item.link.setAttribute('aria-current', 'true');
      } else {
        item.link.removeAttribute('aria-current');
      }
    });
  }

  function update() {
    ticking = false;
    if (pinned) {
      setActive(pinned);
      return;
    }

    var doc = document.documentElement;
    if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
      setActive(items[items.length - 1]);
      return;
    }

    var threshold = window.innerHeight * 0.3;
    var current = items[0];
    items.forEach(function (item) {
      if (item.section.getBoundingClientRect().top <= threshold) {
        current = item;
      }
    });
    setActive(current);
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  // A clicked target near the bottom may never reach the threshold, so keep it
  // highlighted until the user scrolls on their own.
  function unpin() {
    if (pinned) {
      pinned = null;
      requestUpdate();
    }
  }

  items.forEach(function (item) {
    item.link.addEventListener('click', function () {
      pinned = item;
      setActive(item);
    });
  });

  ['wheel', 'touchstart', 'keydown'].forEach(function (type) {
    window.addEventListener(type, unpin, { passive: true });
  });
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  update();
})();
