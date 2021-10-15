# length of last word 

difficulty: easy

### JavaScript

## Solution 1

```
const lengthOfLastWord = (s) => { 
    let array = s.trim().split(' ');
    return (array[array.length - 1]).length;
};
```

## Solution 2
```
const lengthOfLastWord = (s) => { 
    let lastWord = s.trim().split(' ').pop();
    return lastWord.length;
};
```

