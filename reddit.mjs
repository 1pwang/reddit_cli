#! /usr/bin/env node 
//interpret file in node environment 

//fetch client that we can use to hit reddit API
import fetch from "node-fetch";

//takes URL and opens in default browser
import open from "open";

//Process flags or arguments passed to CLI
import yargs from "yargs";

//returns an array of the path to interpreter and path to CLI 
const { argv } = yargs(process.argv);

//communicate with Reddit API
const res = await fetch('https://www.reddit.com/.json')

//Retrieve data from response object
const data  = await res.json()

const children = data.data.children

const randomIndex = children[Math.floor(Math.random() * children.length)]
const link = `https://www.reddit.com${randomIndex.data.permalink}`

if(argv.print){
    console.log(`
        title: ${randomIndex.data.title}
        link: ${link}
        `
    )
} else {
    open(link)
}