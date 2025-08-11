/**
 * Converts a HEX color code to an HSL string.
 * @param {string} hex - Color code in #RRGGBB format.
 * @returns {string} - String in `hsl(h, s%, l%)` format.
 */

export function hexToHsl(hex) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

/**
 * Preset model color mapping table (in HSL format).
 */
export const modelColorMap = {
    'm6Anet': hexToHsl('#2e3792'), // hsl(236, 54%, 38%)
    'm6Anet-retrain': hexToHsl('#2e3792'), // hsl(236, 54%, 38%)
    'EpiNano': hexToHsl('#8e5aa2'), // hsl(286, 32%, 49%)
    'EpiNano-retrain': hexToHsl('#8e5aa2'), // hsl(286, 32%, 49%)
    'SingleMod': hexToHsl('#f6c365'), // hsl(40, 89%, 67%)
    'SingleMod-retrain': hexToHsl('#f6c365'), // hsl(40, 89%, 67%)
    'NanoSPA': hexToHsl('#bc1932'), // hsl(351, 78%, 43%)
    'NanoSPA-retrain': hexToHsl('#bc1932'), // hsl(351, 78%, 43%)
    'TandemMod': hexToHsl('#9DCB62'), // hsl(90, 50%, 60%)
    'TandemMod-retrain': hexToHsl('#9DCB62'), // hsl(90, 50%, 60%)
    'Dinopore': hexToHsl('#F4B5CA'), // hsl(342, 77%, 83%)
    'Dinopore-retrain': hexToHsl('#F4B5CA'), // hsl(342, 77%, 83%)
    'Nanom6A': hexToHsl('#098889'), // hsl(181, 88%, 30%)
    'ELIGOS': hexToHsl('#cca814'), // hsl(46, 83%, 44%)
    'ELIGOS_diff': hexToHsl('#c5781a'), // hsl(33, 78%, 45%)
    'MINES': hexToHsl('#7b5223'), // hsl(31, 55%, 31%)
    'EpiNano_delta': hexToHsl('#c896c8'), // hsl(300, 31%, 68%)
    'CHEUI': hexToHsl('#6ab93c'), // hsl(101, 50%, 47%)
    'Tombo': hexToHsl('#57217b'), // hsl(279, 57%, 30%)
    'Tombo_com': hexToHsl('#b82373'), // hsl(325, 68%, 43%)
    'DiffErr': hexToHsl('#cfe298'), // hsl(79, 57%, 72%)
    'DRUMMER': hexToHsl('#d25a9c'), // hsl(326, 56%, 59%)
    'xPore': hexToHsl('#5d96d0'), // hsl(211, 53%, 60%)
    'Nanocompore': hexToHsl('#969696'), // hsl(0, 0%, 59%)
    'DENA': hexToHsl('#a8d6b3'), // hsl(137, 35%, 75%)
    'm6Aiso': hexToHsl('#f1881a'), // hsl(33, 89%, 52%)
    'pum6A': hexToHsl('#129abf'), // hsl(193, 81%, 43%)
    'NanoMUD': hexToHsl('#78862f'), // hsl(71, 50%, 34%)
    'NanoRMS': hexToHsl('#4b4b4b'), // hsl(0, 0%, 29%)
    'PsiNanopore': hexToHsl('#2a65b0'), // hsl(212, 60%, 43%)
    'Xron': hexToHsl('#6affb9'), // hsl(155, 100%, 71%)
    'Dorado': hexToHsl('#ef1fff'), // hsl(294, 100%, 56%)
};


/**
 * Generates an array of colors based on the model list. Prefers preset colors.
 * @param {number} n - Number of models.
 * @param {string[]} modelNames - Array of model names.
 * @returns {string[]} - Array of HSL color strings.
 */
export function generateColors(n, modelNames) {
    const colors = [];
    for (let i = 0; i < n; i++) {
        const model = modelNames[i];
        if (modelColorMap[model]) {
            colors.push(modelColorMap[model]);
        } else {
            // Generate fallback colors for models without presets
            colors.push(`hsl(${Math.round((360 / n) * i)}, 70%, 60%)`);
        }
    }
    return colors;
}

/**
 * Preferred sorting order for CSV files.
 */
export const preferredCsvOrder = [
    'm6A_002.csv',
    'ψ_002.csv',
    'm5C_002.csv',
    'AtoI_002.csv',
    'm7G_002.csv',
    'm1A_002.csv',
    'm6A_004.csv',
    'ψ_004.csv',
    'm5C_004.csv',
    'AtoI_004.csv',
    'm7G_004.csv',
    'm1A_004.csv',
];
