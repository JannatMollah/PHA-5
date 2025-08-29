## ASSIGNMENT-5 QUESTION'S ANSWER

---

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
- **getElementById** syntax is document.getElementById('idName').It returns single line element
**getElementsByClassName** syntax is document.getElementsByClassName('className'). It returns array like HTMLCollection of elements.
**querySelector** syntax is document.querySelector('selectorName'). It returns first single element if matching selector otherwise it returns null.
**querySelectorAll** syntax is document.querySelectorAll('.myClass'). It returns array like NodeList of elements.

2. How do you **create and insert a new element into the DOM**?
- For create a new element we use **document.createElement(tagName)** and for insert element into the DOM we use **parent.appendChild(newChild)**

3. What is **Event Bubbling** and how does it work?
- Event Bubbling is a system in DOM where en event start execution from target element that triggered. then bubbles up through all its ancestor elements in the hierarchy.
Example: <html><body><div><button>Click Me</button></div></body></html>
When we click "Click Me" button. the event bubbles up and is also fired on the parent <div> and then bubbles up and fired on the <body>. Finally, it bubbles up to the <html> element and then the document object.

4. What is **Event Delegation** in JavaScript? Why is it useful?
- Event Delegation is a technique that simplifies event handling by adding a single event listener to a common parent element, instead of adding individual listeners to each child element.
It is useful for Performance, Dynamic Elements, Less Code.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
- **preventDefault()** It prevents the browser's default behavior and does not stop the event from bubbling.
**stopPropagation()** It stop the event from bubbling and doesn't prevents the browser's default behavior.

---