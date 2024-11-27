const questions = [
    {
      id: 1,
      prompt:
        "What special prop should always be included for lists of elements?",
      answers: ["id", "name", "key", "prop"],
      correctIndex: 2,
    },
    {
      id: 2,
      prompt: "A React component is a function that returns ______.",
      answers: ["HTML", "JSX", "props", "state"],
      correctIndex: 1,
    },
    {
      id: 3,
      prompt:
        "Which event handler will run when a user is finished filling out a form?",
      answers: ["onSubmit", "onClick", "onChange", "onForm"],
      correctIndex: 0,
    },
    {
      id: 4,
      prompt: "______ is a tool that transpiles JSX into valid JavaScript.",
      answers: ["React", "Babel", "Webpack", "ES6"],
      correctIndex: 1,
    },
    {
      id: 5,
      prompt:
        "What syntax makes it possible to unpack values from arrays, or properties from objects, into distinct variables?",
      answers: ["spread", "key-value", "coalescing", "destructuring"],
      correctIndex: 3,
    },
    {
      id: 6,
      prompt:
        "Returning different elements from a component depending on the state of your application is known as _____ rendering.",
      answers: ["voodoo", "conditional", "reactive", "controlled"],
      correctIndex: 1,
    },
    {
      id: 7,
      prompt:
        "What is the difference between 'saving' and saving as' in most software applications?",
      answers: ["A. 'Saving' updates the current document, while 'savings as' creates a new document with a new name or location.", 
        "B. There is no difference", "C. 'Saving deletes", "D. Saving is"],
      correctIndex: 1,
    },
    {
      id: 8,
      prompt:
        "What is the main purpose of a web browser?",
      answers: ["A. To display web pages and allow internet navigation.", "B. To store files on the internet.",
         "C. To connect computers within a local netwwork.", "D. To clean a computer of viruses."],
      correctIndex: 0,     
    },
    {
      id: 9,
      prompt:
        "What function does the 'refresh' or 'reload' button perform in a web browser?",
      answers: ["A. Deletes the browsing history of the last hour.", "B. Changes the color theme of the website.",
          "C. Reload the current webpage to show any new content or updates.", "D. Closes all open tabs and opens a new browser window."],
      correctIndex: 2,    
    },
    {
      id: 10,
      prompt:
      "What is the primary purpose of browser extensions?",
      answers: ["A. To decrease the browser's loading speeds.", "B. To prevent users from accessing certain websites.",
          "C.To add specific functionalities or features to a web browser.", "D. To increase the size of the browser window."
      ], correctIndex: 2,
    },
    {
      id: 11,
      prompt:
      "If a webpage is not loading correctly, what is a basic troubleshooting step you can take?",
      answers: [ "A. Turn off your computer for three hours.", "B. Immediately uninstall and reinstall your web browser.",
        "C. Try refreshing the page or clearing the browser's cache and cookies.", "D. Send an email to the website's support team."
      ], correctIndex: 2,
    },
    {
      id: 12,
      prompt:
      "If you are developing a software application and encounter a bug, wwhat is the first step in troubleshooting?",
      answers: ["A. Rewrite the entire code from scratch.", "B. Ignore the bug and hope it resolves itself.",
        "D. Immediately ask for help after identifying the issue.", "D. Isolate the section of code where the bug occurs and address it in smaller segments."

      ], correctIndex: 3,
    },
    {
      id: 13,
      prompt:
      "You're trying to automate a task, but the script isn't working as expected. What logical step should yout take first?",
      answers: ["A. Run the scripts repeatedly, hoping for a different result each time.", "B. Assume the task can not be automated and abandon the project.",
        "C. Breakdown the script to test each part individually to find where the error lies.", "D. Increase the computer's memory in the hope that it will solve the problem."

      ], correctIndex: 2,

    },
    {
      id: 14,
      prompt:
      "If the day before yesterday was Sunday, what is the day after tomorrow?",
      answers: ["A. Tuesday", "B. Wednesday", "C. Thursday", "D. Friday"],
      correctIndex: 2,
    }, 
    {
      id: 15,
      prompt:
      "Maria is as old as her mother was when Maria was born. Maria's mother is 38. How old was Maria five years ago?",
      answers: ["A. 19", "B. 16", "C. 14", "D. 13"],
      correctIndex: 2,
    },
    {
      id: 16,
      prompt:
      "Consider the number X, when X is increased by 40%, the new value is 84. What is the original value of X?",
      answers: ["A. 40", "B. 54", "C. 60", "D. 64"],
      correctIndex: 1,
    },
    {
      id: 17,
      prompt:
      "What is a good practice for refining search results to find more specific information or tutorials?",
      answers: ["A. Searching only during specific times of the day for updated results.", "B. Using only the most common and broad terms for searches",
        "C. Adding terms like 'tutorials', 'guide', or 'how-to' to your search query.", "D. Repeating the same search multiple times until the desired results appear. "
      ],
      correctIndex: 2,
    },
  ];
  

  export default questions; 
  