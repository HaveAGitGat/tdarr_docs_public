---
sidebar_position: 2
---
# Inputs

The plugin details' Inputs is an array of input objects. There are two types of input UI:

**text**

**dropdown**

Examples
```js
{
    Inputs: [
      // (Optional) Inputs you'd like the user to enter to allow your plugin to be easily configurable from the UI

      // Text input example
      {
        name: 'language',
        type: 'string',          // set the data type of the input ('string', 'number', 'boolean')
        defaultValue: 'eng',     // set the default value of the input incase the user enters no input
        inputUI: {
          type: 'text',          // specify how the input UI will appear to the user ('text' or 'dropdown')
        },
        tooltip: `Enter one language tag here for the language of the subtitles you'd like to keep. 
      
                  \\nExample:\\n 
                  eng  
                  
                  \\nExample:\\n 
                  
                  fr  
                  
                  \\nExample:\\n 
      
                  de`, // Each line following `Example:` will be clearly formatted. \\n used for line breaks
      },
       // Dropdown input example
      {
        name: 'remove_subs',
        type: 'boolean',         
        defaultValue: false,  
        inputUI: {
          type: 'dropdown',
          options: [
            // a string array of options (will be converted to boolean when the input is loaded)
            'false',
            'true',
          ],
        },
        tooltip: `Select whether to remove or keep subtitles`,
      },
}
```