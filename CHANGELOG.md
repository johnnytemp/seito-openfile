## Release Notes

### 1.6.0

- added a configuration for file extensions (thanks to @jackfranklin)
```
seito-openfile.extensions: ["scss", "jsx", "js]
```
  So you are able to open a file that has no extension written in the text like a scss import
```
@import "folder/style"
```

### 1.5.1

- fixed the broken open file at line functionality (thanks to @stephanedr)

### 1.5.0

- open files in scss files written in shortened way
```
@import "folder/style"
```
Where the file ```style``` exists on filesystem with the name ```_style.scss``` (thanks to @dutchwebworks)

### 1.4.0

- open the string that is selected in the document
- you can now open multiple selections at once

### 1.3.4

- fixed windows absolute path and line number

### 1.3.3

- updated readme.

### 1.3.2

- Fix: could not open file if string is last line of editor text (thanks to @beatscode)

### 1.3.1

- added ability to read string with line number and open it at that line (thanks to @beatscode)

### 1.2.5

- added CHANGELOG.md file for better documentation

### 1.2.4

- avoid exception if no editor instance exists in current window

### 1.2.3

- did some minor documentation refinements

### 1.2.2

- removed context menu from output window

### 1.2.1

- added some project specific information into the package.json

### 1.2.0

- added configuration of word bound for path string detection
the default value is ```[\s\<\>\"\'#]``` and can be changed with the configuration parameter
```
seito-openfile.wordbound: "[\\s\\<\\>\\\"\\\'#]"
```

### 1.1.0

- added functionality to use relative path related to the currently open file
- ```~``` at the beginning of a path string indicates a home dir related path

### 1.0.0

- Initial release


Enjoy!