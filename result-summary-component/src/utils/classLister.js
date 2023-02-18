/*
* css module helper function by Dudeonyx
* from https://stackoverflow.com/questions/33949469/using-css-modules-how-do-i-define-more-than-one-style-name
*/

export const classLister =
  (styleObject) =>
  (...classList) =>
    classList.reduce((list, myClass) => {
      let output = list;
      if (styleObject[myClass]) {
        if (list) output += " "; // appends a space if list is not empty
        output += styleObject[myClass];
        //Above: append 'myClass' from styleObject to the list if it is defined
      }
      return output;
    }, "");
