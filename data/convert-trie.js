// takes in data csv, and converts to javascript file containing data strucutre
// Go through all the words in the dictionary
/* 
[js]var trie = {
    b: {
        a: {
            r: {
                end: true,
                s: {
                    end: true
                }
            }
        }
    },
    f: {
        o: {
            o: {
                end: true
            }
        }
    },
    r: {
        a: {
            t: {
                end: true,
                e: {
                    end: true
                }
            }
        }
    }
};
*/ // - something like that https://johnresig.com/blog/javascript-trie-performance-analysis/
// this is the initial somewhat nieve approach... see how fast it is, then try to implement the other more complicated data strcutres in blog post

// all four letter words to start
const fs = require("fs");
const csv = require("csv-parser");

const wordsArr = [];

const dictLength = 140000;
