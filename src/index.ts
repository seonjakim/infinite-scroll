const test = 'hi';

export function hello(word: string = test): string {
  return `hello ${test}}`;
}

hello('bye');
