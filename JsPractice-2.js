function findLongestWords(sentence) {
    let longestWords = [];
    let currentWord = '';
    let maxLength = 0;
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      
      if (char !== ' ') {
        currentWord += char;
      } else if (currentWord.length > 0) {
        if (currentWord.length > maxLength) {
          maxLength = currentWord.length;
          longestWords = [currentWord]; 
        } else if (currentWord.length === maxLength) {
          longestWords.push(currentWord); 
        }
        currentWord = '';
      }
    }
    if (currentWord.length > maxLength) {
      longestWords = [currentWord];
    } else if (currentWord.length === maxLength) {
      longestWords.push(currentWord);
    }
    return longestWords;
  }
  const h3 = document.querySelector('h3');
  h3.addEventListener('click', function() {
    const sentence = prompt('Sentence Input:');
    if (sentence.trim() === '') {
      alert('No sentence entered.');
      return;
    }
    const longestWords = findLongestWords(sentence);
    if (longestWords.length > 0) {
      const longestWordsString = longestWords.join(', ');
      alert(`The Longest Words: ${longestWordsString}`);
    } else {
      alert('There are no words in the sentence');
    }
  });
  