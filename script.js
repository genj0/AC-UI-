window.onload = function() {
    let input = document.querySelector('input[type=range]'),
      style_el = document.createElement('style'),
      styles = [],
      track_sel = ['::-webkit-slider-runnable-track'];
    document.body.appendChild(style_el);
  
    styles.push('');
  
    input.addEventListener('input', function() {
      let min = this.min || 0,
        max = this.max || 100,
        c_style, u, edge_w, val, str = '';
  
      this.setAttribute('value', this.value);
  
      val = this.value  + '% 100%';
      str += 'input[type="range"]' + track_sel[0] + '{background-size:' + val + '}';
  
      styles[0] = str;
      style_el.textContent = styles.join('');
    }, false);

    let buttons = document.querySelectorAll('.button-wrapper, .button-off-wrapper, .button-mode-wrapper');

    buttons.forEach( function(elem) {
    elem.addEventListener('click', e => {
        e.target.closest('.button-wrapper, .button-off-wrapper, .button-mode-wrapper').classList.toggle('active');
      });
    })
  }