/*
 Recursion
 Exercise 16 of 18


# Task

Implement a recursive function that returns all of the unique dependencies, and sub-dependencies of a module, sorted alphabetically. Dependencies should be printed as dependency@version e.g. []()'.

Multiple versions of the same module are allowed, but duplicates modules of the same version should be removed.

## Arguments:

  * tree: A dependency tree. See below for an example of the structure.

## Example

    var loremIpsum = {
      "name": "lorem-ipsum",
      "version": "0.1.1",
      "dependencies": {
        "optimist": {
          "version": "0.3.7",
          "dependencies": {
            "wordwrap": {
              "version": "0.0.2"
            }
          }
        },
        "inflection": {
          "version": "1.2.6"
        }
      }
    }

    getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]


## Conditions:

  * Do not use any for/while loops.


## Resources

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

*/

function getDependenciesSet(tree, set) {
    if (tree && tree.dependencies) {
        Object
            .entries(tree.dependencies)
            .forEach(([key, value]) => {
                set.add(`${key}@${value.version}`);
                getDependenciesSet(value, set);
            });
    }
}

function getDependencies(tree) {
    const set = new Set();
    getDependenciesSet(tree, set)

    return [...set].sort();
}

module.exports = getDependencies