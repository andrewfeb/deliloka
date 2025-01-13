const helper = {
  strLimit(str, limit) {
    if (str.length > limit) {
      return `${str.substring(0, limit)}...`;
    }
    return str;
  },

  iconRate(iconName, fill = true) {
    return `<i class="material-symbols-rounded text-sm text-primary ${(fill) ? 'fill' : ''}">${iconName}</i>`;
  },

  setVisualRating(rate, limit = 5) {
    const calRate = Math.trunc(rate);
    let visualRate = '';
    for (let i = 1; i <= limit; i++) {
      if (i <= calRate) {
        visualRate += this.iconRate('star');
      } else if ((rate % calRate > 0.5) && (Math.round(rate) == i)) {
        visualRate += this.iconRate('star_half');
      } else {
        visualRate += this.iconRate('star', false);
      }
    }

    return visualRate;
  }
};

export default helper;
